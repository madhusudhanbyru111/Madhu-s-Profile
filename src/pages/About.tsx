"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Layout,
  Server,
  Database,
  MessageSquare,
  Lightbulb,
  Users,
  Brain,
  Cloud,
  Terminal,
  Wrench,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Italic,
} from "lucide-react";
import {
  JavaScriptLogo,
  HTML5Logo,
  CSSLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VirtualBoxLogo,
  VercelLogo,
} from "@/components/TechLogos";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "100+ LeetCode Problems",
      description: "Solved DSA algorithmic challenges",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Design Patterns Expertise",
      description: "Deep understanding in Low-Level Design (LLD)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Java NPTEL Certification",
      description: "Completed certification in Java",
    },
  ];

  const interests = [
    "Artificial Intelligence & Machine Learning",
    "Generative AI & LLM Applications",
    "Backend Engineering (Java / Spring Boot)",
    "Scalable Data & ML Systems",
  ];

  // Skills data and section
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: "Python (Pandas, NumPy)" },
        { name: "SQL" },
        { name: "R" },
      ],
    },
    {
      category: "Data Processing & Big Data",
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "PySpark (Spark SQL, DataFrame API)" },
        { name: "Apache Spark" },
        { name: "Apache Kafka" },
        { name: "Apache Airflow" },
      ],
    },
    {
      category: "Machine Learning & Modeling",
      icon: <Brain className="w-6 h-6" />,
      items: [
        { name: "Scikit-learn (regression, classification)" },
        { name: "XGBoost" },
        { name: "Random Forest" },
        { name: "Logistic Regression" },
        { name: "Feature engineering" },
        { name: "Model validation" },
      ],
    },
    {
      category: "Deep Learning & GenAI / NLP",
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        { name: "PyTorch" },
        { name: "Transformer fundamentals" },
        { name: "Large Language Models (RAG, LangChain)" },
        { name: "OpenAI GPT" },
        { name: "FAISS / vector embeddings" },
        { name: "NLP preprocessing" },
      ],
    },
    {
      category: "Databases & Data Warehouses",
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "Snowflake" },
        { name: "PostgreSQL" },
        { name: "AWS S3" },
        { name: "Relational databases" },
      ],
    },
    {
      category: "Cloud Platforms & MLOps",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: "AWS (S3, EC2, Lambda, Glue)" },
        { name: "MLflow" },
        { name: "Docker" },
        { name: "CI/CD concepts (Git pipelines)" },
        { name: "Model deployment & monitoring" },
      ],
    },
    {
      category: "Visualization & Reporting",
      icon: <Layout className="w-6 h-6" />,
      items: [
        { name: "Power BI" },
        { name: "Tableau" },
        { name: "KPI dashboards" },
        { name: "Drill-down reporting" },
        { name: "Executive reporting" },
        { name: "Data storytelling for finance" },
      ],
    },
    {
      category: "Finance & Domain Tools",
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { name: "Credit Risk Scoring Systems" },
        { name: "Portfolio Risk Analytics" },
        { name: "Regulatory Compliance Analytics" },
        { name: "Charles River IMS" },
        { name: "Bloomberg Market Data" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-2 sm:px-4 max-w-3xl sm:max-w-4xl mx-auto pb-12 sm:pb-20 w-full">
      <ScrollAnimation>
        <motion.h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div>
        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-justify mx-auto">
              Hi, I’m Madhusudhan Byru. I’m an AI/ML Engineer with over three
              years of experience building and deploying machine learning and
              generative AI solutions, specifically within the financial sector.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify mx-auto">
              Currently, I’m at State Street Corporation, where I help build
              investment risk intelligence platforms. My work involves
              integrating ML models and RAG pipelines with complex financial
              datasets to make portfolio risk analysis, regulatory reviews, and
              operational processes faster and more accurate.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              Before joining State Street, I was with Persistent Systems. There,
              I focused on the digital lending space, developing ML pipelines
              for transaction monitoring and credit risk. By building real-time
              risk scoring and fraud detection models, I helped significantly
              improve decision accuracy for banking and NBFC platforms.
              <br />
              At the end of the day, my focus is on building AI systems that
              actually make it to production. Whether I'm designing scalable ML
              pipelines or working with transformer-based models, I always
              prioritize explainability, reliability, and delivering a
              measurable business impact.
            </p>
          </div>

          {/* Skills Section - Redesigned */}
          <section className="pt-6 sm:pt-10">
            <ScrollAnimation>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text">
                Technical Skills
              </h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="mb-6 sm:mb-10 max-w-xl sm:max-w-2xl text-sm sm:text-base">
                My core technical expertise, tools, and platforms for data, ML,
                and finance.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skillGroup) => (
                <ScrollAnimation key={skillGroup.category}>
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-white/10 rounded-xl shadow-md p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-white/10 rounded-md text-primary">
                        {skillGroup.icon}
                      </div>
                      <h3 className="text-base font-semibold gradient-text">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2 md:gap-3">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill.name}
                          className="bg-gray-700/40 border border-white/10 rounded-full px-3 py-1.5 text-gray-200 text-xs font-medium shadow-sm hover:bg-white/10 transition-colors"
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>

          <ScrollAnimation>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Quick Facts
              </h3>
              <ul className="list-none space-y-3">
                {[
                  <span key="work">
                    Working as an AI/ML Engineer in the financial services and
                    <br />
                    investment risk analytics domain
                  </span>,
                  <span key="masters">
                    Masters Degree at Missouri University
                    <br />
                    <i>Missouri, USA</i>
                  </span>,
                  <span key="bachelors">
                    Bachelors in Engineering
                    <br />
                    <i>Hyderabad, India</i>
                  </span>,
                ].map((fact, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mt-2" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex justify-start space-x-4">
              <Link
                href="/files/Resume/Madhu's Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </Link>
              {/* Skills button removed since skills are now part of this page */}
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <ScrollAnimation key={achievement.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-white mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
