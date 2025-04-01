import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  { id: '1', value: 1000, suffix: '+', title: 'achievements.bookings' },
  { id: '2', value: 50, suffix: '+', title: 'achievements.cities' },
  { id: '3', value: 200, suffix: '+', title: 'achievements.priests' }
];

const Achievement = ({ value, suffix, title, delay }: { value: number, suffix: string, title: string, delay: number }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-vedic-saffron mb-2">
        {value}{suffix}
      </div>
      <div className="text-gray-600">{t(title)}</div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Achievement
              key={achievement.id}
              value={achievement.value}
              suffix={achievement.suffix}
              title={achievement.title}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;