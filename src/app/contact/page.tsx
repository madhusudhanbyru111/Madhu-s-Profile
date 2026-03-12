import Contact from "@/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Madhusudhan Byru - Hire AI/ML Engineer | Get in Touch",
  description:
    "Get in touch with Madhusudhan Byru for AI/ML projects, freelance work, collaboration opportunities, or job inquiries. Email: byrumadhusudhan@gmail.com | Phone: +919390032400. Based in Hyderabad, India. Available for remote work worldwide.",
  keywords:
    "Madhusudhan Byru, Hire AI/ML Engineer, Freelance AI/ML Engineer, Contact AI/ML Engineer, Hire Machine Learning Engineer, Machine Learning Services, Remote Developer Hire, Developer Contact Hyderabad, AI/ML Collaboration, Web Development Contact, Software Engineer Contact",
  openGraph: {
    title: "Contact Madhusudhan Byru - AI/ML Engineer",
    description:
      "Get in touch for AI/ML projects, freelance work, or job inquiries",
    url: "https://madhusudhanbyru.vercel.app/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Madhusudhan Byru",
    description:
      "Get in touch for AI/ML projects, freelance work, or job inquiries",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
