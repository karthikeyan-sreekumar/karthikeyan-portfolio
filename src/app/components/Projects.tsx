import { ExternalLink, Github, Star, TrendingUp, Award, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A modern e-commerce platform built with React and TypeScript. Features include product filtering, shopping cart, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcxMDk4NzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      badge: 'Featured',
      badgeIcon: Star,
      gradient: 'from-[#00509d] to-[#fdc500]',
      stats: { users: '10K+', rating: '4.8' },
    },
    {
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'A comprehensive analytics dashboard with real-time data visualization, charts, and reporting features for business insights.',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMDM0MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js', 'React', 'Recharts', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      badge: 'Trending',
      badgeIcon: TrendingUp,
      gradient: 'from-[#003f88] to-[#00509d]',
      stats: { users: '5K+', rating: '4.9' },
    },
    {
      title: 'Task Management App',
      category: 'Productivity',
      description: 'A productivity app for managing tasks and projects with drag-and-drop functionality and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzEwNjY5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'TypeScript', 'DND Kit', 'Firebase'],
      github: 'https://github.com',
      live: 'https://example.com',
      badge: 'Award Winner',
      badgeIcon: Award,
      gradient: 'from-[#00296b] to-[#003f88]',
      stats: { users: '8K+', rating: '4.7' },
    },
    {
      title: 'Mobile Banking App',
      category: 'FinTech',
      description: 'A responsive banking application with account management, transaction history, and money transfer capabilities.',
      image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcxMTM3NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Node.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      badge: 'Most Popular',
      badgeIcon: Zap,
      gradient: 'from-[#fdc500] to-[#ffd500]',
      stats: { users: '15K+', rating: '5.0' },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-azure/5 dark:bg-[#00509d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-french/5 dark:bg-[#003f88]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/20 to-sunbus/10 dark:from-[#00296b]/40 dark:to-[#fdc500]/20 text-azure dark:text-gold rounded-full text-sm mb-6 border border-sunbus/50 dark:border-[#fdc500]/30"
          >
            <Star size={16} className="fill-current" />
            Featured Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-azure to-french dark:from-gold dark:to-sunbus mx-auto mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore my latest work showcasing cutting-edge technologies and creative solutions
          </motion.p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const BadgeIcon = project.badgeIcon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    {/* Badge */}
                    <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} z-20`}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium shadow-lg backdrop-blur-sm`}
                      >
                        <BadgeIcon size={14} />
                        {project.badge}
                      </motion.div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />

                      {/* Animated Border */}
                      <motion.div
                        className={`absolute inset-0 border-2 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        style={{ padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}
                      />

                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg">
                          <svg className="w-4 h-4 text-azure" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                          <span className="text-xs font-medium text-gray-900 dark:text-white">{project.stats.users}</span>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg">
                          <Star size={14} className="text-gold fill-gold" />
                          <span className="text-xs font-medium text-gray-900 dark:text-white">{project.stats.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Dots Decoration */}
                    <div className={`absolute ${isEven ? '-right-8' : '-left-8'} top-1/2 transform -translate-y-1/2 hidden lg:block`}>
                      <div className="grid grid-cols-3 gap-2 opacity-20">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient}`}
                            animate={{
                              scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium mb-3"
                    >
                      {project.category}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl sm:text-3xl lg:text-4xl mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-azure group-hover:to-french dark:group-hover:from-gold dark:group-hover:to-sunbus transition-all duration-300"
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 dark:text-gray-400 leading-relaxed text-base lg:text-lg"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 text-azure dark:text-gold font-medium rounded-lg text-sm border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-lg transition-all backdrop-blur-sm bg-sunbus/10 dark:bg-[#fdc500]/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-4 pt-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg shadow-lg hover:shadow-xl transition-all`}
                    >
                      <Github size={20} />
                      <span className="font-medium">View Code</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-azure dark:hover:border-gold hover:text-azure dark:hover:text-gold transition-all backdrop-blur-sm"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all group"
          >
            <span className="font-medium">View All Projects on GitHub</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
