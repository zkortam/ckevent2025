'use client';

import React from 'react';
import { MapPinIcon, CalendarIcon, ClockIcon, ArrowDownIcon, FireIcon, GlobeEuropeAfricaIcon, GlobeAsiaAustraliaIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import Header from './components/Header';
import Button from './components/Button';
import FAQ from './components/FAQ';
import CountdownTimer from './components/CountdownTimer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('./components/MapSection'), {
  ssr: false,
  loading: () => <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] bg-gray-800 rounded-xl animate-pulse" />
});

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
                            href="https://www.google.com/maps/place/Gilman+Parking+Structure,+3100+Gilman+Dr,+La+Jolla,+CA+92093/@32.8773774,-117.2364275,16z/data=!3m1!4b1!4m6!3m5!1s0x80dc06c5218d55eb:0xd07cbfc872e378aa!8m2!3d32.8773774!4d-117.2338526!16s%2Fg%2F1tdkgyrr?entry=ttu"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-500 hover:text-red-400 transition-colors"
                          >
                            - Gilman Structure
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.google.com/maps/place/Hopkins+Parking+Structure/@32.8831766,-117.2437058,16.87z/data=!4m15!1m8!3m7!1s0x80dc06c5218d55eb:0xd07cbfc872e378aa!2sGilman+Parking+Structure,+3100+Gilman+Dr,+La+Jolla,+CA+92093!3b1!8m2!3d32.8773774!4d-117.2338526!16s%2Fg%2F1tdkgyrr!3m5!1s0x80dc06c1e6156103:0xc6690b999c002d97!8m2!3d32.8837791!4d-117.2394026!16s%2Fg%2F1jky0r__3?entry=ttu"
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

        {/* On-Campus Dining Section */}
        <section id="dining" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">On-Campus Dining</h2>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">Explore UCSD's diverse on-campus restaurants by cuisine. Great options for visitors and students alike!</p>
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
              <MapSection diningLocations={diningLocations} />
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {/* Hispanic/Latin */}
                <DiningCard
                  icon={<FireIcon className="h-8 w-8 text-orange-400" />}
                  name="Taco Villa"
                  cuisine="Hispanic/Latin (Savory)"
                  link="https://www.google.com/maps/place/Taco+Villa/@32.8780701,-117.2403775,18.52z/data=!3m1!5s0x80dc06c6f21566e7:0x3aca64cd90ac6c71!4m6!3m5!1s0x80dc06c6f1ed8869:0xc4c54c2210bb8e96!8m2!3d32.876892!4d-117.2400931!16s%2Fg%2F11bzr7mmtv?entry=ttu"
                />
                <DiningCard
                  icon={<FireIcon className="h-8 w-8 text-orange-400" />}
                  name="Blue Bowl"
                  cuisine="Hispanic/Latin (Sweet)"
                  link="https://www.google.com/maps/place/Blue+Bowl+Superfoods/@32.880554,-117.2410037,20z/data=!4m6!3m5!1s0x80dc07c0207ce53d:0xb9b3236545265ee5!8m2!3d32.8804876!4d-117.2408485!16s%2Fg%2F11nlfqq99q?entry=ttu"
                />
                {/* Mediterranean */}
                <DiningCard
                  icon={<GlobeEuropeAfricaIcon className="h-8 w-8 text-yellow-400" />}
                  name="Santorini"
                  cuisine="Mediterranean (Greek)"
                  link="https://www.google.com/maps/place/Santorini+Greek+Island+Grill/@32.8797195,-117.2358748,20.41z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x54249e3da300e0b0!8m2!3d32.8797561!4d-117.2356982!16s%2Fg%2F1tdvvlyv?entry=ttu"
                />
                <DiningCard
                  icon={<GlobeEuropeAfricaIcon className="h-8 w-8 text-yellow-400" />}
                  name="Tahini"
                  cuisine="Mediterranean (Middle-Eastern/Arabic)"
                  link="https://www.google.com/maps/place/Tahini+Authentic+Middle+Eastern+Street+Food/@32.880554,-117.2410037,20z/data=!4m6!3m5!1s0x80dc07b479ebf95d:0xdde5e5d57fa835dd!8m2!3d32.8807115!4d-117.2408507!16s%2Fg%2F11k3h44tsv?entry=ttu"
                />
                {/* Asian - East Asian */}
                <DiningCard
                  icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-pink-400" />}
                  name="Panda Express"
                  cuisine="Asian (East Asian)"
                  link="https://www.google.com/maps/place/Panda+Express/@32.8796643,-117.2366848,19.16z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x22c1afa9856ecf25!8m2!3d32.8797279!4d-117.2363977!16s%2Fg%2F1wv_sh_y?entry=ttu"
                />
                <DiningCard
                  icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-pink-400" />}
                  name="Lemongrass"
                  cuisine="Asian (East Asian)"
                  link="https://www.google.com/maps/place/Lemongrass/@32.880554,-117.2410037,20z/data=!4m6!3m5!1s0x80dc07b711210d47:0x61e19a8f7935df75!8m2!3d32.8809105!4d-117.2408997!16s%2Fg%2F11swypgs8v?entry=ttu"
                />
                <DiningCard
                  icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-pink-400" />}
                  name="Tapioca Express"
                  cuisine="Asian (East Asian)"
                  link="https://www.google.com/maps/place/Tapioca+Express/@32.8797195,-117.2358748,20.41z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06c477f24e0f:0xabc52cac6c7e03dd!8m2!3d32.8796317!4d-117.2356142!16s%2Fg%2F1tfwdsw2?entry=ttu"
                />
                <DiningCard
                  icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-pink-400" />}
                  name="Blue Pepper"
                  cuisine="Asian (East Asian)"
                  link="https://www.google.com/maps/place/Blue+Pepper+Asian+Cuisine+-+UCSD/@32.8780701,-117.2403775,18.52z/data=!4m6!3m5!1s0x80dc06d869a3c4bd:0x79ae6a8846b75d59!8m2!3d32.8772635!4d-117.2402513!16s%2Fg%2F1thf8vvd?entry=ttu"
                />
                <DiningCard
                  icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-pink-400" />}
                  name="Fan Fan"
                  cuisine="Asian (East Asian)"
                  link="https://www.google.com/maps/place/Fan-Fan/@32.8801316,-117.240997,20z/data=!4m6!3m5!1s0x80dc073af40fa38b:0xe8bbf115f76844a3!8m2!3d32.8800633!4d-117.2409288!16s%2Fg%2F11qg9lmgk1?entry=ttu"
                />
                <DiningCard
                  icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-pink-400" />}
                  name="Showa Ramen"
                  cuisine="Asian (East Asian)"
                  link="https://www.google.com/maps/place/Sh%C5%8Dwa+Ramen/@32.880554,-117.2410037,20z/data=!4m6!3m5!1s0x80dc07b711210d47:0x61e19a8f7935df75!8m2!3d32.8809105!4d-117.2408997!16s%2Fg%2F11swypgs8v?entry=ttu"
                />
                {/* Asian - South Asian */}
                <DiningCard
                  icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-pink-400" />}
                  name="Curry Up Now"
                  cuisine="Asian (South Asian)"
                  link="https://www.google.com/maps/place/Curry+Up+Now/@32.8797382,-117.2363948,20.41z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc07f8a600b4a5:0x217d7219f068c317!8m2!3d32.8797545!4d-117.2360322!16s%2Fg%2F11sx291x7r?entry=ttu"
                />
                {/* American */}
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Subway"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Subway/@32.8797811,-117.235901,20.16z/data=!4m6!3m5!1s0x80dc06d869a3c4bd:0x3fc260aa3877e212!8m2!3d32.8795592!4d-117.2358084!16s%2Fg%2F1tfm6z1_?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Jamba"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Jamba+UCSD/@32.8796804,-117.2369716,20.16z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x2e66015f9354a4f7!8m2!3d32.87995!4d-117.23682!16s%2Fg%2F1tggb820?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Burger King"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Burger+King/@32.8796643,-117.2366848,19.16z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06da95555555:0x66fa2f04c194bb55!8m2!3d32.8800926!4d-117.2359201!16s%2Fg%2F1tddy1pm?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="The Loft"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Zanzibar+Cafe+At+the+Loft/@32.8796666,-117.2364375,19.85z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x4bcc04871616730f!8m2!3d32.8796069!4d-117.2358855!16s%2Fg%2F1tjdgh8q?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Starbucks"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Starbucks/@32.879518,-117.2369763,18.61z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06c38bc41147:0x89de2fc7300fc6d7!8m2!3d32.8798977!4d-117.2363369!16s%2Fg%2F11bwymkpc3?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Shores Diner"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Shores+Diner/@32.8780701,-117.2403775,18.52z/data=!4m6!3m5!1s0x80dc070071127b6b:0x8d8e811672394108!8m2!3d32.8771004!4d-117.2395588!16s%2Fg%2F11y3yhnhn6?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Croutons"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Croutons/@32.8786937,-117.2368134,19.13z/data=!4m6!3m5!1s0x80dc06c45b643ae1:0x9af00a58c6adff0f!8m2!3d32.8785489!4d-117.235762!16s%2Fg%2F11clvfbl5z?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Dirty Birds"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Dirty+Birds+La+Jolla/@32.879518,-117.2369763,18.61z/data=!4m6!3m5!1s0x80dc07c1529c061d:0x41b27d96d6d5c640!8m2!3d32.8800597!4d-117.2367173!16s%2Fg%2F11rhd_dqdh?entry=ttu"
                />
                <DiningCard
                  icon={<HomeModernIcon className="h-8 w-8 text-blue-400" />}
                  name="Plant Power"
                  cuisine="American"
                  link="https://www.google.com/maps/place/Plant+Power+Fast+Food/@32.880554,-117.2410037,3a,75y/data=!3m8!1e2!3m6!1sAF1QipNzIIRI1ZonGywJRbQew8FjnIhsfZJ1TevppUdg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNzIIRI1ZonGywJRbQew8FjnIhsfZJ1TevppUdg%3Dw203-h152-k-no!7i4608!8i3456!4m7!3m6!1s0x80dc071378ac2bbd:0x3a3c920b3ccf98f3!8m2!3d32.8808945!4d-117.2413927!10e5!16s%2Fg%2F11nnm3r2_j?entry=ttu"
                />
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

