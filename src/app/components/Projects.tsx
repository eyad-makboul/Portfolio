import { motion } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";
import { useInView } from "./hooks/useInView";

const projectsData = [
  {
    title: "GPA-Calculator",
    description: "A simple, user-friendly web to help students calculate their Grade Point Average (GPA)",
    technologies: ["HTML", "CSS", "J.S"],
    image: "GPA.png",
    github: "https://github.com/eyad-makboul/GPA-Calculator",
    demo: "https://eyad-makboul.github.io/GPA-Calculator/",
    featured: true,
  },
  {
    title: "Travil",
    description: "Travil landing page responsev",
    technologies: ["HTML","CSS"],
    image: "Travil.png",
    github: "https://github.com/eyad-makboul/Travil",
    demo: "https://eyad-makboul.github.io/Travil/",
    featured: true,
  },
  {
    title: "Donut-Recipe",
    description: "A visually appealing, responsive single-page website featuring a classic Homemade Glazed Donuts recipe.",
    technologies: ["HTML", "CSS",],
    image: "Donut.png",
    github: "https://github.com/eyad-makboul/Donut-Recipe",
    demo: "https://eyad-makboul.github.io/Donut-Recipe/",
    featured: false,
  },
  // {
  //   // title: "Analytics Dashboard",
  //   // description: "Comprehensive dashboard for displaying data and statistics interactively with beautiful charts",
  //   // technologies: ["React", "D3.js", "Python", "FastAPI"],
  //   // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  //   // github: "#",
  //   // demo: "#",
  //   // featured: false,
  // },
];

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills and experience in web development
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 text-white fill-white" />
                  <span className="text-white text-sm">Featured</span>
                </div>
              )}

              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm border border-blue-200 dark:border-blue-800"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-1 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex-1 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
