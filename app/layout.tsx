import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { GlobalNotificationContainer } from "@/components/layout/GlobalNotificationContainer";
import { ModalContainer } from "@/components/layout/ModalContainer";
import { LoadingOverlay } from "@/components/layout/LoadingOverlay";
import { APP_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} — ${APP_CONFIG.fullName}`,
  description: APP_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <Providers>
          <div className="flex min-h-screen">
            {/* Sidebar Placeholder */}
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">
              {/* Top Navigation Bar Placeholder */}
              <Navbar />

              {/* Main Content Area */}
              <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
                {children}
              </main>
            </div>
          </div>

          {/* Global Containers & Overlays */}
          <GlobalNotificationContainer />
          <ModalContainer />
          <LoadingOverlay isLoading={false} />
        </Providers>
      </body>
    </html>
  );
}
