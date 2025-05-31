# EzyElders - Next.js Senior Community Website

A modern, responsive Next.js website for EzyElders - a platform dedicated to enriching the lives of senior citizens through wellness programs, social activities, and community engagement.

## 🚀 Built with Next.js 14

This is the Next.js version of the EzyElders website, offering improved performance, SEO, and developer experience.

## 🌟 Features

- **Next.js App Router**: Modern routing with server components
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Accessibility First**: Large fonts (18px base), high contrast mode, and senior-friendly UI
- **Performance Optimized**: 
  - Server-side rendering for better SEO
  - Automatic image optimization with Next.js Image
  - Code splitting and lazy loading
- **Interactive Components**: 
  - Horizontal scrollable event calendar
  - Testimonial carousel with dot navigation
  - Image gallery with lightbox functionality
  - Collapsible FAQ accordion
- **Comprehensive Pages**:
  - Home with hero section and service overview
  - About Us with mission, vision, and team
  - Our Offerings with detailed service pages
  - Events with calendar view
  - Gallery with image zoom
  - Testimonials with carousel
  - Contact with form and map
  - And more...
- **WhatsApp Integration**: Sticky support button for instant assistance
- **SEO Optimized**: Built-in Next.js SEO features with structured data

## 🎨 Design

- **Color Palette**: Lavender, Sage Green, Sky Blue, Warm Beige
- **Typography**: Large, readable fonts with clear hierarchy
- **UI Elements**: Rounded corners, soft shadows, minimal whitespace
- **Animations**: Smooth transitions using Framer Motion
- **Senior-Focused**: Images and content specifically for elderly users

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adonisarun123/ezyelders-nextjs.git
cd ezyelders-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Next.js Image** - Optimized images

## 🛠️ Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint

## 📁 Project Structure

```
ezyelders-nextjs/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── offerings/         # Services pages
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   └── ...                # Other pages
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with links
│   ├── WhatsAppButton.tsx # Floating WhatsApp button
│   └── ClientWrapper.tsx  # Client-side wrapper
├── public/                # Static assets
└── styles/               # Global styles
```

## 🌐 Deployment

This app is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adonisarun123/ezyelders-nextjs)

## 📱 Contact

- **Phone**: +91-73496 53339
- **Email**: info@ezyhelpers.com
- **Address**: No 10, 5th B Cross, Sharadamba Nagar, Jalahalli, Bangalore - 560013

## 🤝 Contributing

This project is part of EzyHelpers. For contributions or queries, please contact the team.

## 📄 License

This project is proprietary to EzyElders/EzyHelpers.

## 🔄 Comparison with React Version

### Improvements over React (CRA) version:
- **Better Performance**: Server-side rendering and automatic code splitting
- **Improved SEO**: Built-in meta tags and structured data support
- **Optimized Images**: Automatic image optimization and lazy loading
- **Smaller Bundle Size**: Only loads what's needed for each page
- **Better Developer Experience**: Fast refresh and built-in TypeScript support
- **Production Ready**: Optimized for Vercel deployment
