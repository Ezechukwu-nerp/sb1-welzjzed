import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors">
      <div className="flex flex-col space-y-4">
        <Icon className="h-8 w-8 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="link" className="px-0">
          Learn More
        </Button>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}