import React from "react";
import { Sparkles, Layers, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ComingSoonCardProps {
  moduleName: string;
  features: string[];
}

export function ComingSoonCard({ moduleName, features }: ComingSoonCardProps) {
  return (
    <Card className="border-dashed bg-card/40 backdrop-blur-sm shadow-subtle my-6">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-4 w-4 text-accent animate-pulse" />
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Infrastructure Ready
          </span>
        </div>
        <CardTitle className="text-xl font-display">
          {moduleName} Engine Ready for Implementation
        </CardTitle>
        <CardDescription>
          All layout boundaries, Zustand stores, Prisma models, and UI primitives are configured.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
            Planned Features in Upcoming Milestone:
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl border bg-background/50 text-xs font-medium"
              >
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center gap-3">
          <Button variant="accent" size="sm" className="shadow-sm">
            <Layers className="h-4 w-4 mr-2" />
            Module Shell Active
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
