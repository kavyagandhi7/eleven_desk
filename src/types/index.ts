export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}