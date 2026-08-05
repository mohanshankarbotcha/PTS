"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, x: [0, -6, 6, -3, 3, 0] }}
      transition={{ duration: 0.3 }}
      className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-medium flex items-center gap-2.5 shadow-xs"
    >
      <AlertCircle className="h-4 w-4 shrink-0" />
      <span>{message}</span>
    </motion.div>
  );
}
