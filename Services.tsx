import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const services = [
  {
    id: '1',
    title: 'services.hawans',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80',
    description: 'services.hawansDesc'
  },
  {
    id: '2',
    title: 'services.weddings',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80',
    description: 'services.weddingsDesc'
  },
  {
    id: '3',
    title: 'services.bhajans',
    image: 'https://images.unsplash.com/photo-1621873495914-1c921811e37f?auto=format&fit=crop&q=80',
    description: 'services.bhajansDesc'
  },
  {
    id: '4',
    title: 'services.pitraPooja',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80',
    description: 'services.pitraPoojaDesc'
  },
  {
    id: '5',
    title: 'services.jaap',
    image: 'https://images.unsplash.com/photo-1604605801370-3396f9bd9ba0?auto=format&fit=crop&q=80',
    description: 'services.jaapDesc'
  },
  {
    id: '6',
    title: 'services.shantiPooja',
    image: 'https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?auto=format&fit=crop&q=80',
    description: 'services.shantiPoojaDesc'
  }
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={t(service.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {t(service.title)}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{t(service.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;