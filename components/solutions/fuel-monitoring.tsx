'use client';

import { Droplet, AlertTriangle, BarChart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Droplet,
    title: 'Real-time Monitoring',
    description: 'Track fuel levels and consumption patterns in real-time',
  },
  {
    icon: AlertTriangle,
    title: 'Theft Prevention',
    description: 'Instant alerts for suspicious fuel level changes',
  },
  {
    icon: BarChart,
    title: 'Cost Analysis',
    description: 'Detailed reports on fuel expenses and efficiency',
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description: 'Track and reduce your carbon footprint',
  },
];

export function FuelMonitoring() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Smart Fuel Monitoring
                <span className="block text-primary">For Better Efficiency</span>
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Reduce fuel costs and prevent theft with advanced monitoring solutions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="transform transition-all duration-200 hover:scale-105"
                >
                  <Card className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Fuel Cost Calculator</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium mb-1">Average Monthly Savings</div>
                    <div className="text-3xl font-bold text-primary">$2,450</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Fuel Efficiency Increase</div>
                    <div className="text-3xl font-bold text-primary">15%</div>
                  </div>
                </div>
                <Button className="w-full">Calculate Your Savings</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">CO2 Reduction</span>
                  <span className="text-sm font-bold text-primary">-25%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary rounded-full h-2 w-3/4 transition-all duration-1000" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on average fleet performance after implementing our solution
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}