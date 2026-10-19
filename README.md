# Handgroove Properties

A React listing site for Handgroove Properties. Visitors can search houses and apartments, open a property for full details, and contact the agent assigned to that listing.

## Features

- Search by location, property type, and price range
- Browse house and apartment cards with photo, address, and price
- Open a listing for bedrooms, bathrooms, size, year, description, and a larger photo
- Contact the listing agent by phone or email from the property page
- Responsive header with a desktop nav and a mobile menu

## Contact

Handgroove Properties  
184 Grove Street, Suite 300  
San Francisco, CA 94102  
+1 (415) 204-8830  
hello@handgrooveproperties.com

## Tech

- React 18
- Vite
- React Router
- Chakra UI

## Getting started

Install dependencies, then start the dev server:

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production bundle into `dist` |
| `npm run preview` | Serve the production build locally |

## Project layout

```
src/
  App.jsx                  Routes and page shell
  data.jsx                 Listing and agent data
  context/HouseContext.jsx Search state and filters
  routes/Home.jsx          Banner, search, and listing grid
  routes/PropertyDetails.jsx
  components/
    Header/                Brand and navigation
    Banner.jsx
    Search/                Location, type, and price filters
    Houses/                Listing cards
    PropertyDetails/       Listing details and contact form
    Footer.jsx             Office contact details
```

Listings live in `src/data.jsx`. Each record includes the property, photos, and the agent name, phone, and email shown on the detail page.
