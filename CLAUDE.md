# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository is the **landing page** for Trollie, a macOS-native desktop app for audio-guided focus sessions. The landing page promotes the product — it is not the app itself.

## Key Documents

- `PRODUCT_BRIEF.md` — Full product spec, features, target markets, and rollout strategy
- `STYLE_GUIDE.md` — Complete visual design language (colors, typography, spacing, components)

## Brand Rules

- Product name is always **"Trollie"** (with "-ie" ending) in customer-facing copy
- Tagline: "Audio-guided focus sessions for your workday"
- Position as a **focus companion**, not a timer or task manager
- Dark mode only aesthetic — never use light backgrounds
- Single accent color: yellow-green `#C8B832` / `oklch(0.75 0.15 75)`, used sparingly for CTAs and interactive elements
- Backgrounds have a subtle purple-blue undertone (hue ~286), not pure neutral gray

## Design Constraints

- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- All spacing on 4px base unit
- Border-driven visual hierarchy (separation through lines, not background shifts)
- Calm, understated aesthetic — no gamification, no gradients-on-gradients, no busy patterns
- CTAs should be the brightest element on the page
- Generous whitespace — the brand is about focus

## Color Quick Reference

```
Background:      #1A1A1E    Foreground:      #FAFAFA
Primary CTA:     #C8B832    Border:          #3A3A42
Muted Text:      #A0A0AC    Popover Surface: #2A2A32
Destructive:     #8B2020    Success:         #34D399
Logo Gold:       #C8A855    Logo Cream:      #E8E0D0
```

## Tech Stack (from product brief)

The app itself uses Electron + React 18 + TypeScript + shadcn/ui + Tailwind CSS. The landing page tech stack has not been chosen yet — refer to any `package.json` or framework config files if they exist by the time you read this.

## Git Policy

**NEVER run `git add`, `git commit`, or `git push` under any circumstances.** All git staging, committing, and pushing is done exclusively by the human operator. This rule has no exceptions — do not offer, suggest, or execute these commands even if asked.
