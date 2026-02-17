import { Code, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my priority',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Focus',
      description: 'Creating beautiful and intuitive user experiences',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Building fast and optimized web applications',
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively with designers and backend teams',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">
              Full-Stack Engineer with a Frontend Focus
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I’m a full-stack software engineer with 4+ years of experience building 
              production-grade web applications. I specialize in creating scalable, 
              high-performance interfaces where thoughtful frontend architecture and 
              user experience make a real impact.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I enjoy simplifying complex problems through clean UI design, collaborating 
              closely with teams, and taking ownership from technical decisions to mentoring. 
              Driven by curiosity, I continuously learn and refine my approach to system 
              design and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[120px] text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="flex-1 min-w-[120px] text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
              </div>
              {/* <div className="flex-1 min-w-[120px] text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">30+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</div>
              </div> */}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}