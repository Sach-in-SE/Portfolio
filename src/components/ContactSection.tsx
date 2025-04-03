import React, { useState } from 'react';
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'codersachin01@gmail.com',
      link: 'mailto:codersachin01@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 123-456-7890',
      link: 'tel:+911234567890'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Bareilly, Uttar Pradesh, India',
      link: 'https://maps.google.com/?q=Bareilly,UttarPradesh'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      link: 'https://github.com/Sach-in-SE',
      color: 'hover:bg-gray-800'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/username',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      link: 'https://www.instagram.com/official__luc_ky/',
      color: 'hover:bg-pink-600'
    },
    {
      icon: <Facebook size={20} />,
      label: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=100059883693246',
      color: 'hover:bg-blue-800'
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 mb-12">
            {/* Contact Information */}
            <div className="space-y-10 flex justify-center flex-col">
              <div className="bg-material-dark-elevated rounded-xl p-6 space-y-6 w-auto">
                <h3 className="text-2xl font-bold text-material-dark-onBg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 text-material-dark-onBg/70 hover:text-material-dark-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 rounded-full bg-material-dark-primary/10 flex items-center justify-center text-material-dark-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-material-dark-onBg">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-material-dark-elevated rounded-xl p-6">
                <h3 className="text-2xl font-bold text-material-dark-onBg mb-4">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 rounded-full bg-material-dark-primary/10 flex items-center justify-center text-material-dark-primary ${social.color} transition-colors duration-300`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-material-dark-elevated rounded-xl shadow-lg p-8">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;