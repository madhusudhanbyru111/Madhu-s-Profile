"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  FileText,
  ExternalLink,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import Image from "next/image";

const Education = () => {
  const educationData = [
    {
      school: "Missouri University of Science and Technology",
      location: "Rolla, Missouri, USA",
      duration: "2023 - 2025",
      degree: "Master's Degree in Information Science and Technology",
      CGPA: "3.6/4.0",
      image: "/education/college_img.jpg",
      resultUrl: "/education/Degree.pdf",
      coursework: ["DSA", "OOPs", "DBMS", "AI", "ML", "OS", "Networking"],
      description:
        "This program has provided me with advanced knowledge and skills in various areas of information science, including data structures and algorithms, object-oriented programming, database management systems, artificial intelligence, machine learning, operating systems, and networking. I have had the opportunity to work on challenging projects and collaborate with talented peers, further enhancing my understanding of the field and preparing me for a successful career in technology.",
    },
    {
      school: "Mvsr Engineering College, Osmania University Affiliated",
      location: "Hyderabad, India",
      duration: "2018 - 2022",
      degree: "Bachelor's Degree in Engineering",
      CGPA: "7.6/10",
      image: "/education/school_img.jpg",
      subjects: [
        "Mathematics",
        "Engineering Physics",
        "Engineering Chemistry",
        "Computer Science",
        "Electronics",
        "Electrical",
      ],
      description:
        "I gained a solid understanding of core engineering principles and developed strong problem-solving skills. The curriculum covered a wide range of subjects, including mathematics, physics, chemistry, computer science, electronics, and electrical engineering. This comprehensive education provided me with a well-rounded foundation in engineering concepts and prepared me for advanced studies in the field.",
    },
    // Srinidhi Junior College - 1st instance
    {
      school: "Srinidhi Junior College",
      location: "India",
      duration: "2016 - 2018",
      degree: "Higher Secondary Education",
      CGPA: "91.6%",
      image: "/education/BIE.jpg",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      description:
        "Completed 12th grade with a strong focus on Mathematics, Physics, and Chemistry. Achieved a high percentage, reflecting consistent academic performance and a solid foundation for further studies.",
    },
    {
      school: "Oxford High School",
      location: "India",
      duration: "2015 - 2016",
      degree: "School Education",
      CGPA: "9.3/10",
      image: "/education/BSET.jpg",
      description:
        "Completed 10th grade with a strong focus on core subjects. Achieved a high percentage, reflecting consistent academic performance and a solid foundation for further studies.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-2 sm:px-4 max-w-2xl sm:max-w-6xl mx-auto pb-12 sm:pb-20 w-full">
      <ScrollAnimation>
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={edu.school}>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-xl overflow-hidden transition-all"
            >
              {/* Year badge moved to info column heading row */}

              <div className="grid md:grid-cols-[300px,1fr] gap-6">
                {/* Left Column - Image only */}
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    width: 300,
                    height: 300,
                  }}
                >
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    quality={90}
                  />
                </div>

                {/* Right Column - All Info */}
                <div className="p-6 flex flex-col gap-2 justify-center bg-gray-900/80 rounded-xl">
                  <div className="flex items-start justify-between w-full mb-1">
                    <div>
                      <h3 className="text-2xl font-extrabold text-gray-100">
                        {edu.school}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 font-semibold">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-300 font-bold">
                        <Award className="w-4 h-4" />
                        <span>{edu.CGPA}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded ml-2 mt-1 text-xl font-medium text-gray-300 whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300 mb-6">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </div>
                  {edu.coursework && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {edu.subjects && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {edu.resultUrl &&
                    edu.degree.toLowerCase().includes("master") && (
                      <motion.a
                        href={edu.resultUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                      >
                        View Result
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;
