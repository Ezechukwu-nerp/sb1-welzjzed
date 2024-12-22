'use client';

import { Cloud, Shield, Smartphone, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    features: ['Up to 10 vehicles', 'Basic tracking', 'Email support', 'Mobile app access'],
  },
  {
    name: 'Professional',
    price: '$99',
    features: [
      'Up to 50 vehicles',
      'Advanced tracking',
      'Priority support',
      'API access',
      'Custom reports',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited vehicles',
      'Custom solutions',
      '24/7 support',
      'Dedicated account manager',
      'Custom integration',
    ],
  },
];

export function SaasPlatform() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Cloud-Based Fleet Management
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
            Access your fleet data anywhere, anytime with our secure cloud platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {tiers.map((tier) => (
            <Card key={tier.name} className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="text-3xl font-bold mt-2">{tier.price}</div>
                <div className="text-sm text-muted-foreground">per vehicle/month</div>
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={tier.name === 'Professional' ? 'default' : 'outline'}>
                Start Free Trial
              </Button>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mobile App Features</h3>
            <div className="grid gap-4">
              <Card className="p-4 flex items-center gap-4">
                <Smartphone className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Real-time Tracking</h4>
                  <p className="text-sm text-muted-foreground">Track your fleet on the go</p>
                </div>
              </Card>
              <Card className="p-4 flex items-center gap-4">
                <Cloud className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Cloud Sync</h4>
                  <p className="text-sm text-muted-foreground">Instant data synchronization</p>
                </div>
              </Card>
              <Card className="p-4 flex items-center gap-4">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Secure Access</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Security & Compliance</h3>
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Shield className="h-8 w-8 mx-auto text-primary mb-2" />
                  <div className="font-medium">ISO 27001</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Shield className="h-8 w-8 mx-auto text-primary mb-2" />
                  <div className="font-medium">GDPR</div>
                  <div className="text-sm text-muted-foreground">Compliant</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Shield className="h-8 w-8 mx-auto text-primary mb-2" />
                  <div className="font-medium">SOC 2</div>
                  <div className="text-sm text-muted-foreground">Type II</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Shield className="h-8 w-8 mx-auto text-primary mb-2" />
                  <div className="font-medium">256-bit</div>
                  <div className="text-sm text-muted-foreground">Encryption</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}