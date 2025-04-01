export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
}

export interface TrendingContent {
  id: string;
  type: 'vlog' | 'bhajan' | 'zodiac';
  title: string;
  thumbnail?: string;
  audioUrl?: string;
  content?: string;
}

export interface Achievement {
  id: string;
  title: string;
  value: number;
  suffix: string;
}