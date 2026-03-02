export interface Psychologist {
  id: string;
  name: string;
  bio: string;
  image_url: string;
  specializations: string[];
  hourly_rate: number;
  rating: number;
  experience_years: number;
  education: string[];
  certifications: string[];
}

export interface Availability {
  psychologist_id: string;
  day_of_week: number; // 0-6 (Sunday-Saturday)
  start_time: string; // HH:mm
  end_time: string; // HH:mm
}

export interface Booking {
  id: string;
  user_id: string;
  psychologist_id: string;
  appointment_date: string; // ISO string
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  category: string;
  author_id: string;
  created_at: string;
}
