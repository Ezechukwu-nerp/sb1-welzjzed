'use client';

import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`transform transition-all duration-200 hover:translate-x-2 ${className}`}>
      <Card className="p-6 flex items-start space-x-4">
        <Icon className="h-6 w-6 text-primary shrink-0" />
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </Card>
    </div>
  );
}