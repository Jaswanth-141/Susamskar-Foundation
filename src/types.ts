/**
 * Types for the Susamskar Foundation website
 */

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  audience: string;
  keyInitiatives: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Happening {
  id: number;
  title: string;
  desc: string;
  date: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  org: string;
  content: string;
  image: string;
}

export interface Beneficiary {
  id: number;
  name: string;
  logoText: string;
  logoSub: string;
  logoUrl?: string;
}

export type ViewType = 'home' | 'about' | 'projects' | 'gallery' | 'donate' | 'volunteer' | 'team';
