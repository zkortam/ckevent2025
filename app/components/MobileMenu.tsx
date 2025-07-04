import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Different navigation based on current page
  const isEventPage = pathname === '/event';

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-300 hover:text-white"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-300 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="space-y-4">
            {isEventPage ? (
              <>
                <Button href="#event-details" variant="secondary" size="sm" className="w-full">
                  Event Details
                </Button>
                <Button href="#parking" variant="secondary" size="sm" className="w-full">
                  Parking
                </Button>
                <Button href="#about" variant="secondary" size="sm" className="w-full">
                  About
                </Button>
                <Button href="#faq" variant="secondary" size="sm" className="w-full">
                  FAQ
                </Button>
                <Button
                  href="https://events2022.tpusa.com/events/the-american-comeback-tour-at-the-university-of-california-san-diego"
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  RSVP Now
                </Button>
              </>
            ) : (
              <>
                <Button href="#about" variant="secondary" size="sm" className="w-full">
                  About
                </Button>
                <Button href="#activities" variant="secondary" size="sm" className="w-full">
                  Activities
                </Button>
                <Button href="#values" variant="secondary" size="sm" className="w-full">
                  Values
                </Button>
                <Button href="#join-us" variant="secondary" size="sm" className="w-full">
                  Join Us
                </Button>
                <Button
                  href="/event"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Current Events
                </Button>
                <Button
                  href="https://www.instagram.com/tpucsd"
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Follow Us
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
} 