import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Solution {
  title: string;
  description: string;
  features: Feature[];
  metrics?: Metric[];
}