import React from "react";
import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";
import { APP_CONFIG } from "@/constants";

export function LandingFooter() {
  return (
    <footer className="border-t bg-card/60 backdrop-blur-md py-12 text-xs text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 pb-8 border-b">
          {/* Column 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-bold font-display text-base shadow-sm">
                PTS
              </div>
              <span className="font-bold text-sm font-display tracking-tight text-foreground">
                {APP_CONFIG.name}
              </span>
            </div>
            <p className="leading-relaxed">
              Enterprise-grade Personal Operating System combining tasks, workouts, notes, and analytics.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-2">
            <p className="font-semibold text-foreground uppercase tracking-wider text-[11px]">Product</p>
            <ul className="space-y-1.5">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#analytics" className="hover:text-foreground transition-colors">Analytics</a></li>
              <li><a href="#preview" className="hover:text-foreground transition-colors">App Preview</a></li>
              <li><a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-2">
            <p className="font-semibold text-foreground uppercase tracking-wider text-[11px]">Resources</p>
            <ul className="space-y-1.5">
              <li><Link href="/dashboard" className="hover:text-foreground transition-colors">App Dashboard</Link></li>
              <li><a href="https://github.com/mohanshankarbotcha/PTS" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub Repository</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">Documentation & FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Contact */}
          <div className="space-y-2">
            <p className="font-semibold text-foreground uppercase tracking-wider text-[11px]">Legal & Social</p>
            <ul className="space-y-1.5">
              <li><a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="mailto:support@pts-app.com" className="hover:text-foreground transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {APP_CONFIG.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/mohanshankarbotcha/PTS" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> for peak performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
