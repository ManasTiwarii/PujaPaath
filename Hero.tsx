import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1545378889-5d7de4b53b87?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618333452884-5c8d211c2d62?auto=format&fit=crop&q=80',
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="tel:+918658592057"
                className="flex items-center justify-center gap-2 text-lg font-medium text-gray-900"
              >
                <Phone className="h-5 w-5 text-vedic-saffron" />
                +91 86585 92057
              </a>
              <a
                href="https://wa.me/918658592057"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vedic-saffron hover:bg-vedic-ochre text-white px-8 py-3 rounded-full transition-colors duration-300 text-lg font-medium"
              >
                {t('hero.bookNow')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
          >
            {images.map((src, index) => (
              <motion.img
                key={src}
                src={src}
                alt="Vedic ceremony"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImage ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;