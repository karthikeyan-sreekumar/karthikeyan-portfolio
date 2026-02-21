import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import { useRef } from 'react';

// Technology Logo SVG Components
function ReactLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <ellipse cx="12" cy="12" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
    </svg>
  );
}

function TypeScriptLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
      <text x="12" y="17" fontSize="14" fontWeight="bold" fill="currentColor" textAnchor="middle">TS</text>
    </svg>
  );
}

function JavaScriptLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
      <text x="12" y="17" fontSize="14" fontWeight="bold" fill="currentColor" textAnchor="middle">JS</text>
    </svg>
  );
}

function NextJSLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 7L9 17M14 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.67 11.81 9.23 12.41 9.84C13.46 10.91 14.67 12.17 17 12.17C19.67 12.17 21.33 10.84 22 8.17C21 9.5 19.83 10 18.5 9.67C17.74 9.5 17.19 8.94 16.59 8.33C15.54 7.26 14.33 6 12 6ZM7 12.17C4.33 12.17 2.67 13.5 2 16.17C3 14.84 4.17 14.34 5.5 14.67C6.26 14.84 6.81 15.4 7.41 16.01C8.46 17.08 9.67 18.34 12 18.34C14.67 18.34 16.33 17.01 17 14.34C16 15.67 14.83 16.17 13.5 15.84C12.74 15.67 12.19 15.11 11.59 14.5C10.54 13.43 9.33 12.17 7 12.17Z" fill="currentColor" />
    </svg>
  );
}

function HTMLLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7 8H17L16 15L12 16.5L8 15L7.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function CSSLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function GitLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M21.5 11.5L12.5 2.5L11.5 3.5L13 5L11 7L13 9L11 11L9 9L7 11L9 13L7 15L5 13L3.5 14.5L12.5 23.5L21.5 14.5L20 13L18 15L16 13L18 11L16 9L18 7L16 5L17.5 3.5L21.5 11.5Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="15" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="6" y="3" width="6" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="6" y="9" width="6" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="6" y="15" width="6" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ViteLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M20 4L12 20L4 4L12 8L20 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M12 8L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ReduxLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" />
      <circle cx="16" cy="9" r="1.5" fill="currentColor" />
      <circle cx="14" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function SassLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 8V6C8 5 9 4 10 4H14C15 4 16 5 16 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function JestLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="15" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7 18C7 16 5 14 5 12C5 8 8 5 12 5C16 5 19 8 19 12C19 14 17 16 17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WebpackLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M12 3V12M12 21V12M12 12L4 8M12 12L20 8M12 12L4 16M12 12L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FramerLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M6 3H18L12 9H18L6 21V15H12L6 9V3Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M12 12L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GraphQLLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="5" r="1.5" fill="currentColor" />
      <circle cx="19" cy="9" r="1.5" fill="currentColor" />
      <circle cx="19" cy="15" r="1.5" fill="currentColor" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" />
      <circle cx="5" cy="15" r="1.5" fill="currentColor" />
      <circle cx="5" cy="9" r="1.5" fill="currentColor" />
      <path d="M12 5L19 9M19 9L19 15M19 15L12 19M12 19L5 15M5 15L5 9M5 9L12 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Skills() {
  const technologies = [
    { name: 'React', icon: ReactLogo, color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', icon: TypeScriptLogo, color: 'from-blue-600 to-blue-700' },
    { name: 'JavaScript', icon: JavaScriptLogo, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Next.js', icon: NextJSLogo, color: 'from-gray-800 to-gray-900' },
    { name: 'Tailwind CSS', icon: TailwindLogo, color: 'from-cyan-400 to-cyan-600' },
    { name: 'HTML5', icon: HTMLLogo, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS3', icon: CSSLogo, color: 'from-blue-500 to-blue-600' },
    { name: 'Git', icon: GitLogo, color: 'from-orange-600 to-red-600' },
    { name: 'Figma', icon: FigmaLogo, color: 'from-purple-500 to-pink-500' },
    { name: 'Vite', icon: ViteLogo, color: 'from-purple-600 to-yellow-500' },
    { name: 'Redux', icon: ReduxLogo, color: 'from-purple-600 to-purple-700' },
    { name: 'Sass', icon: SassLogo, color: 'from-pink-500 to-pink-600' },
    { name: 'Jest', icon: JestLogo, color: 'from-red-600 to-red-700' },
    { name: 'Webpack', icon: WebpackLogo, color: 'from-blue-400 to-blue-600' },
    { name: 'Framer Motion', icon: FramerLogo, color: 'from-pink-500 to-rose-500' },
    { name: 'Node.js', icon: NodeLogo, color: 'from-green-600 to-green-700' },
    { name: 'GraphQL', icon: GraphQLLogo, color: 'from-pink-600 to-purple-600' },
  ];

  // Duplicate the array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  // Card width (144px = w-36) + gap (24px = gap-6)
  const CARD_WIDTH = 144 + 24;
  const TOTAL_WIDTH = CARD_WIDTH * technologies.length;

  function InfiniteTrack({ speed = 0.5 }: { speed?: number }) {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isHovered = useRef(false);

    useAnimationFrame((_, delta) => {
      if (isHovered.current) return;
      let current = x.get();
      current -= speed * (delta / 16);
      if (Math.abs(current) >= TOTAL_WIDTH) {
        current = 0;
      }
      x.set(current);
    });

    const xTransform = useTransform(x, (val) => `${val}px`);

    return (
      <div
        className="relative mb-8 overflow-x-hidden py-4"
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        <motion.div
          ref={containerRef}
          className="flex gap-6 will-change-transform"
          style={{ x: xTransform }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 group"
            >
              <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative w-12 h-12 mx-auto mb-3 text-gray-700 dark:text-gray-300 group-hover:text-azure dark:group-hover:text-gold transition-all duration-300">
                  <tech.icon />
                </div>
                <p className="text-center text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-azure group-hover:to-french dark:group-hover:from-gold dark:group-hover:to-sunbus transition-all duration-300">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white"
          >
            Skills & Technologies
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
            Technologies and tools I use to craft exceptional web experiences
          </motion.p>
        </div>

        <InfiniteTrack />


      </div>
    </section>
  );
}
