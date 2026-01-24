
export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Educator {
  id: string;
  name: string;
  role: string;
  bio: string;
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
