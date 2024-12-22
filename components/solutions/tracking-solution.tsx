'use client';

import { MapPin, Route, Map, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Real-time location updates every 30 seconds with detailed vehicle status',
  },
  {
    icon: Route,
    title: 'Smart Route Optimization',
    description: 'AI-powered route planning saving up to 30% on fuel costs',
  },
  {
    icon: Map,
    title: 'Geofencing Alerts',
    description: 'Custom boundary alerts and automated notifications',
  },
  {
    icon: Gauge,
    title: 'Performance Metrics',
    description: 'Comprehensive analytics on vehicle and driver performance',
  },
];

const metrics = [
  { value: '98%', label: 'Fleet Visibility' },
  { value: '35%', label: 'Fuel Savings' },
  { value: '45min', label: 'Response Time' },
  { value: '24/7', label: 'Support' },
];

export function TrackingSolution() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Real-time Fleet Visibility
                <span className="block text-primary">That Drives Results</span>
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transform your fleet operations with industry-leading GPS tracking and analytics.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Schedule Free Demo
            </Button>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=2940"
                alt="Fleet Tracking Dashboard"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-4 transform transition-transform duration-200 hover:scale-105"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}