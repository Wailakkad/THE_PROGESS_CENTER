
export interface Program {
  id: string;
  title: string;
  title_ar: string;
  category: string;
  category_ar: string;
  description: string;
  description_ar: string;
  image: string;
}

export interface Educator {
  id: string;
  name: string;
  role: string;
  role_ar: string;
  bio: string;
  bio_ar: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
