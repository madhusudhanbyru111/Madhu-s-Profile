import Projects from "@/pages/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Madhusudhan Byru's Projects - AI/ML Portfolio | Machine Learning Solutions",
  description:
    "Explore my AI/ML projects portfolio: Investment risk intelligence platform, AI-driven risk prediction models, Explainable AI workflows, Scalable AI inference services, and ML pipelines for digital lending and fraud detection.",
  keywords:
    "Madhusudhan Byru Projects, AI/ML Portfolio, Machine Learning Projects, Risk Analytics Projects, Fraud Detection Solutions, GenAI Projects, Python Projects, ML Pipelines, Investment Risk Intelligence, Credit Modeling",
  openGraph: {
    title: "Madhusudhan Byru's Projects - AI/ML Portfolio",
    description:
      "Explore my AI/ML projects in risk analytics, fraud detection, and GenAI solutions",
    url: "https://madhusudhanbyru.vercel.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhusudhan Byru's Projects - AI/ML Portfolio",
    description:
      "Explore my AI/ML projects in risk analytics and fraud detection",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
