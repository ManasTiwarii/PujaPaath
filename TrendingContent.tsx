import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Video, Music, Star } from 'lucide-react';

const TrendingContent = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trending Vlogs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <Video className="h-8 w-8 text-vedic-saffron mb-4" />
              <h3 className="text-xl font-semibold mb-4">Trending Vlogs</h3>
              {/* Add vlog content here */}
            </div>
          </motion.div>

          {/* Popular Bhajans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <Music className="h-8 w-8 text-vedic-saffron mb-4" />
              <h3 className="text-xl font-semibold mb-4">Popular Bhajans</h3>
              {/* Add bhajan content here */}
            </div>
          </motion.div>

          {/* Zodiac News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <Star className="h-8 w-8 text-vedic-saffron mb-4" />
              <h3 className="text-xl font-semibold mb-4">Zodiac News</h3>
              {/* Add zodiac content here */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendingContent;