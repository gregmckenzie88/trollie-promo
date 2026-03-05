# TROLLIE PRODUCT BRIEF

## Executive Summary

Trollie is a macOS-native desktop application designed to combat digital distraction through immersive, audio-guided focus sessions. By combining time-boxed task management with ambient soundscapes, voice interaction, and subtle visual cues, Trollie creates a "track" that keeps users anchored to their commitments throughout the workday.

## Problem Statement

Modern knowledge workers face an epidemic of distraction. Internet-connected devices offer infinite rabbit holes—inflammatory content, social media notifications, stock tickers, messaging apps—that fragment attention and derail productivity. Even well-intentioned individuals find themselves off-task within minutes of starting focused work. Current productivity tools focus on task lists and timers but fail to create an immersive environment that actively prevents distraction drift.

## Solution Overview

Trollie reimagines productivity software as an audio-visual focus companion. Users create a "trolley" of sequential tasks with estimated durations, then "ride the track" through their workday. The application provides:

- **Persistent audio presence**: A voice periodically reminds users of their current task and remaining time
- **Ambient soundscapes**: Per-task background audio (brown noise, rain, waves, fire, electronic music) with volume control
- **Visual anchoring**: Subtle screen edge glow that serves as a constant peripheral reminder of focus mode
- **Voice control**: Push-to-talk voice commands to advance tasks, request time extensions, or pause without breaking flow
- **Audio transitions**: Crossfade effects between tasks that facilitate mental context switching

## Core Features

### Task Chain Management

- Create sequential task lists ("tracks") with time estimates per task
- Flexible track manipulation (drag-and-drop reorder, add, remove)
- Multiple tracks with sidebar navigation
- Persistent storage across app restarts

### Audio-Guided Focus

- Voice reminders at configurable intervals (1–15 minutes)
- Time remaining announcements
- Task start announcements (name and duration)
- Audio ducking during voice reminders

### Ambient Sound Engine

- Per-task soundscape selection
- Five built-in soundscapes: brown noise, rain, ocean waves, crackling fire, ambient electronic
- Global volume control
- Crossfade transitions between tasks

### Voice Command Interface

- Push-to-talk activation (Control+Space)
- Speech-to-text via bundled Whisper.cpp (fully offline)
- Supported commands:
  - "Next task" / "Skip" — advance to next task
  - "Pause" — pause the session
  - "Resume" / "Continue" — resume the session
  - "Add five minutes" / "More time" — extend current task

### Visual Focus Mode

- Screen edge glow overlay (frameless, click-through window)
- Configurable intensity: off, subtle, normal, vivid
- Activates/deactivates automatically with session state

### Session Tracking

- Session history logged to database (start time, end time, completion status)
- Per-task activity logging within sessions
- Global stats: total sessions, completed count, average duration

## Technology Stack

### Application Framework

- **Electron** with **electron-vite** build tooling
- macOS-focused (leverages native `say` for TTS, `rec` for audio capture)

### UI Framework

- **React 18** + **TypeScript**
- **shadcn/ui** components with **Tailwind CSS**
- **@dnd-kit** for drag-and-drop task reordering
- **Radix UI** primitives (select, dialog)
- Dark mode only (MVP)

### AI/ML Components

- **Whisper.cpp** (bundled binary + tiny English model) for speech-to-text
- **macOS `say`** command for text-to-speech
- Pattern-based command parsing for voice commands
- Fully offline operation — no cloud dependencies

### Audio Processing

- **Web Audio API** for procedural soundscape generation and mixing
- Gain nodes for volume control, ducking, and crossfades
- ScriptProcessor/OscillatorNode-based sound synthesis (no audio files required for built-in soundscapes)

### Data Storage

- **SQLite** via `better-sqlite3` with WAL mode
- Schema: tracks, tasks, sessions, session_task_log, settings
- Key-value settings store for user preferences

## Planned Features (Not Yet Implemented)

The following features are part of the product vision but have not been built:

- **Wake word detection** ("Okay Trollie" / "Hey Trollie") for always-listening voice activation
- **Piper TTS** bundled locally (replacing macOS `say` for cross-platform support)
- **Task templates** for recurring workflows
- **Configurable buffer durations** between tasks (30 seconds – 5 minutes)
- **Next task preview announcements** during transitions
- **Custom soundscapes** and premium soundscape packs
- **Statistics dashboard** with visual analytics
- **Windows and Linux support**
- **Mobile companion app** (iOS) for task list sync
- **Integration partnerships** (Todoist, Notion, Linear)

## Target Markets

### Primary Market Segments

**1. Knowledge Workers & Remote Professionals**

- Software developers, writers, designers, analysts
- Pain point: Context-switching and deep work maintenance
- Willingness to pay: Moderate to high

**2. Students & Academics**

- University students, graduate researchers, online learners
- Pain point: Procrastination and distraction during study sessions
- Willingness to pay: Low to moderate (consider educational pricing)

**3. Creative Professionals**

- Musicians, artists, content creators, video editors
- Pain point: Maintaining creative flow states
- Willingness to pay: Moderate

**4. ADHD/Neurodivergent Community**

- Individuals seeking executive function support
- Pain point: Task initiation and sustained attention
- Willingness to pay: Moderate (potential therapeutic value)

### Secondary Markets

**5. Freelancers & Consultants**

- Billable hour tracking with focus maintenance
- Time estimation improvement through historical data

**6. Corporate Teams** (Future B2B opportunity)

- Focus culture implementation
- Aggregated productivity insights (privacy-respecting)

## Rollout Strategy

### Phase 1: Private Beta (Months 1-2)

- Limited release to 50-100 early adopters
- Focus on macOS 12+ users
- Collect feedback on core audio experience and task management
- Iterate on voice command accuracy and soundscape quality

### Phase 2: Public Beta (Months 3-4)

- Expand to 1,000+ users via Product Hunt, Hacker News, Reddit (r/productivity)
- Implement analytics for feature usage (privacy-respecting)
- Build community feedback loop via Discord or dedicated forum
- Refine voice command accuracy based on diverse accents/environments

### Phase 3: V1.0 Launch (Month 5)

- Full public release on dedicated website
- Pricing model: $29 one-time purchase or $5/month subscription
- Marketing push: productivity YouTube channels, podcast sponsorships
- Press outreach to productivity and tech publications

### Phase 4: Expansion (Months 6-12)

- Windows and Linux support (leverage Electron's cross-platform nature)
- Mobile companion app (iOS) for task list sync
- Integration partnerships (Todoist, Notion, Linear)
- Premium soundscape packs from artists
- Team/organizational licensing

### Distribution Channels

- Direct download from website (primary)
- Mac App Store (future consideration — review guidelines for background audio)
- Homebrew cask for developer audience

## Success Metrics

- **Adoption**: 10,000 active users within 6 months of launch
- **Engagement**: Average 4+ focus sessions per user per week
- **Retention**: 60%+ monthly active user retention
- **Task completion**: 70%+ of started tracks completed
- **Voice command success rate**: 90%+ accurate recognition

## Competitive Differentiation

Unlike traditional Pomodoro timers or task managers, Trollie creates an **immersive focus environment** through multi-sensory engagement. The combination of voice interaction, ambient audio, and visual anchoring creates a unique "flow tunnel" that actively prevents distraction drift rather than simply tracking time.

---

**Status**: Active Development (Phase 2–3 of 7)
**Target Launch**: Q3 2026
**Team Requirements**: 2-3 developers, 1 audio designer, 1 UI/UX designer
