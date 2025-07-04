import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Button from './Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowBar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowBar(false); // scrolling down
      } else {
        setShowBar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Different navigation based on current page
  const isEventPage = pathname === '/event';
  const isHomePage = pathname === '/';

  return (
    <header className="fixed w-full bg-black z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold text-red-500">
              <a href="/" className="hover:text-red-400 transition-colors">
                TPUSA at UCSD
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              {isEventPage ? (
                <>
                  <Button href="#event-details" variant="secondary" size="sm">Event Details</Button>
                  <Button href="#parking" variant="secondary" size="sm">Parking</Button>
                  <Button href="#about" variant="secondary" size="sm">About</Button>
                  <Button href="#faq" variant="secondary" size="sm">FAQ</Button>
                </>
              ) : (
                <>
                  <Button href="#about" variant="secondary" size="sm">About</Button>
                  <Button href="#activities" variant="secondary" size="sm">Activities</Button>
                  <Button href="#values" variant="secondary" size="sm">Values</Button>
                  <Button href="#join-us" variant="secondary" size="sm">Join Us</Button>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-2">
              {isEventPage ? (
                <Button
                  href="https://events2022.tpusa.com/events/the-american-comeback-tour-at-the-university-of-california-san-diego"
                  variant="primary"
                  size="sm"
                >
                  RSVP Now
                </Button>
              ) : (
                <>
                  <Button
                    href="/event"
                    variant="secondary"
                    size="sm"
                  >
                    Current Events
                  </Button>
                  <Button
                    href="https://www.instagram.com/tpucsd"
                    variant="primary"
                    size="sm"
                  >
                    Follow Us
                  </Button>
                </>
              )}
            </div>
            <MobileMenu />
          </div>
        </nav>
      </div>
      <div className={`w-full bg-red-700 text-white text-center py-2 text-sm font-semibold tracking-wide shadow-md z-40 transition-opacity duration-300 ${showBar ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}>
        <a href="/statement" className="hover:underline">Statement for UCSD Students</a>
      </div>
    </header>
  );
} 