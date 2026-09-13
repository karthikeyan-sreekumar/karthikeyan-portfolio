import { Mic, Play, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// ─── Talk details ────────────────────────────────────────────────
// TODO: replace the placeholder URLs / image with the real assets.
const talk = {
  event: "Atlas Camp '26 · Bengaluru",
  title: 'The Forge Journey: A Data Center-to-Forge Roadmap',
  blurb: 'Co-presented to 100+ attendees',
  photo: `${import.meta.env.BASE_URL}atlascamp.png`,
  recordingUrl: 'https://www.youtube.com/watch?v=_XhOM2APB2w',
  slidesUrl: `${import.meta.env.BASE_URL}atlascamp-slides.pdf`,
};
// ─────────────────────────────────────────────────────────────────

export default function SpeakingBanner() {
  return (
    <section id="speaking" className="px-4 sm:px-6 lg:px-8 py-10 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl border border-sunbus/40 dark:border-[#fdc500]/20 bg-gradient-to-r from-gold/15 via-sunbus/10 to-azure/10 dark:from-[#00296b]/40 dark:via-[#003f88]/20 dark:to-[#00509d]/10 shadow-sm">
          {/* Subtle grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,80,157,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,80,157,0.04)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6 p-6 sm:p-8">
            {/* Photo */}
            {talk.photo && (
              <div className="flex-shrink-0">
                <div className="w-full md:w-40 lg:w-48 aspect-video md:aspect-square overflow-hidden rounded-xl border-4 border-white dark:border-gray-800 shadow-lg">
                  <ImageWithFallback
                    src={talk.photo}
                    alt={`${talk.title} at ${talk.event}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 bg-azure/10 dark:bg-gold/10 text-azure dark:text-gold rounded-full text-xs font-medium">
                <Mic size={14} />
                Speaking
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                {talk.title}
              </h3>
              <p className="text-azure dark:text-gold font-medium text-sm mt-1">{talk.event}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{talk.blurb}</p>
            </div>

            {/* Actions */}
            {(talk.recordingUrl || talk.slidesUrl) && (
              <div className="flex flex-wrap gap-3 md:flex-col lg:flex-row md:items-stretch">
                {talk.recordingUrl && (
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href={talk.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-azure to-french dark:from-sunbus dark:to-gold text-white dark:text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all font-medium text-sm"
                  >
                    <Play size={16} className="fill-current" />
                    Watch
                  </motion.a>
                )}
                {talk.slidesUrl && (
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href={talk.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-azure dark:hover:border-gold hover:text-azure dark:hover:text-gold transition-all font-medium text-sm"
                  >
                    <FileText size={16} />
                    Slides
                  </motion.a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
