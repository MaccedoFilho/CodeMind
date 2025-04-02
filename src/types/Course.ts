export interface Lesson {
  id: number;
  title: string;
  duration: string;
  isFree: boolean;
}

export interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface BaseCourse {
  id: number;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

export interface Course extends BaseCourse {
  modules: Module[];
  requirements: string[];
  goals: string[];
} 