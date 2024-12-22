import { MapPin, BarChart3, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site-header';
import { FeatureCard } from '@/components/feature-card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Transform Your Fleet Management
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Real-time tracking, analytics, and insights to optimize your fleet operations and boost efficiency.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1557899563-1940fc95709c?auto=format&fit=crop&q=80&w=2940"
                alt="Fleet Management Dashboard"
                className="relative rounded-lg shadow-2xl"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features for Modern Fleet Management
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to manage your fleet efficiently and safely in one integrated platform.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <FeatureCard
              icon={MapPin}
              title="Real-time Tracking"
              description="Monitor your entire fleet in real-time with precise GPS tracking and instant location updates."
            />
            <FeatureCard
              icon={BarChart3}
              title="Advanced Analytics"
              description="Make data-driven decisions with comprehensive analytics and customizable reporting tools."
            />
            <FeatureCard
              icon={Shield}
              title="Safety Management"
              description="Monitor driver behavior and ensure compliance with safety regulations and company policies."
            />
          </div>
        </div>
      </section>
    </div>
  );
}