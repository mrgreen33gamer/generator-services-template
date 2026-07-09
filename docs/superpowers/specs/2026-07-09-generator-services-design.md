# Generator Services Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `generator-services-template`, sibling-cloned patterns from `electrical-services-template` / `garage-door-template`. Follows `RESKIN_PLAYBOOK.md`.

Per standing decisions: per-city SEO subpages deleted; `src/app/projects/` deleted.

## Business Identity (locked, reuse verbatim)

- **Business name:** PowerHold Generators
- **Tagline:** Standby Generators · Install · Service · Transfer Switches
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2011
- **Owner:** Rhea Colton
- **Credential/license line:** "TECL-Aligned Installers · Bonded & Insured"
- **Guarantee:** Storm-Ready Install Guarantee · 2-Year Workmanship
- **Social proof:** 4.9★, 520+ reviews, 1,800+ generators installed
- **Brand accent color:** electric yellow `#facc15` (token `$orange`; light `#fde047`; dark `#ca8a04`) with dark stone `#1c1917`
- **Phone:** (254) 991-2121 / `tel:+12549912121`
- **Email:** hello@powerholdgenerators.com
- **Domain:** powerholdgenerators.com
- **Address:** 1800 Franklin Ave, Waco, TX 76701
- No per-city SEO subpages

## Services (6)

| Old HVAC slug | New slug | Title |
|---|---|---|
| ac-repair | standby-generators | Standby Generators |
| heating | portable-generators | Portable Generators |
| installation | transfer-switches | Transfer Switches |
| duct-cleaning | generator-maintenance | Generator Maintenance |
| indoor-air-quality | load-calculations | Load Calculations |
| maintenance | emergency-service | Emergency Service |

## Industries Served (3)

| Old slug | New slug | Title |
|---|---|---|
| automotive | homebuilders | Homebuilders |
| manufacturing | healthcare-clinics | Healthcare Clinics |
| oil-gas | agriculture | Agriculture & Ranches |

## Blogs (3)

1. `standby-vs-portable-generator`
2. `how-to-size-home-generator`
3. `generator-maintenance-schedule`

## Pages

Home, Services (index + 6 detail), Industries (index + 3 detail), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No `/projects` route. No per-city SEO.

## Accent

- SCSS: `$orange: #facc15`, `$lightorange: #fde047`, `$darkorange: #ca8a04`
- Dark base: `$obsidian: #1c1917`, `$blackflat: #292524`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#facc15`

## Non-goals

- No per-city SEO subpages
- No new component primitives
- No project gallery
- No marketplace catalog flip (separate pass)

## Process

1. Batch A — chrome: brand tokens, Header/Footer, root layout, robots/sitemap/llms, privacy/admin
2. Batch B — shared PageComponents defaults
3. Batch C — homepage, services ×6, industries ×3, blogs ×3, about/contact/service-areas, reviews
4. Batch D — delete projects + city SEO, grep clean, typecheck, design spec, commits

## Success Criteria

- Zero HVAC / Arctic Air / old phone / Mapbox pk / Scott Applications agency leaks in customer-facing source
- Accent `#facc15` in `$orange` and hardcoded loaders
- `npm run typecheck` passes
- Logical git commits by batch
