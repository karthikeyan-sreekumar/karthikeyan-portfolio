import { ExternalLink, Github, Star, TreePine } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
  badge: string;
  badgeIcon: LucideIcon;
  gradient: string;
  stats?: { label: string; value: string }[];
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Violin Dendrochronology Analysis Platform',
      category: 'Freelance · 2024',
      description:
        'An interactive image-plotting interface built with Next.js that lets users mark points along tree-ring lines in uploaded violin images for dendrochronological analysis, supporting precise measurement and visualization of ring patterns.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Canvas'],
      badge: 'Freelance',
      badgeIcon: TreePine,
      gradient: 'from-[#00296b] to-[#003f88]',
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
            Selected Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white"
          >
            Projects
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
            Production applications and developer tooling I've built and shipped
          </motion.p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const BadgeIcon = project.badgeIcon;
            const isEven = index % 2 === 0;
            const hasMedia = Boolean(project.image);

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
              >
                {/* Media Section */}
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

                    <div className="relative aspect-video overflow-hidden">
                      {hasMedia ? (
                        <>
                          <ImageWithFallback
                            src={project.image!}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        </>
                      ) : (
                        /* Gradient placeholder with monogram when there's no screenshot */
                        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                          <BadgeIcon size={72} className="text-white/90 relative z-10" />
                        </div>
                      )}

                      {/* Stats Overlay */}
                      {project.stats && project.stats.length > 0 && (
                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                          {project.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg"
                            >
                              <span className="text-xs font-bold text-azure dark:text-gold">{stat.value}</span>
                              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
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
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 text-azure dark:text-gold font-medium rounded-lg text-sm border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-lg transition-all backdrop-blur-sm bg-sunbus/10 dark:bg-[#fdc500]/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  {(project.github || project.live) && (
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="flex gap-4 pt-4"
                    >
                      {project.github && (
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
                      )}

                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-azure dark:hover:border-gold hover:text-azure dark:hover:text-gold transition-all backdrop-blur-sm"
                        >
                          <ExternalLink size={20} />
                          <span className="font-medium">{project.liveLabel ?? 'Live Demo'}</span>
                        </motion.a>
                      )}
                    </motion.div>
                  )}
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
            href="https://github.com/karthikeyan-sreekumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all group"
          >
            <span className="font-medium">View More on GitHub</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
