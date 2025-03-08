import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-material-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-material-dark-primary"
          >
            Get In Touch
          </motion.h2>

          <div className="max-w-lg mx-auto bg-material-dark-elevated rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-material-dark-onBg">Send Me a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-material-dark-primary/10 border border-material-dark-primary rounded-lg p-4">
                <p className="font-medium text-material-dark-primary">
                  Thank you for your message!
                </p>
                <p className="text-sm mt-1 text-material-dark-onBg/70">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-material-dark-onBg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-material-dark-surface border border-material-dark-onBg/10 focus:outline-none focus:ring-2 focus:ring-material-dark-primary text-material-dark-onBg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-material-dark-onBg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-material-dark-surface border border-material-dark-onBg/10 focus:outline-none focus:ring-2 focus:ring-material-dark-primary text-material-dark-onBg"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-material-dark-onBg">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-material-dark-surface border border-material-dark-onBg/10 focus:outline-none focus:ring-2 focus:ring-material-dark-primary text-material-dark-onBg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-material-dark-onBg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-material-dark-surface border border-material-dark-onBg/10 focus:outline-none focus:ring-2 focus:ring-material-dark-primary text-material-dark-onBg"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden font-semibold text-material-dark-onBg text-lg px-6 py-4 rounded-lg bg-material-dark-primary hover:bg-material-dark-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? 'Sending...' : <><Send className="mr-2" size={20} /> Send Message</>}
                  </span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;