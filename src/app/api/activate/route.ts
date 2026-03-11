import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { SignJWT, importPKCS8 } from 'jose'

function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not configured')
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY)
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sessionId = request.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
  }

  try {
    // Verify the payment with Stripe
    const session = await getStripe().checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.redirect(
        new URL('/?error=payment_incomplete', request.nextUrl.origin)
      )
    }

    // Sign the activation token
    if (!process.env.LICENSE_SIGNING_KEY) {
      throw new Error('LICENSE_SIGNING_KEY is not configured')
    }
    const privateKeyPem = process.env.LICENSE_SIGNING_KEY
    const privateKey = await importPKCS8(privateKeyPem, 'EdDSA')

    const token = await new SignJWT({
      paymentId: session.payment_intent as string,
      activatedAt: Date.now()
    })
      .setProtectedHeader({ alg: 'EdDSA' })
      .sign(privateKey)

    // Redirect to the app via deep link
    return NextResponse.redirect(`trollie://activate?token=${token}`)
  } catch (err) {
    console.error('Activation error:', err)
    return NextResponse.redirect(
      new URL('/?error=activation_failed', request.nextUrl.origin)
    )
  }
}
