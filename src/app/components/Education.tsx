import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { useInView } from "./hooks/useInView";

const educationData = [
  {
    degree: "Bachelor of Electrical Engineering",
    institution: "Capital University",
    year: "2018 - 2023",
  },
 /* {
    degree: "Web Development Diploma",
    institution: "Technology Institute",
    year: "2022",
    description: "Intensive training in modern web technologies",
  }*/
];

export function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{edu.year}</p>
                  {/* <p className="text-gray-700 dark:text-gray-300">{edu.description}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
