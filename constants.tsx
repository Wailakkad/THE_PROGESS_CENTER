
import React from 'react';
import { BookOpen, Users, Zap, ShieldCheck, Target, Award } from 'lucide-react';
import { Program, Educator, Testimonial, Feature } from './types';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Sciences Économiques',
    title_ar: 'العلوم الاقتصادية',
    category: '1BAC - 2BAC',
    category_ar: 'الأولى والثانية باك',
    description: 'Programme intensif couvrant les fondamentaux de l\'économie générale et de la statistique.',
    description_ar: 'برنامج مكثف يغطي أساسيات الاقتصاد العام والإحصاء.',
    image: '/images/ugcrbandingimages%20(7).png',
  },
  {
    id: '2',
    title: 'Gestion Comptable',
    title_ar: 'التدبير المحاسباتي',
    category: '1BAC - 2BAC',
    category_ar: 'الأولى والثانية باك',
    description: 'Maîtrise de la comptabilité, des mathématiques financières et de l\'organisation des entreprises.',
    description_ar: 'إتقان المحاسبة والرياضيات المالية وتنظيم المقاولات.',
    image: '/images/ugcrbandingimages%20(1).png',
  }
];

export const EDUCATORS: Educator[] = [
  {
    id: '1',
    name: 'Madiha El Achiki',
    role: 'Économie Générale',
    role_ar: 'الاقتصاد العام',
    bio: 'Experte en sciences économiques et statistiques avec une approche pédagogique axée sur le résultat.',
    bio_ar: 'خبيرة في العلوم الاقتصادية والإحصاء مع نهج بيداغوجي يركز على النتائج.',
    image: '/images/ugcrbandingimages%20(2).png',
  },
  {
    id: '2',
    name: 'Badr MAHDI',
    role: 'Organisation des Entreprises',
    role_ar: 'تنظيم المقاولات',
    bio: 'Spécialiste en management et organisation administrative des entreprises.',
    bio_ar: 'متخصص في التسيير والتنظيم الإداري للمقاولات.',
    image: '/images/ugcrbandingimagesBadrMehdi.png',
  },
  {
    id: '3',
    name: 'Rachid DAMOUH',
    role: 'Mathématiques',
    role_ar: 'الرياضيات',
    bio: 'Professeur expérimenté en mathématiques pour les niveaux baccalauréat.',
    bio_ar: 'أستاذ ذو خبرة واسعة في مادة الرياضيات لمستويات الباكالوريا.',
    image: '/images/ugcrbandingimages%20(6).png',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Omar',
    role: 'Performance Marketing Director',
    content: "L'excellence au Progress Center n'est pas qu'une promesse, c'est une réalité quotidienne qui a transformé ma vision de l'apprentissage.",
    image: '/images/ugcrbandingimages (1).png',
  },
  {
    id: '2',
    author: 'Madiha El Achiki',
    role: 'Professeur d\'Économie',
    content: "Notre mission est d'accompagner chaque élève vers son plein potentiel grâce à une méthodologie rigoureuse.",
    image: '/images/ugcrbandingimages (2).png',
  },
  {
    id: '3',
    author: 'Badr MAHDI',
    role: 'Professeur d\'Organisation',
    content: "L'innovation pédagogique est au cœur de notre approche pour garantir la réussite aux examens.",
    image: '/images/ugcrbandingimagesBadrMehdi.png',
  },
  {
    id: '4',
    author: 'Rachid DAMOUH',
    role: 'Professeur de Mathématiques',
    content: "La clarté et la pratique sont les clés pour maîtriser les concepts mathématiques les plus complexes.",
    image: '/images/ugcrbandingimages (6).png',
  },
  {
    id: '5',
    author: 'Sarah K.',
    role: 'Étudiante 2BAC',
    content: "Un environnement stimulant où l'on se sent soutenu à chaque étape de notre préparation.",
    image: '/images/ugcrbandingimages (7).png',
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
