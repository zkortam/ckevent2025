import React from 'react';
import Button from './Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="fixed w-full bg-black z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold text-red-500">TPUSA at UCSD</div>
            <div className="hidden md:flex space-x-4">
              <Button href="#event-details" variant="secondary" size="sm">Event Details</Button>
              <Button href="#parking" variant="secondary" size="sm">Parking</Button>
              <Button href="#about" variant="secondary" size="sm">About</Button>
              <Button href="#faq" variant="secondary" size="sm">FAQ</Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button
                href="https://events2022.tpusa.com/events/the-american-comeback-tour-at-the-university-of-california-san-diego"
                variant="primary"
                size="sm"
              >
                RSVP Now
              </Button>
            </div>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
} 