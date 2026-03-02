import { Psychologist, BlogPost } from '../types';

export const psychologists: Psychologist[] = [
  {
    id: '1',
    name: 'Dr. Sarah Jenkins',
    bio: 'Specializing in cognitive behavioral therapy and anxiety disorders with over 12 years of clinical experience. I believe in a collaborative approach to mental health.',
    image_url: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    specializations: ['Anxiety', 'Depression', 'CBT'],
    hourly_rate: 120,
    rating: 4.9,
    experience_years: 12,
    education: ['Ph.D. in Clinical Psychology, Stanford University'],
    certifications: ['Licensed Clinical Psychologist', 'Board Certified in CBT']
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    bio: 'Expert in relationship counseling and family dynamics. Helping couples navigate complex emotional landscapes for a decade.',
    image_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    specializations: ['Relationships', 'Family Therapy', 'Stress'],
    hourly_rate: 150,
    rating: 4.8,
    experience_years: 10,
    education: ['Psy.D., University of California, Berkeley'],
    certifications: ['Licensed Marriage and Family Therapist']
  },
  {
    id: '3',
    name: 'Dr. Elena Rodriguez',
    bio: 'Focusing on trauma-informed care and mindfulness-based stress reduction. I provide a safe space for healing and personal growth.',
    image_url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    specializations: ['Trauma', 'Mindfulness', 'PTSD'],
    hourly_rate: 135,
    rating: 5.0,
    experience_years: 15,
    education: ['Ph.D. in Psychology, New York University'],
    certifications: ['EMDR Certified Therapist', 'Mindfulness Master Practitioner']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Anxiety in the Modern World',
    content: 'Anxiety is more than just feeling stressed. It is a complex emotional response...',
    thumbnail: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&q=80&w=800',
    category: 'Stress',
    author_id: '1',
    created_at: '2024-03-01'
  },
  {
    id: '2',
    title: '5 Tips for Better Communication in Relationships',
    content: 'Effective communication is the cornerstone of any healthy relationship...',
    thumbnail: 'https://images.unsplash.com/photo-1516589174184-c68526614af0?auto=format&fit=crop&q=80&w=800',
    category: 'Relationships',
    author_id: '2',
    created_at: '2024-02-25'
  },
  {
    id: '3',
    title: 'The Benefits of Mindfulness Meditation',
    content: 'Mindfulness is the practice of being present in the moment without judgment...',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    category: 'Therapy 101',
    author_id: '3',
    created_at: '2024-02-20'
  }
];
