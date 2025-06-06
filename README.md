# AdScreen - Digital Outdoor Advertising Platform

A modern web application for managing digital outdoor advertising on SMD screens in Karachi. This platform allows businesses to book advertising slots on strategically placed SMD screens across prime locations in the city.

## Live Demo
The application is deployed and running at: [https://advertising-app-kappa.vercel.app](https://advertising-app-kappa.vercel.app)

## Features

### Core Features
- 🎯 Location-based SMD screen advertising
- 💰 Flexible pricing plans
- 📊 Real-time analytics (coming soon)
- 🗺️ Interactive location mapping
- 📱 Fully responsive design
- 🔐 Secure authentication system

### Technical Features
- Modern, responsive UI
- Mobile-first design approach
- Side drawer navigation for mobile
- Interactive components
- Form validation
- Social login integration
- Smooth animations and transitions

## Locations
Currently serving three prime locations in Karachi:
- I.I Chundrigar Road (Business District)
- Shahrah-e-Faisal (Fouzia Wahab Flyover)
- University Road

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Tailwind
- **Icons**: Custom SVG icons
- **Animations**: CSS transitions and transforms

### Development Tools
- ESLint for code linting
- Prettier for code formatting
- PostCSS for CSS processing
- Git for version control

### Deployment
- Vercel for hosting and deployment
- GitHub for source code management
- Continuous Integration/Deployment pipeline

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/itxsamad1/Advertising-App.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
├── app/
│   ├── _components/     # Shared components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PlansSection.jsx
│   │   └── FeaturesSection.jsx
│   ├── about/          # About page
│   ├── locations/      # Locations page
│   ├── plans/         # Plans page
│   ├── signin/        # Authentication pages
│   ├── signup/
│   ├── layout.jsx     # Root layout
│   └── page.jsx       # Home page
├── styles/            # Global styles
└── utils/            # Utility functions
```

## Key Features Implementation

### Authentication
- Email/Password authentication
- Social login options (Google, Facebook)
- Protected routes
- Session management

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Location Management
- Interactive location cards
- Location details
- Map integration (coming soon)

### Pricing Plans
- Three-tier pricing structure
- Interactive plan selection
- Flexible duration options
- Custom enterprise solutions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Environment Setup

Required environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_FACEBOOK_APP_ID=your_facebook_app_id
```

## Deployment

The application is automatically deployed to Vercel on every push to the main branch. The deployment process includes:

1. Automatic builds on push
2. Preview deployments for pull requests
3. Production deployment on main branch
4. Automatic SSL/TLS certificates
5. Global CDN distribution

