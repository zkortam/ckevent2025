# TPUSA at UCSD Event Website

This is the official website for Charlie Kirk's visit to UC San Diego as part of The American Comeback Tour.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Responsive design optimized for both desktop and mobile devices
- Detailed event information
- Easy-to-access parking and transportation instructions
- Direct RSVP link to the official TPUSA event page
- Integration with Parkmobile and PRONTO apps for convenient parking and transit

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Heroicons

## Development

The website is built using Next.js and follows modern web development practices. The main components are:

- `app/page.tsx`: Main landing page component
- `app/layout.tsx`: Root layout component
- `app/globals.css`: Global styles and Tailwind CSS configuration

## Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

The build will be generated in the `.next` folder, ready for deployment. 