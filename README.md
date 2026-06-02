# 3W Co Ltd — Website (Benzin-inspired, Bootstrap 5)

A modern, single-page corporate website tailored for **3W Co Ltd** — aviation
technical services & consultancy across Southeast Asia.

Built fully in English. Inspired by the
[Benzin Business Consulting](https://github.com/gridtemplate/Benzin-Business-Consulting-HTML5-Template)
template, then rebuilt from scratch to fit 3W's six service lines and B2B audience
(airlines, lessors, operators).

---

## File structure

```
.
├── index.html              # Single-page site
├── assets/
│   ├── css/style.css       # All custom styling (Bootstrap 5 + theme)
│   └── js/main.js          # Scroll effects, counters, form UX
└── README.md
```

External libraries are loaded from CDN — no build step required:

- Bootstrap 5.3.3 (CSS + JS bundle)
- Bootstrap Icons 1.11.3
- AOS 2.3.4 (scroll animations)
- Google Fonts: Inter + Plus Jakarta Sans

---

## How to run

Just open `index.html` directly in a browser — no server needed.

For best results (so the CDN assets and smooth-scroll behave properly), serve it
locally instead:

```powershell
# From this folder, pick any one:
python -m http.server 8080
# or
npx serve .
```

Then open <http://localhost:8080>.

---

## Sections included

1. **Top bar** — contact info + social
2. **Sticky navigation** — transparent at top, solid on scroll
3. **Hero** — full-viewport with aircraft imagery, tagline, dual CTA, trust stats
4. **About** — company intro with floating credentials badge
5. **Services (6 cards)** — matches 3W's actual offerings:
   - Aircraft & Fleet Management
   - Fleet Technical Management (FTM)
   - CAMO Service Delivery
   - Engine Technical Management
   - Spare Parts Supply Chain
   - Cargo Charter Flights
6. **Geographic Coverage** — 10-country grid with flag chips
7. **Why Choose 3W** — 4 differentiators
8. **Animated stats** — counts up when scrolled into view
9. **CTA banner** — "Schedule a Consultation"
10. **Contact** — info card + inquiry form (with industry-specific fields)
11. **Footer** — links, social, newsletter

---

## Customization quick-reference

### Change the color theme
Edit the CSS variables at the top of `assets/css/style.css`:

```css
:root {
  --navy-800: #0a2540;   /* primary dark blue */
  --blue-600: #1c5fb3;   /* main brand blue */
  --accent:   #f5b301;   /* gold accent */
  ...
}
```

### Change hero / about background image
Inside `assets/css/style.css`, search for:

- `.hero { ... background: ... url('...') ... }` — hero image
- `.about-img-main { ... url('...') ... }` — about image
- `.stats-section { ... url('...') ... }` — parallax stats background

Replace the Unsplash URLs with your own aircraft / facility photos hosted in
`assets/img/` (recommend: 1920×1080 JPG, < 400 KB).

### Update contact info
In `index.html`, search for:

- Email: `info@3wcoltd.com`
- Phone: `+84 (0) 28 0000 0000`
- Address: `Ho Chi Minh City, Vietnam`

Change these in the top bar, hero trust signals (if needed), contact section,
and footer.

### Wire the contact form to a real backend
`assets/js/main.js` currently shows a friendly fake confirmation. To send real
emails, point the form to a service like Formspree, Web3Forms, or your own
endpoint:

```html
<form class="contact-form" action="https://formspree.io/f/<your-id>" method="POST">
```

And remove the `e.preventDefault()` branch in `main.js`.

---

## Notes & next steps

- The site is **100% static** — host on GitHub Pages, Netlify, Vercel, or any
  static host.
- All copy is in English as requested.
- The 6 service cards align exactly with the services listed on
  <https://3wcoltd.com/>.
- Consider adding: real client logos, downloadable capability brochure (PDF),
  case-study pages, and an interactive map (Leaflet/Mapbox) for the coverage
  section in a future iteration.
