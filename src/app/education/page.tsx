import Education from "@/pages/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Education - Madhusudhan Byru | Master's in Information Science and Technology at Missouri University of Science and Technology",
  description:
    "Educational background of Madhusudhan Byru: Master's in Information Science and Technology at Missouri University of Science and Technology. Academic foundation in AI/ML, data science, and software engineering.",
  keywords:
    "Education, Master's Information Science, Engineering Degree, Missouri University of Science and Technology, Academic Background, AI/ML Education, Data Science Education, Software Engineering Education, Madhusudhan Byru Education",
  openGraph: {
    title:
      "Education - Madhusudhan Byru | Master's in Information Science and Technology",
    description:
      "Educational background and academic journey of Madhusudhan Byru in AI/ML and data science",
    url: "https://madhusudhanbyru.vercel.app/education",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Education - Madhusudhan Byru | Master's in Information Science and Technology",
    description:
      "Educational background and academic journey of Madhusudhan Byru",
  },
  alternates: {
    canonical: "/education",
  },
};

export default function EducationPage() {
  return <Education />;
}
