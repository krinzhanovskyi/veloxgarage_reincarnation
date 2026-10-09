# VeloxGarage

A German-language website for VeloxGarage, a bicycle repair workshop in Zürich. The site is built with static HTML, Bulma, custom CSS, and a small jQuery-powered mobile navigation menu.

## Pages

- `pages/index.html` — landing page, workshop introduction, partner logos, and appointment call to action.
- `pages/services.html` — bicycle repair and maintenance services with descriptions and starting prices.
- `pages/about.html` — workshop story and team profiles.
- `pages/contact.html` — contact form, address, opening hours, and embedded Google Map.

## Project structure

```text
.
├── pages/                   # Website pages
│   ├── about.html
│   ├── contact.html
│   ├── index.html
│   └── services.html
├── pictures/
│   ├── Partners/            # Partner brand SVGs
│   ├── Services/            # Service photos
│   ├── Team_photos/         # Team portraits
│   ├── Garage_photo.png
│   ├── Team.png
│   ├── VeloxGarage.png
│   └── favicon.ico
├── js/
│   └── nav.js               # Mobile navigation toggle
├── style.css                # Site-specific styles
├── LICENCE                  # MIT license
└── README.md
```

## Run locally

No build step or package installation is required.

1. Open `pages/index.html` in a browser, or open the project folder in VS Code and use a local web server such as Live Server.
2. Navigate between pages using the site navigation.

Bulma CSS and jQuery are loaded from CDNs, so an internet connection is needed for those dependencies. The contact form submits to the Formspree endpoint configured in `pages/contact.html`.

## Technologies

- HTML5 for page structure and content
- Bulma 0.9.4 for layout and responsive utility classes
- `style.css` for site-specific styling
- jQuery 3.7.1 and `js/nav.js` for the mobile navigation menu
- Google Maps Embed for the location map
- Formspree for contact form submissions

## License

This project is licensed under the MIT License. See [LICENCE](./LICENCE).
