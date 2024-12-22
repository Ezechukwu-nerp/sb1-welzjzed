'use client';

import { Calendar, Tool, History, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FeatureCard } from './feature-card';
import type { FeatureCardProps } from './feature-card';

const features: Omit<FeatureCardProps, 'className'>[] = [
  {
    icon: Calendar,
    title: 'Scheduled Maintenance',
    description: 'Automated maintenance schedules based on mileage, time, or engine hours',
  },
  {
    icon: Tool,
    title: 'Work Order Management',
    description: 'Digital work orders with real-time status updates and part tracking',
  },
  {
    icon: History,
    title: 'Service History',
    description: 'Complete maintenance history with cost tracking and analytics',
  },
  {
    icon: Package,
    title: 'Parts Inventory',
    description: 'Automated parts ordering and inventory management',
  },
  {
    icon: Zap,
    title: 'Predictive Analytics',
    description: 'AI-powered maintenance predictions to prevent breakdowns',
  },
];

export function MaintenanceSoftware() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Preventive Maintenance
                <span className="block text-primary">That Saves Money</span>
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Reduce downtime and maintenance costs with our intelligent fleet maintenance software.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Calculate Your ROI</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-1">Average Maintenance Cost</div>
                    <div className="text-2xl font-bold text-primary">-32%</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Vehicle Downtime</div>
                    <div className="text-2xl font-bold text-primary">-45%</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Labor Efficiency</div>
                    <div className="text-2xl font-bold text-primary">+28%</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Parts Inventory</div>
                    <div className="text-2xl font-bold text-primary">-20%</div>
                  </div>
                </div>
                <Button className="w-full">Calculate Your Savings</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Request Demo</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full p-2 rounded-md border"
                />
                <Button type="submit" className="w-full">
                  Get Started
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}