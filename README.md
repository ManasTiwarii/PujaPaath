# VedicServices - Sacred Traditions Platform

A modern web platform connecting people with authentic Vedic priests and services.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## Setup Instructions

1. **Clone the Repository**
```bash
git clone <repository-url>
cd vedic-services-website
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory with the following variables:
```env
VITE_APP_TITLE=VedicServices
VITE_CONTACT_NUMBER=+918658592057
VITE_WHATSAPP_NUMBER=918658592057
```

4. **Development**
Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

5. **Build**
Create a production build:
```bash
npm run build
```

6. **Preview Production Build**
```bash
npm run preview
```

## Project Structure

```
vedic-services-website/
├── src/
│   ├── components/      # React components
│   ├── i18n/           # Internationalization files
│   │   └── locales/    # Translation files
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── index.html          # HTML template
```

## Features

- Multi-language support (English, Hindi, Kannada)
- Responsive design
- Modern UI with animations
- Service booking integration
- Testimonials carousel
- WhatsApp integration for instant booking

## Deployment

1. **Build the Project**
```bash
npm run build
```

2. **Deploy to Hosting Platform**
The project can be deployed to any static hosting platform:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- i18next
- Framer Motion
- React Slick

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.