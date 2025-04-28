import React from 'react';
import Link from 'next/link';

export default function StatementPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] relative">
      {/* Subtle SVG pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#222" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 py-16 px-4">
        <div className="w-full max-w-2xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <span className="inline-block border border-gray-700 text-gray-300 hover:text-white hover:border-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 bg-black/60">← Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-wide drop-shadow-lg">Statement Regarding May 1 Charlie Kirk Event</h1>
          <p className="text-base text-gray-300 text-center mb-6 italic">25 April, 2025</p>
          <p className="text-lg text-white mb-4 leading-relaxed text-center">We recognize that many students at UCSD may not share Charlie Kirk's political viewpoints, particularly on issues important to our campus community. At Turning Point UCSD, we deeply respect and value the diversity of opinions, and firmly believe in every individual's right to freely express their views.</p>
          <p className="text-lg text-white mb-4 leading-relaxed text-center">You are welcome to engage with Charlie Kirk through dialogue, attend simply to listen, or choose not to attend the event altogether. Whatever you decide, we kindly ask that your actions remain respectful. For anyone interested in further debate or discussion, we are happy to provide dedicated spaces for meaningful conversations.</p>
          <p className="text-lg text-white mb-4 leading-relaxed text-center">Turning Point UCSD is committed to fostering respectful dialogue and ensuring a safe environment for everyone to openly share their thoughts and beliefs. We unequivocally condemn all forms of political violence, mistreatment, or disrespect based on differing political views. At our core, we are all human beings deserving of kindness, empathy, compassion, and respect.</p>
          <p className="text-lg text-gray-400 text-center font-semibold mt-8">End of Statement</p>
        </div>
      </main>
      <footer className="bg-black text-gray-400 py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2024 TPUSA at UCSD. All rights reserved.</p>
          <p>Event organized by Turning Point USA at UC San Diego</p>
        </div>
      </footer>
    </div>
  );
} 