import { ReactNode } from 'react';

export interface Slide {
  id: string;
  title?: string;
  content: ReactNode;
}
