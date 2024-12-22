import { Metric } from './types';

interface MetricCardProps extends Metric {
  className?: string;
}

export function MetricCard({ value, label, className = '' }: MetricCardProps) {
  return (
    <div className={`text-center p-4 transform transition-transform duration-200 hover:scale-105 ${className}`}>
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}