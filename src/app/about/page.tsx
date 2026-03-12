import About from "@/pages/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Madhusudhan Byru - AI/ML Engineer | Machine Learning Expert",
  description:
    "AI/ML Engineer with 3+ years of experience designing, developing, and deploying production-grade machine learning and GenAI solutions across risk analytics, credit modeling, fraud detection, and decision intelligence use cases.",
  keywords:
    "About Madhusudhan Byru, AI/ML Engineer Bio, Machine Learning Engineer, Software Engineer USA, Data Scientist India, Python Expert, ML Engineer, Risk Analytics, Credit Modeling, Fraud Detection, GenAI Solutions",
  openGraph: {
    title: "About Madhusudhan Byru - AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in machine learning, GenAI, and risk analytics",
    url: "https://madhusudhanbyru.vercel.app/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Madhusudhan Byru - AI/ML Engineer",
    description:
      "AI/ML Engineer with expertise in ML pipelines and GenAI solutions",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}
