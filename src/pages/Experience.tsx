"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    company: "State Street USA",
    title: "AI/ML Engineer",
    period: "Feb 2025 – Present",
    location: "USA",
    description: [
      "Architected an AI-driven investment risk intelligence platform by integrating machine learning, RAG pipelines, Snowflake, Charles River IMS, and market risk datasets, reducing manual analysis effort by 42% across enterprise investment servicing workflows.",
      "Achieved 18% improvement in portfolio and counterparty risk prediction accuracy by engineering supervised learning pipelines with XGBoost, Scikit-learn, Bloomberg market data, and factor-based exposure features supporting portfolio risk assessment.",
      "Reduced regulatory review effort by 35% by delivering explainable AI workflows using LLMs, Hugging Face Transformers, FAISS vector search, and internal compliance documents, improving transparency and interpretability for risk and regulatory stakeholders.",
    ],
  },
  {
    company: "Persistent Systems",
    title: "Machine Learning Engineer",
    location: "India",
    period: "Jan 2021 – Jul 2023",
    description: [
      "Designed end-to-end machine learning pipelines for digital lending and transaction monitoring using Python, Pandas, NumPy, PySpark, SQL, LOS platforms, and core banking data, reducing manual credit and fraud review effort by 41%.",
      "Improved default and fraud prediction performance by 19% by developing ensemble and anomaly detection models with Scikit-learn, XGBoost, Isolation Forest, credit bureau features, AML indicators, and risk policy alignment.",
      "Increased loan approval and fraud response speed by 33% by enabling real-time risk scoring through Kafka, Spark Streaming, REST-based scoring services, and integration with lending, payments, and fraud monitoring systems.",
    ],
  },
  {
    company: "Missouri University of Science and Technology",
    title: "Student Teaching Lab Assistant",
    location: "USA",
    period: "Sep 2023 – Dec 2024",
    description: [
      "Assisted students in understanding and applying core concepts of C++ programming, from fundamentals to object-oriented design, troubleshooting and debugging code, and ensuring grasp of essential concepts.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-14 sm:pt-20 px-2 sm:px-4 w-full pb-10 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 sm:mb-12 gradient-text flex items-center gap-2 sm:gap-3">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-6 sm:space-y-12 w-full sm:w-3/4 mx-auto">
        {experiences.map((exp, index) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 w-full sm:w-3/4 mx-auto">
              <div className="p-4 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                    >
                      <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* View Certificate button removed */}
              </div>

              {/* Image removed */}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
