"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return (
      <nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium text-muted-foreground">
        <span className="flex items-center gap-1.5 text-foreground font-semibold">
          <Home className="h-3.5 w-3.5" />
          Dashboard
        </span>
      </nav>
    );
  }

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium text-muted-foreground overflow-x-auto py-1">
      <ol className="flex items-center gap-1.5 whitespace-nowrap">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
            title="Home"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

          return (
            <motion.li
              key={href}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5"
            >
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-foreground capitalize" aria-current="page">
                  {title}
                </span>
              ) : (
                <Link href={href} className="hover:text-foreground transition-colors capitalize">
                  {title}
                </Link>
              )}
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}
