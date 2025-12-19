---
name: Portfolio Improvements Plan
overview: A comprehensive plan to elevate your portfolio from a solid foundation to a standout developer portfolio, focusing on missing sections, enhanced interactivity, and polished UX details.
todos:
  - id: active-nav
    content: Implement active section indicator in navigation using Intersection Observer
    status: pending
  - id: video-players
    content: Enable Mux video players for project showcases
    status: pending
  - id: scroll-progress
    content: Add scroll progress indicator bar at top of viewport
    status: pending
  - id: mobile-menu
    content: Refactor mobile menu to use Tailwind classes with staggered animations
    status: pending
---

# Portfolio Improvement Plan

## Current Strengths

Your portfolio already has excellent fundamentals:

- **Typography**: Fluid `clamp()` system with distinctive Array font (avoiding generic choices)
- **Performance**: Lazy loading, `content-visibility`, reduced motion support, Lenis smooth scroll
- **Tech stack**: Modern Next.js 16, React 19, Tailwind v4, Motion library
- **Visual flair**: WebGL iridescence effect, tasteful dark palette with cream accents
- **Accessibility**: Skip link, semantic HTML, viewport considerations

---

## High-Impact Improvements

### 1. Add Contact Section and Footer

**Problem**: No way for visitors to reach out - the primary goal of a portfolio.

**Solution**: Add a compelling contact section with:

- Email link (mailto or contact form)
- Social links (GitHub, LinkedIn, Twitter)
- Call-to-action that matches the "Available for opportunities" status in hero
- Minimal footer with copyright and quick links
```
Suggested location: New file at app/components/sections/contact.tsx
```


---

### 2. Expand About Section with Personal Narrative

**Current state** ([`app/components/sections/about.tsx`](app/components/sections/about.tsx)): Shows only skills grid and one image - feels incomplete.

**Solution**: Add:

- 2-3 sentences about your journey/philosophy
- What drives you as an engineer
- Geographic location or timezone (helps with remote work)
- The existing skills grid is good, but needs context

---

### 3. Enable Video Players for Projects

**Current state** ([`app/components/sections/projects.tsx`](app/components/sections/projects.tsx) lines 221-222):

```typescript
{/* TODO: Replace with actual video player when ready */}
{/* <mux-player playback-id={project.video} autoplay="muted" loop preload="none" /> */}
```

**Solution**: Implement the Mux video player or use HTML5 video with:

- Autoplay on hover (desktop)
- Lazy loading for performance
- Fallback to static images

---

### 4. Add Scroll Progress Indicator

**Solution**: A thin progress bar at the top of the viewport showing page position - adds polish and helps users orient themselves on long pages.

---

### 5. Active Section Indicator in Navigation

**Current state** ([`app/components/layout/navigation.tsx`](app/components/layout/navigation.tsx)): Links exist but no visual feedback for current section.

**Solution**: Use Intersection Observer to highlight the active nav item as user scrolls through sections.

---

### 6. Enhance Hero Section CTA

**Current state** ([`app/components/sections/hero.tsx`](app/components/sections/hero.tsx) lines 114-124): Single "View Work" button.

**Solution**: Add secondary CTA like "Get in Touch" that links to the new contact section, creating a clear conversion path.

---

### 7. Mobile Menu Refinement

**Current state**: Uses inline styles (lines 244-295 in navigation.tsx).

**Solution**: Convert to Tailwind classes and add staggered animation for menu items using Motion.

---

## Medium-Impact Improvements

### 8. Resume/CV Download Link

Add a downloadable PDF resume in the navigation or about section.

### 9. Project Case Study Pages (Optional)

Create individual pages for each project with:

- Problem statement
- Tech decisions
- Outcomes/metrics

### 10. Testimonials/Social Proof

If you have recommendations from colleagues or clients, add a testimonials section.

### 11. Dark/Light Mode Toggle

You have theme colors defined in viewport metadata - implement a toggle.

---

## Quick Wins

| Improvement | Impact | Effort |

|------------|--------|--------|

| Contact section + footer | High | Low |

| Expand about text | High | Low |

| Secondary CTA in hero | Medium | Low |

| Active nav indicator | Medium | Medium |

| Video players | High | Medium |

| Scroll progress | Low | Low |

---

## Recommended Priority Order

1. **Contact section + Footer** (critical - no conversion path currently)
2. **Expand About section** (quick win for personal touch)
3. **Secondary CTA in hero** (5 minutes, improves conversion)
4. **Active navigation indicator** (polished UX)
5. **Video players for projects** (showcase work better)
6. **Scroll progress indicator** (visual polish)
7. **Mobile menu refinement** (code quality)