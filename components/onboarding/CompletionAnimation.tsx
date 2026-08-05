"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const LOADING_MESSAGES = [
  "Setting up your workspace...",
  "Preparing analytics engine...",
  "Creating your personalized dashboard...",
  "Optimizing performance experience...",
];

interface CompletionAnimationProps {
  onComplete: () => void;
}

export function CompletionAnimation({ onComplete }: CompletionAnimationProps) {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => {
        if (prev < LOADING_MESSAGES.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 600);

    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="py-12 text-center space-y-6 flex flex-col items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="h-20 w-20 rounded-3xl bg-accent text-accent-foreground flex items-center justify-center shadow-xl ring-8 ring-accent/20"
      >
        <Sparkles className="h-10 w-10" />
      </motion.div>

      <div className="space-y-2 max-w-sm">
        <h3 className="text-2xl font-bold font-display tracking-tight">
          Building Your PTS Operating System
        </h3>
        <motion.p
          key={msgIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-medium text-accent h-6 font-mono"
        >
          {LOADING_MESSAGES[msgIndex]}
        </motion.p>
      </div>

      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden p-0.5 border">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
