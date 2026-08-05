"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "What is PTS (Personal Tracking System)?",
    answer: "PTS is an enterprise-grade Personal Operating System that combines daily task management, fitness & exercise logging, markdown knowledge documentation, habit goal tracking, and visual analytics into one fast, unified web application.",
  },
  {
    question: "Who is PTS designed for?",
    answer: "PTS is built for software engineers, founders, students, fitness enthusiasts, and anyone seeking a high-performance workspace to organize their career, health, and personal growth without switching between multiple apps.",
  },
  {
    question: "Is PTS free to use?",
    answer: "Yes! The core PTS foundation is open-source and free to self-host or run locally. Cloud sync and advanced team features will be available in future releases.",
  },
  {
    question: "How is my personal data secured?",
    answer: "PTS uses PostgreSQL database standards with Auth.js session encryption. Your personal data, notes, and metrics are strictly private and never shared with third-party advertisers.",
  },
  {
    question: "Will there be a native mobile app?",
    answer: "Yes! A companion mobile application supporting iOS & Android with offline sync is scheduled for Phase 5 of our development roadmap.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 border-t bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Everything you need to know about the PTS operating system and architectural roadmap.
          </p>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border bg-card/60 backdrop-blur-md overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-base sm:text-lg hover:text-accent transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-accent shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 border-t text-xs sm:text-sm text-muted-foreground leading-relaxed pl-13"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
