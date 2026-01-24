
import React from 'react';
import { BookOpen, Users, Zap, ShieldCheck, Target, Award } from 'lucide-react';
import { Program, Educator, Testimonial, Feature } from './types';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Advanced STEM Track',
    category: 'Grades 9-12',
    description: 'A deep dive into robotics, coding, and engineering principles designed for future innovators.',
    image: 'https://picsum.photos/seed/stem/800/600',
  },
  {
    id: '2',
    title: 'Creative Arts & Media',
    category: 'All Levels',
    description: 'Master the digital landscape with courses in graphic design, cinematography, and digital storytelling.',
    image: 'https://picsum.photos/seed/arts/800/600',
  },
  {
    id: '3',
    title: 'Global Leadership Program',
    category: 'Grades 6-12',
    description: 'Developing soft skills, public speaking, and ethical leadership through collaborative projects.',
    image: 'https://picsum.photos/seed/leadership/800/600',
  },
  {
    id: '4',
    title: 'Language Mastery Intensive',
    category: 'Primary & Secondary',
    description: 'Immersive language experiences that build fluency and cultural competence in a globalized world.',
    image: 'https://picsum.photos/seed/language/800/600',
  }
];

export const EDUCATORS: Educator[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    role: 'Head of Innovation',
    bio: 'Former NASA scientist turned educator, passionate about making complex physics accessible to all.',
    image: 'https://picsum.photos/seed/sarah/400/500',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Lead STEM Instructor',
    bio: 'Software architect with a decade of industry experience teaching full-stack development.',
    image: 'https://picsum.photos/seed/marcus/400/500',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Arts Director',
    bio: 'Award-winning visual artist focusing on the intersection of traditional mediums and digital art.',
    image: 'https://picsum.photos/seed/elena/400/500',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Julianne V.',
    role: 'Parent',
    content: "The Progress Center transformed my daughter's approach to learning. She doesn't just study; she's genuinely curious now.",
    image: 'https://picsum.photos/seed/parent1/100/100',
  },
  {
    id: '2',
    author: 'David L.',
    role: 'Alumni (Class of 2023)',
    content: "The mentorship I received here was pivotal. I entered university with technical skills far beyond my peers.",
    image: 'https://picsum.photos/seed/student1/100/100',
  },
  {
    id: '3',
    author: 'Sarah K.',
    role: 'Secondary Student',
    content: "Every day at The Progress Center feels like an adventure. We aren't just sitting in rows; we are creating.",
    image: 'https://picsum.photos/seed/student2/100/100',
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Modern Facilities',
    description: 'Equipped with the latest technology and creative spaces designed for collaborative learning.',
    icon: 'BookOpen',
  },
  {
    id: '2',
    title: 'Expert Educators',
    description: 'Mentors from leading industries and academic backgrounds dedicated to student growth.',
    icon: 'Users',
  },
  {
    id: '3',
    title: 'Innovative Curriculum',
    description: 'A forward-thinking approach that blends traditional excellence with modern skills.',
    icon: 'Zap',
  },
  {
    id: '4',
    title: 'Holistic Support',
    description: 'Personalized learning plans and emotional support to ensure every student thrives.',
    icon: 'ShieldCheck',
  }
];

export const METHODS = [
  {
    step: '01',
    title: 'Inquiry',
    description: 'We begin by encouraging curiosity and identifying unique student interests to fuel self-driven discovery.'
  },
  {
    step: '02',
    title: 'Conceptualize',
    description: 'Students work with mentors to transform abstract ideas into structured projects and learning goals.'
  },
  {
    step: '03',
    title: 'Apply',
    description: 'The core phase where knowledge is put into practice through real-world builds, coding, or artistic creation.'
  },
  {
    step: '04',
    title: 'Iterate',
    description: 'Progress happens through reflection and refinement. We teach students that every challenge is an opportunity.'
  }
];
