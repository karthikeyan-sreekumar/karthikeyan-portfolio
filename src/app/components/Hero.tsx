import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles configuration
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/30 dark:bg-blue-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm mb-6 border border-blue-200/50 dark:border-blue-800/50"
            >
              <Sparkles size={16} className="animate-pulse" />
              Frontend Developer
              <Code2 size={16} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6"
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <br />
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Karthikeyan 
                </span>
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft beautiful, responsive web experiences with modern technologies. 
              Passionate about clean code, pixel-perfect designs, and creating intuitive user interfaces.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get In Touch
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors backdrop-blur-sm"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/karthikeyan-sreekumar', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/karthikeyan-sreekumar', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:karthikeyansreekumar@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all text-gray-700 dark:text-gray-300 shadow-md"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image Section with Creative Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              {/* Floating Code Elements */}
              <motion.div
                className="absolute -top-8 -left-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 border border-gray-200 dark:border-gray-700"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, 0, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                }}
              >
                <code className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                  {'<div className="creative" />'}
                </code>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 border border-gray-200 dark:border-gray-700"
                animate={{
                  y: [0, 10, 0],
                  rotate: [5, 0, 5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{
                  x: mousePosition.x * -0.3,
                  y: mousePosition.y * -0.3,
                }}
              >
                <code className="text-xs text-purple-600 dark:text-purple-400 font-mono">
                  {'const build = () => magic'}
                </code>
              </motion.div>

              {/* Main Image Container with Modern Shape */}
              <motion.div
                className="relative aspect-square"
                style={{
                  x: mousePosition.x * 0.02,
                  y: mousePosition.y * 0.02,
                }}
              >
                {/* Animated Blob Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20"
                  animate={{
                    borderRadius: [
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                      '30% 60% 70% 40% / 50% 60% 30% 60%',
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image with Organic Shape Mask */}
                <motion.div
                  className="relative w-full h-full overflow-hidden"
                  animate={{
                    borderRadius: [
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                      '30% 60% 70% 40% / 50% 60% 30% 60%',
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ImageWithFallback
                    src={`${import.meta.env.BASE_URL}profile-picture.jpg`}
                    alt="Karthikeyan Sreekumar"
                    className="w-full h-full object-cover scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent dark:from-blue-900/40 dark:to-transparent" />
                </motion.div>

                {/* Decorative Ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-blue-400/50 dark:border-blue-600/30"
                  animate={{
                    borderRadius: [
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                      '30% 60% 70% 40% / 50% 60% 30% 60%',
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                    ],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Decorative Dots */}
              <div className="absolute top-1/4 -right-4 w-20 h-20 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-blue-400/40 dark:bg-blue-600/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <ArrowDown size={24} className="text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  );
}
