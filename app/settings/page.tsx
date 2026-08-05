"use client";

import React from "react";
import { Settings, User, Bell, Palette, Shield } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings & System Preferences"
        description="Configure your account preferences, theme appearance, notifications, and integration settings."
        badge="System Shell"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-accent" />
              <CardTitle>Appearance & Theme</CardTitle>
            </div>
            <CardDescription>
              Customize system visual preference and color theme mode.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl border bg-muted/20">
              <span className="text-sm font-medium">Theme Mode</span>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>

        {/* Profile Preferences */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-accent" />
              <CardTitle>User Profile</CardTitle>
            </div>
            <CardDescription>
              Manage account email, profile name, and OAuth connections.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="p-3 rounded-xl border bg-muted/20 space-y-1">
              <p className="font-semibold text-xs text-muted-foreground uppercase">Email Address</p>
              <p className="font-medium">admin@pts-app.com</p>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Edit Account Information
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-accent" />
              <CardTitle>Browser Push Notifications</CardTitle>
            </div>
            <CardDescription>
              Configure Web Push alerts and reminder delivery preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" size="sm" className="w-full">
              Request Notification Permission
            </Button>
          </CardContent>
        </Card>

        {/* Security & System */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <CardTitle>System & Security</CardTitle>
            </div>
            <CardDescription>
              Environment status, database parameters, and security engine.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b">
              <span className="text-muted-foreground">Version</span>
              <span className="font-mono font-semibold">1.0.0</span>
            </div>
            <div className="flex justify-between py-1.5 border-b">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-emerald-600 dark:text-emerald-400">Production Ready</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
