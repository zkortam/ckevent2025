'use client';

import React from 'react';
import { UserGroupIcon, CalendarIcon, MegaphoneIcon, ArrowDownIcon, FireIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, SparklesIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Button from './components/Button';
import FAQ from './components/FAQ';
import BackgroundEffects from './components/BackgroundEffects';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-[50px] md:pt-0">
        {/* Hero Section */}
        <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
          {/* Sophisticated Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Refined Typography */}
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Turning Point
                  <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    at UC San Diego
                  </span>
                </motion.h1>
                
                {/* Clear Hierarchy - Sub-head */}
                <motion.p 
                  className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-12 font-light leading-relaxed max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Building community through shared values of 
                  <span className="text-white font-medium"> freedom</span>, 
                  <span className="text-white font-medium"> opportunity</span>, and 
                  <span className="text-white font-medium"> growth</span>
                </motion.p>
                
                {/* Bold CTAs */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a href="https://discord.gg/4QTd3a8j6n" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                    <span className="relative z-10">Join Our Community</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a href="https://www.instagram.com/tpucsd" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-gray-700 text-white text-lg font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-900/50 transition-all duration-300">
                    Connect With Us
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:bg-gray-900/60 transition-colors">
                <div className="text-2xl font-bold text-red-500 mb-2">Weekly</div>
                <div className="text-gray-400">Meetings</div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:bg-gray-900/60 transition-colors">
                <div className="text-2xl font-bold text-red-500 mb-2">Open</div>
                <div className="text-gray-400">Dialogue</div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:bg-gray-900/60 transition-colors">
                <div className="text-2xl font-bold text-red-500 mb-2">Active</div>
                <div className="text-gray-400">Community</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section - Card Style */}
        <section className="py-32 bg-black relative">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              {/* Section Header */}
              <motion.div 
                className="text-center mb-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                  Our Community
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  We bring together students who value thoughtful conversation, 
                  personal growth, and building meaningful connections.
                </p>
              </motion.div>

              {/* Feature Cards */}
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div 
                  className="group bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-10 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-500/20 transition-colors duration-300">
                    <AcademicCapIcon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Learning Together</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    We explore ideas about economics, government, and society through 
                    engaging discussions and educational events.
                  </p>
                </motion.div>

                <motion.div 
                  className="group bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-10 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-500/20 transition-colors duration-300">
                    <ChatBubbleLeftRightIcon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Thoughtful Conversations</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    We create a welcoming space for respectful dialogue, where 
                    different perspectives are heard and valued.
                  </p>
                </motion.div>

                <motion.div 
                  className="group bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-10 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-500/20 transition-colors duration-300">
                    <UserGroupIcon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Building Friendships</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    We connect students who share similar values and interests, 
                    creating lasting friendships and a supportive community.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Large Typography */}
        <section className="py-32 bg-black relative overflow-hidden">
          {/* Subtle Background Treatment */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              
              <motion.div 
                className="text-center mb-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                  What We Value
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-12">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <SparklesIcon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Economic Freedom</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    We believe in the power of free markets and entrepreneurship 
                    to create opportunities for everyone.
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <LightBulbIcon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Personal Liberty</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    We value individual choice, personal responsibility, and 
                    the freedom to pursue your own path.
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <ChatBubbleLeftRightIcon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Open Dialogue</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    We champion respectful conversation, diverse perspectives, 
                    and the free exchange of ideas.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section - Modern Layout */}
        <section className="py-32 bg-black">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                    Come Join Us
                  </h2>
                  <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                    Whether you're curious about our ideas, looking to make new friends, 
                    or want to engage in thoughtful conversations, we'd love to have you 
                    join our community at UCSD.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a href="https://discord.gg/4QTd3a8j6n" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                      Join Us
                    </a>
                    <a href="/event" className="px-8 py-4 border-2 border-gray-700 text-white text-lg font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-900/50 transition-all duration-300">
                      See Events
                    </a>
                  </div>
                </motion.div>

                {/* Right Column - Info Cards */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Weekly Meetings</h3>
                    <p className="text-gray-400 mb-3">📅 Every Tuesday at 7:00 PM</p>
                    <p className="text-gray-400">📍 Location varies - check our Instagram for updates</p>
                  </div>
                  
                  <div className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Get Connected</h3>
                    <p className="text-gray-400 mb-3">📧 Send us a message for meeting details</p>
                    <p className="text-gray-400">📱 Follow us on social media for updates</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Bold and Centered */}
        <section className="py-32 bg-black">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Be Part of Something Bigger
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-400 mb-16 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connect with students across the country who share your values 
                and are working together to build a better future.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a href="https://turningpointusa.com" target="_blank" rel="noopener noreferrer" className="px-12 py-6 border-2 border-gray-700 text-white text-xl font-semibold rounded-2xl hover:border-gray-500 hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-105">
                  Learn More About TPUSA
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-gray-950/50 border-t border-gray-800 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">TPUSA at UCSD</h3>
                <p className="text-gray-400">Building community through shared values.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/event" className="block text-gray-400 hover:text-white transition-colors">Current Events</a>
                  <a href="/statement" className="block text-gray-400 hover:text-white transition-colors">Our Statement</a>
                  <a href="/past-statements" className="block text-gray-400 hover:text-white transition-colors">Past Statements</a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <a href="https://www.instagram.com/tpucsd" className="text-red-500 hover:text-red-400 transition-colors">
                  @tpucsd on Instagram
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-500">© 2024 TPUSA at UCSD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}