// DiningCard component
function DiningCard({ icon, name, cuisine, link }: { icon: React.ReactNode; name: string; cuisine: string; link: string }) {
  return (
    <div className="flex flex-col items-center bg-gray-900/70 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-gray-800">
      <div className="mb-4">{icon}</div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-400 hover:underline text-center">{name}</a>
      <div className="text-sm text-gray-400 mt-2 text-center">{cuisine}</div>
    </div>
  );
}

// Dining locations and icons
const diningLocations = [
  {
    name: "Plant Power Fast Food",
    position: [32.8808945, -117.2413927] as [number, number],
    link: "https://www.google.com/maps/place/Plant+Power+Fast+Food/@32.880554,-117.2410037,3a,75y/data=!3m8!1e2!3m6!1sAF1QipNzIIRI1ZonGywJRbQew8FjnIhsfZJ1TevppUdg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNzIIRI1ZonGywJRbQew8FjnIhsfZJ1TevppUdg%3Dw203-h152-k-no!7i4608!8i3456!4m7!3m6!1s0x80dc071378ac2bbd:0x3a3c920b3ccf98f3!8m2!3d32.8808945!4d-117.2413927!10e5!16s%2Fg%2F11nnm3r2_j?entry=ttu",
  },
  {
    name: "Shōwa Ramen",
    position: [32.8809105, -117.2408997] as [number, number],
    link: "https://www.google.com/maps/place/Sh%C5%8Dwa+Ramen/@32.880554,-117.2410037,20z/data=!4m6!3m5!1s0x80dc07b711210d47:0x61e19a8f7935df75!8m2!3d32.8809105!4d-117.2408997!16s%2Fg%2F11swypgs8v?entry=ttu",
  },
  {
    name: "Tahini",
    position: [32.8807115, -117.2408507] as [number, number],
    link: "https://www.google.com/maps/place/Tahini+Authentic+Middle+Eastern+Street+Food/@32.880554,-117.2410037,20z/data=!4m6!3m5!1s0x80dc07b479ebf95d:0xdde5e5d57fa835dd!8m2!3d32.8807115!4d-117.2408507!16s%2Fg%2F11k3h44tsv?entry=ttu",
  },
  {
    name: "Blue Bowl",
    position: [32.8804876, -117.2408485] as [number, number],
    link: "https://www.google.com/maps/place/Blue+Bowl+Superfoods/@32.880554,-117.2410037,20z/data=!4m6!3m5!1s0x80dc07c0207ce53d:0xb9b3236545265ee5!8m2!3d32.8804876!4d-117.2408485!16s%2Fg%2F11nlfqq99q?entry=ttu",
  },
  {
    name: "Fan Fan",
    position: [32.8800633, -117.2409288] as [number, number],
    link: "https://www.google.com/maps/place/Fan-Fan/@32.8801316,-117.240997,20z/data=!4m6!3m5!1s0x80dc073af40fa38b:0xe8bbf115f76844a3!8m2!3d32.8800633!4d-117.2409288!16s%2Fg%2F11qg9lmgk1?entry=ttu",
  },
  {
    name: "Blue Pepper",
    position: [32.8772635, -117.2402513] as [number, number],
    link: "https://www.google.com/maps/place/Blue+Pepper+Asian+Cuisine+-+UCSD/@32.8780701,-117.2403775,18.52z/data=!4m6!3m5!1s0x80dc06d869a3c4bd:0x79ae6a8846b75d59!8m2!3d32.8772635!4d-117.2402513!16s%2Fg%2F1thf8vvd?entry=ttu",
  },
  {
    name: "Taco Villa",
    position: [32.876892, -117.2400931] as [number, number],
    link: "https://www.google.com/maps/place/Taco+Villa/@32.8780701,-117.2403775,18.52z/data=!3m1!5s0x80dc06c6f21566e7:0x3aca64cd90ac6c71!4m6!3m5!1s0x80dc06c6f1ed8869:0xc4c54c2210bb8e96!8m2!3d32.876892!4d-117.2400931!16s%2Fg%2F11bzr7mmtv?entry=ttu",
  },
  {
    name: "Shores Diner",
    position: [32.8771004, -117.2395588] as [number, number],
    link: "https://www.google.com/maps/place/Shores+Diner/@32.8780701,-117.2403775,18.52z/data=!4m6!3m5!1s0x80dc070071127b6b:0x8d8e811672394108!8m2!3d32.8771004!4d-117.2395588!16s%2Fg%2F11y3yhnhn6?entry=ttu",
  },
  {
    name: "Dirty Birds",
    position: [32.8800597, -117.2367173] as [number, number],
    link: "https://www.google.com/maps/place/Dirty+Birds+La+Jolla/@32.879518,-117.2369763,18.61z/data=!4m6!3m5!1s0x80dc07c1529c061d:0x41b27d96d6d5c640!8m2!3d32.8800597!4d-117.2367173!16s%2Fg%2F11rhd_dqdh?entry=ttu",
  },
  {
    name: "Starbucks",
    position: [32.8798977, -117.2363369] as [number, number],
    link: "https://www.google.com/maps/place/Starbucks/@32.879518,-117.2369763,18.61z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06c38bc41147:0x89de2fc7300fc6d7!8m2!3d32.8798977!4d-117.2363369!16s%2Fg%2F11bwymkpc3?entry=ttu",
  },
  {
    name: "Burger King",
    position: [32.8800926, -117.2359201] as [number, number],
    link: "https://www.google.com/maps/place/Burger+King/@32.8796643,-117.2366848,19.16z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06da95555555:0x66fa2f04c194bb55!8m2!3d32.8800926!4d-117.2359201!16s%2Fg%2F1tddy1pm?entry=ttu",
  },
  {
    name: "Panda Express",
    position: [32.8797279, -117.2363977] as [number, number],
    link: "https://www.google.com/maps/place/Panda+Express/@32.8796643,-117.2366848,19.16z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x22c1afa9856ecf25!8m2!3d32.8797279!4d-117.2363977!16s%2Fg%2F1wv_sh_y?entry=ttu",
  },
  {
    name: "The Loft",
    position: [32.8796069, -117.2358855] as [number, number],
    link: "https://www.google.com/maps/place/Zanzibar+Cafe+At+the+Loft/@32.8796666,-117.2364375,19.85z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x4bcc04871616730f!8m2!3d32.8796069!4d-117.2358855!16s%2Fg%2F1tjdgh8q?entry=ttu",
  },
  {
    name: "Curry Up Now",
    position: [32.8797545, -117.2360322] as [number, number],
    link: "https://www.google.com/maps/place/Curry+Up+Now/@32.8797382,-117.2363948,20.41z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc07f8a600b4a5:0x217d7219f068c317!8m2!3d32.8797545!4d-117.2360322!16s%2Fg%2F11sx291x7r?entry=ttu",
  },
  {
    name: "Santorini",
    position: [32.8797561, -117.2356982] as [number, number],
    link: "https://www.google.com/maps/place/Santorini+Greek+Island+Grill/@32.8797195,-117.2358748,20.41z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x54249e3da300e0b0!8m2!3d32.8797561!4d-117.2356982!16s%2Fg%2F1tdvvlyv?entry=ttu",
  },
  {
    name: "Tapioca Express",
    position: [32.8796317, -117.2356142] as [number, number],
    link: "https://www.google.com/maps/place/Tapioca+Express/@32.8797195,-117.2358748,20.41z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06c477f24e0f:0xabc52cac6c7e03dd!8m2!3d32.8796317!4d-117.2356142!16s%2Fg%2F1tfwdsw2?entry=ttu",
  },
  {
    name: "Subway",
    position: [32.8795592, -117.2358084] as [number, number],
    link: "https://www.google.com/maps/place/Subway/@32.8797811,-117.235901,20.16z/data=!4m6!3m5!1s0x80dc06d869a3c4bd:0x3fc260aa3877e212!8m2!3d32.8795592!4d-117.2358084!16s%2Fg%2F1tfm6z1_?entry=ttu",
  },
  {
    name: "Jamba",
    position: [32.87995, -117.23682] as [number, number],
    link: "https://www.google.com/maps/place/Jamba+UCSD/@32.8796804,-117.2369716,20.16z/data=!3m1!5s0x80dc06c4740ccfc9:0x3132a4b07ec421f8!4m6!3m5!1s0x80dc06d869a3c4bd:0x2e66015f9354a4f7!8m2!3d32.87995!4d-117.23682!16s%2Fg%2F1tggb820?entry=ttu",
  },
  {
    name: "Croutons",
    position: [32.8785489, -117.235762] as [number, number],
    link: "https://www.google.com/maps/place/Croutons/@32.8786937,-117.2368134,19.13z/data=!4m6!3m5!1s0x80dc06c45b643ae1:0x9af00a58c6adff0f!8m2!3d32.8785489!4d-117.235762!16s%2Fg%2F11clvfbl5z?entry=ttu",
  }
]; 