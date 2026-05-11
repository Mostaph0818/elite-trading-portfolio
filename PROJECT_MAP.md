# PIT TRADING ELITE - Project Map

## Goal
Portfolio website for PIT TRADING ELITE (Instagram: elite_tradingpit) showcasing: e-commerce stores, sponsored ads, trading courses, digital products.

## Tech Stack
- **Framework:** Next.js 16.2.6 (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** motion (motion/react)
- **3D:** @react-three/fiber 9.6.1, @react-three/drei 10.7.7, three.js 0.184.0

## Architecture

### Colors
- Red (#DC2626) - brand/primary
- Green (#10B981) - accent
- White (#FFFFFF) - text
- Dark (#050505) - background

### Layout
- RTL Arabic (dir="rtl"), Tajawal font
- Mobile-first responsive
- Dark theme

## System Flow
```
Navbar (fixed top) → Hero (3D carousel background + logo + text + stats) → Services (4 cards) → Portfolio (image grid) → Contact (form section) → Footer
```

## Component Tree

### Sections (components/sections/)
| Component | Description |
|-----------|-------------|
| `Navbar.tsx` | Fixed top nav with logo, links, CTA button |
| `Hero.tsx` | Hero section: 3D carousel bg, logo left, text right, stats |
| `HeroThreeWrapper.tsx` | Dynamic SSR-safe wrapper for ThreeBackground |
| `ThreeBackground.tsx` | Entry point for 3D background |
| `CarouselBackground.tsx` | R3F 3D image carousel (ring of 8 rotating images) |
| `Services.tsx` | 4 service cards with Unsplash backgrounds |
| `ServiceDetail.tsx` | Expanded service detail modal |
| `Portfolio.tsx` | Portfolio image grid |
| `Contact.tsx` | Contact section with Instagram CTA |
| `Footer.tsx` | Site footer with links |
| `AnimatedCounter.tsx` | Number counter animation for stats |
| `RevealText.tsx` | Scroll reveal text animation |

### UI (components/ui/)
| Component | Description |
|-----------|-------------|
| `Button.tsx` | Reusable button (primary/outline variants) |
| `Card.tsx` | Reusable card wrapper |

### Data (lib/)
| File | Description |
|------|-------------|
| `constants.ts` | Site config, services, nav items, stats |
| `utils.ts` | Utility functions |

## 3D Background (CarouselBackground.tsx)
- 8 real images from Unsplash in a rotating ring
- Auto-rotation around Y-axis (slow)
- Mouse parallax tilt (X/Z rotation follows pointer)
- Ambient + directional lighting for depth
- Semi-transparent planes (opacity 0.8)
- Tone mapped off for true colors
- Alpha canvas for transparent overlay blending
- DPR capped at 1.5 for performance

## Key Decisions
- Removed Vanta.js (incompatible with three.js 0.184.0)
- Replaced with custom R3F shader, then upgraded to 3D image carousel
- Images from Unsplash (not local) to avoid repo bloat
- SSR disabled for all 3D components via dynamic import

## Verification
- `npm run build` passes (TypeScript + compilation)
- Server returns 200 on http://localhost:3000

## ORPHANS & PENDING
- (empty)
