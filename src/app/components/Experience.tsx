import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full-Stack Engineer',
      company: 'Actiotech LLP',
      period: '2024 - Present',
      description: 'Frontend-focused full-stack engineer working on Atlassian Marketplace products at scale.',
      achievements: [
        'Design and build production-grade Atlassian Marketplace apps using React, TypeScript, Forge & Connect',
        'Own frontend architecture for complex dashboards and analytics-heavy workflows',
        'Work closely with product, design, and backend teams to deliver end-to-end features',
        'Drive performance, maintainability, and developer experience improvements',
        'Mentor engineers through code reviews, architectural guidance, and best practices',
      ],
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Actiotech LLP',
      period: '2021 - 2024',
      description: 'Built and scaled frontend systems for SaaS products in the Atlassian ecosystem.',
      achievements: [
        'Led development of multiple React applications from inception to production',
        'Implemented scalable UI patterns focused on long-term maintainability',
        'Collaborated with backend teams on API design and integration',
        'Improved frontend reliability through refactoring and performance optimizations',
        'Actively mentored junior developers and supported team growth',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      company: 'Govt. Model Engineering College',
      period: '2017 - 2021',
      description: 'Focused on web development and software engineering principles.',
      achievements: [
        'CGPA: 8.1/10',
        'Design Team for Excel 2020',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white">Experience & Education</h2>
          <div className="w-20 h-1 bg-azure dark:bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-gray-950 border-4 border-azure dark:border-gold rounded-full flex items-center justify-center z-10">
                  {exp.type === 'work' ? (
                    <Briefcase className="text-azure dark:text-gold" size={24} />
                  ) : (
                    <GraduationCap className="text-azure dark:text-gold" size={24} />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-sm text-azure dark:text-gold mb-2">{exp.period}</div>
                    <h3 className="text-xl mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="text-gray-600 dark:text-gray-400 mb-3">{exp.company}</div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-azure dark:text-gold mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
