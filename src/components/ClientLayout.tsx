"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBubble from "@/components/ContactBubble";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <SpeedInsights />
      <Footer />
      <ContactBubble />
      <Analytics />
    </div>
  );
}
