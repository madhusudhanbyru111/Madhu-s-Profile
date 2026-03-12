import Experience from "@/pages/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Madhusudhan Byru - Work Experience | AI/ML Engineer at State Street & Persistent Systems",
  description:
    "Professional experience of Madhusudhan Byru: AI/ML Engineer at State Street USA (2025-Present) and Machine Learning Engineer at Persistent Systems INDIA (2021-2023). Expertise in ML pipelines, GenAI, risk analytics, and fraud detection.",
  keywords:
    "Madhusudhan Byru, Work Experience, AI/ML Engineer, Machine Learning Engineer, State Street USA, Persistent Systems INDIA, Risk Analytics, Credit Modeling, Fraud Detection, GenAI Solutions, ML Pipelines, Professional Journey",
  openGraph: {
    title: "Work Experience - Madhusudhan Byru",
    description:
      "My professional journey as an AI/ML Engineer at State Street and Persistent Systems",
    url: "https://madhusudhanbyru.vercel.app/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience - Madhusudhan Byru",
    description: "My professional journey as an AI/ML Engineer",
  },
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
