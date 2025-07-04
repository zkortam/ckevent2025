'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import BackgroundEffects from '../components/BackgroundEffects';

export default function StatementPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-[50px] md:pt-0">
        <BackgroundEffects />
        
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-black flex items-center pt-[30px]">
          <div className="absolute inset-0 bg-black/80"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 pt-[40px]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Statement Regarding
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-6">
                  Independence Day
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  July 4th, 2025
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statement Content */}
        <section className="py-8 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  We wish you all a joyous and fulfilling Independence Day. On this Fourth of July, we celebrate the glory, beauty, and strength of our nation. We commemorate the struggles and perseverance of the strong men and women who have sacrificed for our country and its people.
                </p>
                
                <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  The United States of America is truly a nation like no other. Our freedoms, unity, purpose, and history bring us together under one banner.
                </p>
                
                <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  We are one nation under God, indivisible, with liberty and justice for all.
                </p>
                
                <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed font-semibold">
                  God bless you all, and God bless the United States of America.
                </p>
                
                <p className="text-lg text-gray-400 text-center font-semibold mt-8">
                  End of Statement
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation to Past Statements */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Looking for Previous Statements?
                </h3>
                <p className="text-gray-300 mb-8">
                  Read our past statements on important issues and events.
                </p>
                <a
                  href="/past-statements"
                  className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  View Past Statements
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-black">
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