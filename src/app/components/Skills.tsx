import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS","Bootstrap", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express","REST APIs", "Socket.io"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "LiteSQL", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub","Vercel", "Docker","Linux(Ubuntu)"],
  },
];

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl mb-4 text-blue-600 dark:text-blue-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
