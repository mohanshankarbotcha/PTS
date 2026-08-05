"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepContainerProps {
  children: React.ReactNode;
  stepKey: number;
}

export function StepContainer({ children, stepKey }: StepContainerProps) {
  return (
    <motion.div
      key={stepKey}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
