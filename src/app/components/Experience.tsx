import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { useInView } from "./hooks/useInView";

const experienceData = [
  {
    title: "Software Engineer & Administrative Officer (Reserve Officer)",
    company: "Egyptian Air Force",
    period: "Oct 2024-Apr 2026",
    description: "(1st Phase):\nDeveloped secure internal web applications using Full-Stack technologies to streamline departmental workflows.\n (2nd Phase):\n Transitioned to an administrative role, overseeing daily operation.\n Analyzed data to support strategic decision-making processes.\n Managed documentation and coordinated between different departments to ensure mission success.",    achievements: [
      "Improved application performance",
      "Led a team of developers",
    ],
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Digital Solutions Company",
  //   period: "2021 - 2023",
  //   description: "Developing and maintaining web applications using MERN Stack",
  //   achievements: [
  //     "Built 10+ successful projects",
  //     "Developed REST APIs",
  //     "Improved user experience",
  //   ],
  // },
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-1">{exp.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 whitespace-pre-line">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
