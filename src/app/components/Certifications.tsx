import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const certifications = [
  {
    title: 'Advanced React',
    issuer: 'Meta',
    date: 'Issued Jan 2026',
    credentialId: 'WNB95WZ7R7DY',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/WNB95WZ7R7DY',
  },
  {
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: 'Issued May 2026',
    credentialId: '9rg62dv3vhte',
    verifyUrl: 'https://verify.skilljar.com/c/9rg62dv3vhte',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-azure dark:bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional credentials and accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.credentialId}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-azure dark:hover:border-gold"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-azure/10 dark:bg-gold/10 text-azure dark:text-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-gray-400 group-hover:text-azure dark:group-hover:text-gold transition-colors flex-shrink-0"
                    />
                  </div>
                  <p className="text-azure dark:text-gold font-medium text-sm mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {cert.date}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-2 font-mono">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
