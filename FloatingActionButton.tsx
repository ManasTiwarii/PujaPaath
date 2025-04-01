import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingActionButton = () => {
  return (
    <a
      href="https://wa.me/918658592057"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-vedic-saffron hover:bg-vedic-ochre text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-50"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingActionButton;