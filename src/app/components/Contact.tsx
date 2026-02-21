import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Sparkles, CheckCircle2, Loader2, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

emailjs.init({ publicKey: '7Oo7Z9wv262NZuJPP' });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_g6su95i',
        'template_f3ey0jt',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'karthikeyansreekumar@gmail.com',
      link: 'mailto:karthikeyansreekumar@gmail.com',
      gradient: 'from-[#00509d] to-[#fdc500]',
      description: 'Drop me a line',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8547148937',
      link: 'tel:+15551234567',
      gradient: 'from-[#003f88] to-[#00509d]',
      description: 'Give me a call',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kerala, IN',
      link: null,
      gradient: 'from-[#00296b] to-[#003f88]',
      description: 'Come say hi',
    },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/karthikeyan-sreekumar', label: 'GitHub', gradient: 'from-gray-700 to-gray-900' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/karthikeyan-sreekumar', label: 'LinkedIn', gradient: 'from-[#00296b] to-[#00509d]' },
  ];

  const quickActions = [
    { icon: MessageCircle, text: 'Quick Chat', subtext: 'Let\'s have a casual conversation' },
    { icon: Calendar, text: 'Schedule Meeting', subtext: 'Book a time that works for you' },
    { icon: Sparkles, text: 'Start a Project', subtext: 'Let\'s build something amazing' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-azure/10 to-sunbus/10 dark:from-[#00509d]/10 dark:to-[#fdc500]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-french/10 to-azure/10 dark:from-[#003f88]/10 dark:to-[#00509d]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/20 to-sunbus/10 dark:from-[#00296b]/40 dark:to-[#fdc500]/20 text-azure dark:text-gold rounded-full text-sm mb-6 border border-sunbus/50 dark:border-[#fdc500]/30"
          >
            <Sparkles size={16} className="animate-pulse" />
            Let's Connect
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white"
          >
            Get In Touch
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
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="relative group"
                  >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                      <div className="relative flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">{info.description}</p>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className={`text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text ${info.gradient} transition-all font-medium`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-700 dark:text-gray-300 font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-azure/10 to-sunbus/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-french/10 to-azure/10 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">Send Me a Message</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and I'll get back to you as soon as possible</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      animate={{
                        scale: focusedField === 'name' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:border-azure dark:focus:border-gold focus:bg-white dark:focus:bg-gray-900 transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      animate={{
                        scale: focusedField === 'email' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:border-azure dark:focus:border-gold focus:bg-white dark:focus:bg-gray-900 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{
                      scale: focusedField === 'subject' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:border-azure dark:focus:border-gold focus:bg-white dark:focus:bg-gray-900 transition-all"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: focusedField === 'message' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:border-azure dark:focus:border-gold focus:bg-white dark:focus:bg-gray-900 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-azure to-french dark:from-sunbus dark:to-gold text-white dark:text-gray-900 rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-600 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-800 flex items-center gap-3"
                      >
                        <CheckCircle2 size={24} className="flex-shrink-0" />
                        <div>
                          <p className="font-medium">Message sent successfully!</p>
                          <p className="text-sm opacity-80">I'll get back to you as soon as possible.</p>
                        </div>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 text-red-600 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800 flex items-center gap-3"
                      >
                        <Mail size={24} className="flex-shrink-0" />
                        <div>
                          <p className="font-medium">Failed to send message</p>
                          <p className="text-sm opacity-80">Please try again or email me directly.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
