import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const toolsData = [
  { name: "VS Code", category: "Editor" },
  { name: "Git", category: "Version Control" },
  { name: "Docker", category: "DevOps" },
  { name: "Postman", category: "API Testing" },
  { name: "Figma", category: "Design" },
  { name: "Chrome DevTools", category: "Debugging" },
  { name: "MongoDB Compass", category: "Database" },
  { name: "GitHub", category: "Collaboration" },
];

export function Tools() {
  const { ref, inView } = useInView();

  return (
    <section id="tools" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tools & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toolsData.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl mb-2 text-center">{tool.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
