# Trollie — Visual Style Guide

This document captures the design language of the Trollie desktop application for use in promotional materials, landing pages, and marketing assets.

---

## 1. Brand Identity

### Product Name

- **Product name**: Trollie
- **Repository / internal name**: trolley
- Always spell "Trollie" with an "-ie" ending in customer-facing materials.

### Logo

- **File**: `resources/icon.png` (1024 × 1024 PNG)
- **Description**: A stylized trolley/railway track in perspective, forming a "T" shape. The track rails and ties are cream/off-white; the crossbar of the "T" is a warm golden-amber. Set on a dark charcoal background.
- **Logo colors**:
  - Rails/ties: `#E8E0D0` (warm cream)
  - Crossbar accent: `#C8A855` (golden amber — close to the app's primary yellow-green)
  - Background: `#2A2A2A` (dark charcoal)
- The logo should always appear on a dark background. Do not place it on white or light surfaces without a dark container.

### Tagline / Positioning

- "Audio-guided focus sessions for your workday"
- Trollie is a **focus companion**, not a timer or task manager — emphasize the immersive, multi-sensory experience.

---

## 2. Color Palette

All colors are defined in OKLCH (perceptually uniform color space). Hex approximations are provided for web/design tool use.

### Primary Palette

| Role | OKLCH | Hex Approx. | Usage |
|------|-------|-------------|-------|
| **Primary** | `oklch(0.75 0.15 75)` | `#C8B832` | CTAs, active states, highlights, links |
| **Primary Foreground** | `oklch(0.15 0.02 75)` | `#1E1C0F` | Text on primary backgrounds |
| **Background** | `oklch(0.145 0.004 285.82)` | `#1A1A1E` | Page background, hero sections |
| **Foreground** | `oklch(0.985 0 0)` | `#FAFAFA` | Body text, headings on dark bg |

### Neutral / Surface Palette

| Role | OKLCH | Hex Approx. | Usage |
|------|-------|-------------|-------|
| **Border** | `oklch(0.274 0.006 286.03)` | `#3A3A42` | Dividers, card borders, separators |
| **Muted** | `oklch(0.274 0.006 286.03)` | `#3A3A42` | Inactive backgrounds, subtle fills |
| **Muted Foreground** | `oklch(0.705 0.015 286.07)` | `#A0A0AC` | Secondary text, captions, metadata |
| **Accent** | `oklch(0.32 0.008 286.03)` | `#454550` | Hover backgrounds, subtle emphasis |
| **Popover** | `oklch(0.205 0.015 286.07)` | `#2A2A32` | Elevated cards, dropdowns, modals |

### Semantic Colors

| Role | OKLCH | Hex Approx. | Usage |
|------|-------|-------------|-------|
| **Destructive** | `oklch(0.396 0.141 25.72)` | `#8B2020` | Errors, destructive actions, warnings |
| **Success** | `oklch(0.765 0.177 163.22)` | `#34D399` | Completed states, confirmations |
| **Ring / Focus** | `oklch(0.75 0.12 75)` | `#C0B040` | Focus outlines, keyboard navigation |

### Color Usage Rules

- The UI is **dark mode only**. All promotional materials should default to a dark aesthetic.
- The primary yellow-green is used sparingly — for accents, CTAs, and interactive elements. It should never dominate a layout.
- Backgrounds have a **subtle purple-blue undertone** (hue ~286) that distinguishes them from pure neutral grays.
- Maintain high contrast: foreground text (`~98.5% lightness`) against backgrounds (`~14.5% lightness`).

---

## 3. Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

The app uses **system fonts** for a native macOS feel. For promotional materials:

- **Preferred web font**: [Inter](https://rsms.me/inter/) or SF Pro Display — these closely match the system font rendering.
- **Fallback**: Any clean, geometric sans-serif (e.g., Geist, Plus Jakarta Sans).
- **Monospace** (for timers/code): `font-family: ui-monospace, 'SF Mono', monospace` — used for countdown displays with `tabular-nums`.

### Type Scale

| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| **Display** | 3rem (48px) | 300 (Light) | Hero headlines, countdown timer |
| **Heading 1** | 1.5rem (24px) | 600 (Semibold) | Section headings, task names |
| **Body** | 1rem (16px) | 400 (Regular) | Body text, descriptions |
| **Body Large** | 1.125rem (18px) | 400 (Regular) | Feature descriptions, lead text |
| **Small** | 0.875rem (14px) | 500 (Medium) | Labels, UI text, metadata |
| **Caption** | 0.75rem (12px) | 400 (Regular) | Fine print, timestamps, annotations |

### Typography Rules

- Use `-webkit-font-smoothing: antialiased` for all text on dark backgrounds.
- Letter spacing of `0.05em` (`tracking-wider`) is used for uppercase labels like "TRACKS".
- Timer/number displays use `font-variant-numeric: tabular-nums` and monospace for consistent digit widths.
- Line heights: headings at `1.0–1.25`, body at `1.5`, small text at `1.25`.

---

## 4. Spacing & Layout

### Base Unit

All spacing is built on a **4px base unit** (`0.25rem`).

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Small pills, tags |
| `radius-md` | 6px | Inputs, buttons |
| `radius-lg` | 8px | Cards, modals |
| `radius` (default) | 8px | General use |
| `rounded-full` | 9999px | Progress bars, avatars, circular buttons |

### Spacing Scale (commonly used)

| Class | Value | Usage |
|-------|-------|-------|
| `gap-1` | 4px | Tight icon+label pairs |
| `gap-2` | 8px | Related items within a group |
| `gap-3` | 12px | Between small elements |
| `gap-4` | 16px | Between sections |
| `gap-6` | 24px | Major section breaks |
| `px-4` | 16px | Horizontal padding in buttons/cards |
| `px-8` | 32px | Page-level horizontal padding |

### Max Widths

- Content areas: `max-w-lg` (32rem / 512px) for centered content
- Sidebar: `w-56` (224px)
- Narrow forms: `max-w-sm` (24rem / 384px)

---

## 5. Visual Effects & Motion

### Animations

| Effect | Spec | Usage |
|--------|------|-------|
| **Pulse** | `2s cubic-bezier(0.4, 0, 0.6, 1) infinite` | Listening states, loading indicators, "transitioning" labels |
| **Color transitions** | `150ms ease` | Hover states on buttons, inputs, links |
| **Progress bar fill** | `1000ms ease-in-out` | Smooth progress advancement |
| **Glow fade** | `300ms ease-in-out` | Screen edge glow visibility changes |

### Shadows

| Level | Usage |
|-------|-------|
| `shadow-sm` | Inputs, select dropdowns |
| `shadow` | Default buttons |
| `shadow-md` | Dropdown menus |
| `shadow-lg` | Drag states, floating elements |
| `shadow-xl` | Modals, settings panels |

### Screen Edge Glow

The app's signature visual feature — a radial gradient glow around the screen edges during focus sessions.

```
Structure: 4 radial gradients at top, bottom, left, right edges
Color: Dark (oklch(0 0 0)) — the glow is a dark vignette, not a bright emission
Transition: 300ms ease-in-out on opacity

Intensity levels:
  Normal:  alpha=0.875, major=78%, minor=18%
  Subtle:  alpha=0.44,  major=39%, minor=9%
  Vivid:   alpha=1.0,   major=100%, minor=36%
```

For promotional materials, this glow effect can be recreated as a CSS or SVG vignette overlay to visually communicate the "focus tunnel" concept.

### Opacity Patterns

- **Hover reveal**: Elements hidden at `opacity: 0` appear on hover (`opacity: 1`)
- **Subtle tints**: Background fills at 5–40% opacity (e.g., `bg-primary/5`, `bg-accent/40`)
- **Disabled state**: `opacity: 0.5`
- **Active progress**: Current segment at full opacity; upcoming at `60%` opacity

---

## 6. Iconography

### Icon Library

[Lucide Icons](https://lucide.dev/) (v0.575+) — a clean, consistent, stroke-based icon set.

### Icons Used in the App

| Category | Icons |
|----------|-------|
| **Playback** | Play, Pause, Square (stop), SkipForward |
| **Audio** | Volume2, Mic, MicOff |
| **Tasks** | Plus, Trash2, GripVertical, Check, CheckCheck |
| **Navigation** | ChevronDown, X (close), Settings |
| **Status** | Layers, Clock, XCircle |

### Icon Sizing

| Size | Pixels | Usage |
|------|--------|-------|
| Small | 12–14px (`h-3` / `h-3.5`) | Inline with small text |
| Medium | 16px (`h-4`) | Buttons, list items |
| Large | 24px (`h-6`) | Standalone/hero icons |

### Icon Style Rules

- Stroke-based (not filled) — matches Lucide's default style.
- Use `shrink-0` to prevent icons from compressing in flex layouts.
- Icons inherit text color; use `text-muted-foreground` for secondary icons.

---

## 7. Component Patterns

### Buttons

| Variant | Style |
|---------|-------|
| **Default** | Dark background, light text, subtle shadow |
| **Ghost** | Transparent background, light text, hover shows accent fill |
| **Destructive** | Red-tinted background at low opacity, red text |

- Standard height: 36px (`h-9`)
- Small height: 32px (`h-8`)
- Icon-only: 32 × 32px square
- Border radius: `radius-md` (6px)

### Inputs

- Transparent background with border
- Height: 32px (`h-8`)
- Focus state: ring in primary color
- Placeholder text: muted foreground

### Cards / Surfaces

- Cards share the same background color as the page (minimal layering).
- Elevated surfaces (popovers, modals) use `popover` color — slightly lighter.
- Modal overlays use `bg-black/60` (60% black).
- Visual separation is achieved through **borders**, not background contrast.

### Progress Bars

- Segmented bar — one segment per task in the track.
- Segments separated by 2px gap.
- Background: `muted` color.
- Fill: `primary` for completed, `primary/60` for in-progress.
- Full border radius (pill shape).

---

## 8. Design Principles

### Overall Aesthetic

- **Dark, minimal, and purposeful.** Every element earns its place.
- **Single accent color** (yellow-green) used with restraint.
- **Flat design** with subtle shadows for depth cues.
- **Border-driven hierarchy** — separation through lines, not background shifts.
- **macOS-native feel** — system fonts, smooth rendering, familiar interaction patterns.

### What Trollie Is NOT

- Not playful or gamified (no badges, streaks, or reward animations)
- Not corporate or enterprise-looking (no blue-gray palettes)
- Not maximalist (no gradients-on-gradients, no busy patterns)

### What Trollie IS

- **Calm and focused** — the design should feel like a quiet room, not a busy dashboard
- **Confident and understated** — the golden-green accent provides warmth without loudness
- **Professional but human** — system fonts and clean lines with organic audio metaphors (rain, waves, fire)
- **Immersive** — the dark UI and screen-edge glow create a "tunnel" that narrows attention

### Promotional Material Guidance

When designing the landing page:

1. **Hero section**: Dark background with the golden-green accent. Show the app in context — consider a screenshot with the glow effect visible around screen edges.
2. **Feature sections**: Use the popover/elevated surface color for cards. Keep text high-contrast.
3. **CTAs**: Use the primary yellow-green. It should be the brightest element on the page.
4. **Audio/sensory metaphors**: Leverage waveform or sound visualization motifs — but keep them abstract and minimal.
5. **Photography**: If used, desaturate and darken images to match the palette. Avoid stock photos of smiling people at desks.
6. **Whitespace**: Be generous. The brand is about focus — the design should breathe.

---

## 9. Quick Reference — Copy-Paste Values

### CSS Custom Properties

```css
:root {
  /* Core */
  --background: oklch(0.145 0.004 285.82);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.75 0.15 75);
  --primary-foreground: oklch(0.15 0.02 75);

  /* Surfaces */
  --border: oklch(0.274 0.006 286.03);
  --muted: oklch(0.274 0.006 286.03);
  --muted-foreground: oklch(0.705 0.015 286.07);
  --accent: oklch(0.32 0.008 286.03);
  --popover: oklch(0.205 0.015 286.07);

  /* Semantic */
  --destructive: oklch(0.396 0.141 25.72);
  --success: oklch(0.765 0.177 163.22);
  --ring: oklch(0.75 0.12 75);

  /* Radius */
  --radius: 0.5rem;

  /* Fonts */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
}
```

### Hex Palette (for design tools)

```
Background:         #1A1A1E
Foreground:         #FAFAFA
Primary:            #C8B832
Border:             #3A3A42
Muted Text:         #A0A0AC
Accent Surface:     #454550
Popover Surface:    #2A2A32
Destructive:        #8B2020
Success:            #34D399
Logo Gold:          #C8A855
Logo Cream:         #E8E0D0
```
