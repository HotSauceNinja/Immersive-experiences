export interface Experience {
    _id: string;
    title: string;
    description: string;
    location?: string;
    date: string | Date;
    imageUrl?: string;
  }

  export interface CardProps {
    name: string;
    description: string;
    href?: string;
    background?: string;
    textColor?: string;
  }

  export interface HeroProps {
    title?: string;
    subtitle?: string;
  }