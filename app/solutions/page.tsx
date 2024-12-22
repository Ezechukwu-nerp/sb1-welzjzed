'use client';

import { TrackingSolution } from '@/components/solutions/tracking-solution';
import { MaintenanceSoftware } from '@/components/solutions/maintenance-software';
import { SaasPlatform } from '@/components/solutions/saas-platform';
import { FuelMonitoring } from '@/components/solutions/fuel-monitoring';
import { ContactSection } from '@/components/solutions/contact-section';

export default function SolutionsPage() {
  return (
    <div className="space-y-0">
      <section id="tracking" className="scroll-mt-16">
        <TrackingSolution />
      </section>
      <section id="maintenance" className="scroll-mt-16">
        <MaintenanceSoftware />
      </section>
      <section id="platform" className="scroll-mt-16">
        <SaasPlatform />
      </section>
      <section id="fuel" className="scroll-mt-16">
        <FuelMonitoring />
      </section>
      <ContactSection />
    </div>
  );
}