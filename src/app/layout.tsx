import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  // Basic metadata
  title: "Madhusudhan Byru",
  description: "Madhusudhan Byru",

  // Extended keywords for better SEO
  keywords: [
    // Name variations
    "Madhusudhan Byru",
    "Madhu Byru",
    "byrumadhusudhan",

    // Job titles
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Python Developer",
    "PyTorch Expert",
    "AI Engineer",

    // Technologies - ML/AI
    "Python",
    "PyTorch",
    "Scikit-learn",
    "XGBoost",
    "TensorFlow",
    "Machine Learning",
    "Deep Learning",
    "GenAI",
    "LLMs",
    "RAG",
    "LangChain",
    "OpenAI GPT",

    // Technologies - Data
    "PySpark",
    "Apache Spark",
    "SQL",
    "Snowflake",
    "PostgreSQL",
    "AWS S3",
    "Kafka",

    // Technologies - Cloud/MLOps
    "AWS",
    "MLflow",
    "Docker",
    "Kubernetes",
    "CI/CD",

    // Skills
    "Risk Analytics",
    "Credit Modeling",
    "Fraud Detection",
    "Decision Intelligence",
    "Data Science",
    "Big Data",
    "MLOps",

    // Location
    "USA Developer",
    "Remote AI Engineer",
    "Global ML Expert",

    // Services
    "Portfolio",
    "Hire AI Engineer",
    "ML Consulting",
    "AI Solutions",
  ].join(", "),

  authors: [
    {
      name: "Madhusudhan Byru",
      url: "https://madhusudhanbyru.vercel.app",
    },
  ],
  creator: "Madhusudhan Byru",
  publisher: "Madhusudhan Byru",

  // Manifest
  manifest: "/manifest.json",

  // App-specific metadata
  applicationName: "Madhusudhan Byru Portfolio",

  // OpenGraph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madhusudhanbyru.vercel.app/",
    title: "Madhusudhan Byru - AI/ML Engineer | Machine Learning Expert",
    description:
      "AI/ML Engineer specializing in production-grade ML solutions, risk analytics, fraud detection, and GenAI. Expert in Python, PyTorch, AWS, and scalable ML pipelines.",
    siteName: "Madhusudhan Byru Portfolio",
    images: [
      {
        url: "https://madhusudhanbyru.vercel.app/profile/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Madhusudhan Byru - AI/ML Engineer",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Madhusudhan Byru - AI/ML Engineer | Machine Learning Expert",
    description:
      "AI/ML Engineer with expertise in ML pipelines, GenAI, and risk analytics.",
    creator: "@madhusudhan_dev",
    images: ["https://madhusudhanbyru.vercel.app/profile/profile.jpg"],
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Base URL for relative URLs
  metadataBase: new URL("https://madhusudhanbyru.vercel.app"),

  // Canonical URL
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Madhusudhan Byru",
    alternateName: "Madhu Byru",
    url: "https://madhusudhanbyru.vercel.app",
    image: "https://madhusudhanbyru.vercel.app/profile/profile.jpg",
    sameAs: [
      "https://github.com/madhusudhanbyru",
      "https://linkedin.com/in/madhusudhanbyru",
    ],
    jobTitle: "AI/ML Engineer",
    worksFor: {
      "@type": "Organization",
      name: "State Street",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "USA",
      addressCountry: "US",
    },
    email: "byrumadhusudhan@gmail.com",
    telephone: "+919390032400",
    knowsAbout: [
      "AI/ML Engineering",
      "Machine Learning",
      "Python",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "Deep Learning",
      "GenAI",
      "LLMs",
      "RAG",
      "LangChain",
      "Risk Analytics",
      "Fraud Detection",
      "Credit Modeling",
      "PySpark",
      "AWS",
      "Snowflake",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Missouri University of Science and Technology",
    },
  };

  return (
    <html lang="en" className={montserrat.className}>
      <head>
        {/* Favicons */}
        <link
          rel="shortcut icon"
          href="/profile/icon.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/profile/icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/profile/icon.png"
        />
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Madhusudhan Portfolio"
        />
      </head>
      <body>
        {/* Only use client components inside the body, not at the top level */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
