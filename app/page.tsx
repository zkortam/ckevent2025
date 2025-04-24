'use client';

import React from 'react';
import { MapPinIcon, CalendarIcon, ClockIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import Header from './components/Header';
import Button from './components/Button';
import FAQ from './components/FAQ';
import CountdownTimer from './components/CountdownTimer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-screen bg-black flex items-center">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Charlie Kirk at UCSD
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                Join us for The American Comeback Tour at UC San Diego - An engaging discussion about our nation's future
              </p>
              <div className="mb-12">
                <CountdownTimer />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Button
                  href="https://events2022.tpusa.com/events/the-american-comeback-tour-at-the-university-of-california-san-diego"
                  size="lg"
                  className="flex-1"
                >
                  RSVP Now
                </Button>
                <Button 
                  href="https://www.instagram.com/tpucsd"
                  variant="outline" 
                  size="lg"
                  className="flex-1"
                >
                  Follow TPUCSD
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDownIcon className="h-8 w-8 text-white" />
          </div>
        </section>

        {/* Event Details */}
        <section id="event-details" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Event Details</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center p-8 rounded-xl border-4 border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors duration-300">
                <CalendarIcon className="h-12 w-12 text-red-500 mb-6" />
                <h3 className="text-xl font-semibold mb-2 text-white">Date</h3>
                <p className="text-gray-300">May 1st, 2025</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-xl border-4 border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors duration-300">
                <ClockIcon className="h-12 w-12 text-red-500 mb-6" />
                <h3 className="text-xl font-semibold mb-2 text-white">Time</h3>
                <p className="text-gray-300">12:00 PM PST</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-xl border-4 border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors duration-300">
                <MapPinIcon className="h-12 w-12 text-red-500 mb-6" />
                <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
                <p className="text-gray-300">Geisel Library</p>
                <p className="text-gray-300">UC San Diego</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parking Information */}
        <section id="parking" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Getting Here</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-4 border-gray-800 bg-gray-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-6 text-red-500">On-Campus Parking</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <div>
                      <p className="font-medium text-white">Download the Parkmobile App:</p>
                      <Button
                        href="https://tinyurl.com/tpucsdparking"
                        variant="secondary"
                        size="sm"
                        className="mt-2"
                      >
                        Get Parkmobile App
                      </Button>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <div>
                      <p className="font-medium text-white">Closest Parking Structures:</p>
                      <ul className="ml-4 mt-1 text-gray-300">
                        <li>
                          <a 
                            href="https://www.google.com/maps/place/Gilman+Parking+Structure/@32.8801,-117.2414,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc06c4414caf4f:0xefb6a8c9bb301347!8m2!3d32.8801!4d-117.2414!16s%2Fg%2F11bw3x0q9c?entry=ttu" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-500 hover:text-red-400 transition-colors"
                          >
                            - Gilman Structure
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.google.com/maps/place/Hopkins+Parking+Structure/@32.8801,-117.2414,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc06c4414caf4f:0xefb6a8c9bb301347!8m2!3d32.8801!4d-117.2414!16s%2Fg%2F11bw3x0q9c?entry=ttu" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-500 hover:text-red-400 transition-colors"
                          >
                            - Hopkins Structure
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p className="text-gray-300">Park in "V" or "D" Spaces only</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p className="text-gray-300">Parking payment required through Parkmobile</p>
                  </li>
                </ul>
              </div>

              <div className="border-4 border-gray-800 bg-gray-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-6 text-red-500">Public Transit Option</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <div>
                      <p className="font-medium text-white">MTS Nobel Drive Station:</p>
                      <ul className="ml-4 mt-1 text-gray-300">
                        <li>- Free Parking Available</li>
                        <li>- $2.50 metro ride to campus</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <div>
                      <p className="font-medium text-white">Download PRONTO App:</p>
                      <Button
                        href="https://www.sdmts.com/fares/pronto"
                        variant="secondary"
                        size="sm"
                        className="mt-2"
                      >
                        Get PRONTO App
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-white">About the Event</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join Charlie Kirk, founder and executive director of Turning Point USA, for an engaging discussion at UC San Diego. This outdoor event provides a unique opportunity to interact, ask questions, and engage in meaningful dialogue about current issues affecting our nation and campus community.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Whether you're a UCSD student or a member of the broader San Diego community, this event promises to be an enlightening experience on one of California's most beautiful university campuses.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Don't miss this opportunity to be part of an engaging discussion about America's future. Register now to secure your spot.
            </p>
            <Button
              href="https://events2022.tpusa.com/events/the-american-comeback-tour-at-the-university-of-california-san-diego"
              size="lg"
            >
              Register for the Event
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2024 TPUSA at UCSD. All rights reserved.</p>
          <p>Event organized by Turning Point USA at UC San Diego</p>
        </div>
      </footer>
    </>
  );
} 