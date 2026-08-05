import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-display">
          Personal Tracking System (PTS)
        </h2>
        <p className="text-muted-foreground text-base">
          Production-Ready Architecture & Foundation Engine Initialized.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Architecture Status</CardTitle>
            <CardDescription>System foundation & modular configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between py-1 border-b">
              <span className="text-muted-foreground">Framework</span>
              <span className="font-medium">Next.js 14 App Router</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span className="text-muted-foreground">Database ORM</span>
              <span className="font-medium">Prisma + PostgreSQL</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span className="text-muted-foreground">Authentication</span>
              <span className="font-medium">Auth.js / NextAuth</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">State Management</span>
              <span className="font-medium">Zustand</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design & Infrastructure</CardTitle>
            <CardDescription>Visual design system tokens & theme persistence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between py-1 border-b">
              <span className="text-muted-foreground">Design Tokens</span>
              <span className="font-medium">UI/UX Pro Max System</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span className="text-muted-foreground">Theme Modes</span>
              <span className="font-medium">Light / Dark / System</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span className="text-muted-foreground">Storage Abstraction</span>
              <span className="font-medium">Provider Interface Ready</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Notification Engine</span>
              <span className="font-medium">Browser Web Push Prep</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-dashed bg-muted/30">
        <CardHeader>
          <CardTitle className="text-lg">Ready for Prompt 02</CardTitle>
          <CardDescription>
            All foundational schemas, stores, components, services, and layout structures are initialized cleanly. No business logic has been created yet as per constraints.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="accent" size="sm">
            Foundation Engine Active
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
