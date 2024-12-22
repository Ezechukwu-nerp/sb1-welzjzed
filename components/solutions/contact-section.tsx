'use client';

import { Phone, Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: '24/7 support line',
    value: '1-800-TELIMATIX',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Response within 2 hours',
    value: 'support@telimatix.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Available 24/7',
    value: 'Start Chat',
  },
];

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer: 'You can start tracking your fleet within 24 hours of signing up. Our team will guide you through the setup process.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 technical support via phone, email, and live chat. Enterprise customers get a dedicated account manager.',
  },
  {
    question: 'Is there a contract requirement?',
    answer: 'We offer flexible monthly plans with no long-term contracts required. Enterprise solutions may have custom terms.',
  },
  {
    question: 'Can I integrate with my existing systems?',
    answer: 'Yes, we offer API access and can integrate with most major fleet management and ERP systems.',
  },
];

export function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch
                <span className="block text-primary">We're Here to Help</span>
              </h2>
              <p className="text-muted-foreground">
                Our team of experts is ready to help you transform your fleet operations.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded-md border"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded-md border"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 rounded-md border"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full mt-1 p-2 rounded-md border"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactMethods.map((method) => (
                <Card key={method.title} className="p-4">
                  <method.icon className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-medium">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                  <p className="text-sm font-medium">{method.value}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Office Locations</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Headquarters</h4>
                    <p className="text-sm text-muted-foreground">
                      123 Fleet Street, Suite 100<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Support: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}