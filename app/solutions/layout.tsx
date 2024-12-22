'use client';

import { SiteHeader } from '@/components/site-header';

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}