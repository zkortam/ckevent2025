'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import BackgroundEffects from '../components/BackgroundEffects';

export default function PastStatementsPage() {
  const statements = [
    {
      id: 'charlie-kirk-event',
      title: 'May 1 Charlie Kirk Event',
      date: 'April 25, 2025',
      excerpt: 'We recognize that many students at UCSD may not share Charlie Kirk\'s political viewpoints, particularly on issues important to our campus community.',
      content: [
        'We recognize that many students at UCSD may not share Charlie Kirk\'s political viewpoints, particularly on issues important to our campus community. At Turning Point UCSD, we deeply respect and value the diversity of opinions, and firmly believe in every individual\'s right to freely express their views.',
        'You are welcome to engage with Charlie Kirk through dialogue, attend simply to listen, or choose not to attend the event altogether. Whatever you decide, we kindly ask that your actions remain respectful. For anyone interested in further debate or discussion, we are happy to provide dedicated spaces for meaningful conversations.',
        'Turning Point UCSD is committed to fostering respectful dialogue and ensuring a safe environment for everyone to openly share their thoughts and beliefs. We unequivocally condemn all forms of political violence, mistreatment, or disrespect based on differing political views. At our core, we are all human beings deserving of kindness, empathy, compassion, and respect.'
      ]
    },
    {
      id: 'pope-francis',
      title: 'The Death of Pope Francis',
      date: 'April 21, 2025',
      excerpt: 'We join millions around the world in mourning the passing of Pope Francis, who died on April 21, 2025, at the age of 88.',
      content: [
        'We join millions around the world in mourning the passing of Pope Francis, who died on April 21, 2025, at the age of 88. As the spiritual leader of the Catholic Church, he served with humility, conviction, and a deep sense of compassion.',
        'Pope Francis dedicated his life to faith, service, and the care of others. His leadership inspired countless individuals to seek truth, act with kindness, and serve those in need.',
        'In this time of grief, we extend our heartfelt condolences to the global Catholic community and to all who were touched by his message and ministry. May his legacy of service and hope live on.'
      ]
    },
    {
      id: 'visa-revocations',
      title: 'Recent Visa Revocations of UCSD International Students',
      date: 'April 18, 2025',
      excerpt: 'TPUSA at UC San Diego is deeply concerned by the recent revocation of visas for 36 legal International students without due process.',
      content: [
        'TPUSA at UC San Diego is deeply concerned by the recent revocation of visas for 36 legal International students without due process or clear explanation—an action we find highly alarming. We believe in the United States as a nation that welcomes good people from around the world and upholds the God-given right of every individual to express themselves freely.',
        'The U.S. government should follow its own regulations and apply consistent standards of transparency and due process, even when foreign nationals are involved. We urge the University and all levels of government to support affected students, calling for full transparency and protection of their legal rights.',
        'While national security and immigration enforcement are incredibly important and vital to our country, those efforts must be thoughtfully directed. Targeting legal immigrants and valid visa holders undermines trust in our institutions and distracts from addressing real challenges posed by unlawful entry and systemic issues.'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-[50px] md:pt-0">
        <BackgroundEffects />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-black">
          <div className="absolute inset-0 bg-black/80"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Past Statements
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                  Our position on important issues and events
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statements List */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {statements.map((statement, index) => (
                <motion.div
                  key={statement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Statement Regarding {statement.title}
                    </h2>
                    <p className="text-gray-400 text-lg">
                      {statement.date}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {statement.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">
                      End of Statement
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Back */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Stay Updated on Our Positions
                </h3>
                <p className="text-gray-300 mb-8">
                  Follow our current activities and upcoming events.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                The views expressed are those of TPUSA at UC San Diego and do not necessarily reflect those of the national organization.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 