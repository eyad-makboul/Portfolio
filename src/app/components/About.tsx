import { motion } from "motion/react";
import { Code2, Database, Palette, Rocket } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Database,
    title: "Full Stack",
    description: "Expertise in both frontend and backend technologies",
  },
  {
    icon: Palette,
    title: "UI/UX Focused",
    description: "Creating beautiful and intuitive user experiences",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast and optimized applications",
  },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl">
                <ImageWithFallback
                  src="/Public2.jpeg"
                  alt="About Me"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <span className="text-blue-600 dark:text-blue-400">Full Stack Developer</span> specialized in building modern web applications.
                I have extensive experience working with various Frontend and Backend technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I love technical challenges and constantly strive to learn new technologies and improve my skills.
                I believe in writing clean, maintainable code and following best practices in software development.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My passion is transforming ideas into digital products that solve real problems and provide
                an <span className="text-purple-600 dark:text-purple-400">amazing user experience</span>.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
