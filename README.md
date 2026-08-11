# Delicious Hub

A modern, fully responsive restaurant website built with React, Vite, React Router, and plain CSS. It is designed to be clean enough for a real restaurant landing page while remaining easy for React beginners to read and customize.

![Delicious Hub](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80)

## Features

- Six responsive pages: Home, About, Menu, Gallery, Reservations, and Contact
- React Router navigation with active-link states
- Animated desktop header and mobile hamburger navigation
- Filterable menu built from a reusable data array
- Click-to-open gallery lightbox
- Reservation and contact forms with client-side validation
- Google map embed for Connaught Place, New Delhi, India
- Reusable components for buttons, food cards, gallery cards, testimonials, navigation, and footer
- CSS-only animations, hover effects, visible focus states, and reduced-motion support

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- CSS 

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) version 18 or newer.

### Installation

```bash
git clone https://github.com/shristi76/delicious-hub
cd delicious-hub
npm install
npm run dev
```

Open `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/       # Reusable interface components
│   ├── Button.jsx
│   ├── FoodCard.jsx
│   ├── Footer.jsx
│   ├── GalleryCard.jsx
│   ├── Navbar.jsx
│   └── TestimonialCard.jsx
├── data/
│   └── menuData.js   # Menu and gallery content arrays
├── pages/            # One component for every route
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   ├── Menu.jsx
│   └── Reservations.jsx
├── App.jsx           # Shared layout and route definitions
├── index.css         # Main site styles and responsive design
├── header-map.css    # Header animation and map styles
└── main.jsx          # React application entry point
```

## Routes

| Page | Route |
| --- | --- |
| Home | `/` |
| About Us | `/about` |
| Menu | `/menu` |
| Gallery | `/gallery` |
| Reservations | `/reservations` |
| Contact | `/contact` |

## Customization

| What to change | Where |
| --- | --- |
| Restaurant name and navigation | `src/components/Navbar.jsx` and `src/components/Footer.jsx` |
| Contact details and map location | `src/pages/Contact.jsx` |
| Menu names, descriptions, prices, and photos | `src/data/menuData.js` |
| Brand colors and global styling | CSS variables at the top of `src/index.css` |
| Home page content and testimonials | `src/pages/Home.jsx` |
| Restaurant story and chef content | `src/pages/About.jsx` |

## Learning highlights

This project demonstrates fundamental React concepts:

- Components and props
- `useState` for interactive UI and form data
- Events: `onClick`, `onChange`, and `onSubmit`
- Conditional rendering for menus, messages, and the gallery lightbox
- Rendering lists with `.map()`
- React Router page navigation
- Basic form validation
- Responsive CSS using Grid, Flexbox, media queries, and `clamp()`

## Images

The current food and restaurant photographs are loaded from [Unsplash](https://unsplash.com/). Replace their URLs in the page files or `src/data/menuData.js` with your own licensed images before publishing a production website.

## License

This project is available for learning and personal use.
