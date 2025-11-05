'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/Card';
import { ContactForm } from '@/components/ui/contact';
import { trackEvent } from '@/lib/ga';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-neon-cyan'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: `${personalInfo.location.city}, ${personalInfo.location.country}`,
      href: 'https://maps.app.goo.gl/KfeaABmzxtQvBKbd9',
      color: 'text-neon-cyan'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: socialLinks.find(link => link.platform === 'LinkedIn')?.url || '#',
      color: 'text-neon-cyan'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-linear-to-b from-navy-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Talk</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:border-neon-cyan/50 transition-all duration-300 group cursor-pointer">
                    <CardContent className="py-8 px-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <a
                            className={`${info.color} hover:underline transition-colors`}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent({ action: 'contact_info_click', category: 'engagement', label: info.title })}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}