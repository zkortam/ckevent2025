import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-900">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need to be a UCSD student to attend?",
      answer: "No, this event is open to both UCSD students and the general public. Everyone is welcome to join and engage in the discussion."
    },
    {
      question: "Is registration required?",
      answer: "While RSVP is not required, it is highly encouraged. RSVPing helps us better plan for the event and ensures you receive updates and reminders."
    },
    {
      question: "What should I bring?",
      answer: "As this is an outdoor event, we recommend bringing water and dressing appropriately for the weather. No ID is required to attend the event."
    },
    {
      question: "Will there be a Q&A session?",
      answer: "Yes, there will be opportunities to ask questions and engage in dialogue with Charlie Kirk during the event."
    },
    {
      question: "How long is the event?",
      answer: "The event will run for approximately 2 hours, including the Q&A session."
    },
    {
      question: "Is the event location accessible?",
      answer: "Yes, Library Walk is fully accessible. If you require any specific accommodations, please contact the organizers in advance."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
} 