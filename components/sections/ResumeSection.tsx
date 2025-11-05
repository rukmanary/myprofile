'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education, certifications } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TechStack } from '@/components/ui/resume';
import { trackEvent } from '@/lib/ga';

export function ResumeSection() {

  return (
    <section id="resume" className="py-24 bg-linear-to-b from-black to-navy-dark">
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
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional experience, education, and technical skills
          </p>
          <Button
            variant="neon"
            size="lg"
            onClick={() => {
              trackEvent({ action: 'resume_download', category: 'engagement', label: 'resume_section' });
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Ryandhika-Rukmana-Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full Resume
          </Button>
        </motion.div>

        {/* Tech Stack */}
        <TechStack />

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-neon-cyan mr-3" />
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-neon-cyan to-neon-purple" />
                    <CardContent className="p-6 pl-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-white">{exp.position}</h4>
                        <div className="flex items-center text-neon-cyan text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-300 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      <div className="text-gray-300 mb-4">
                        {exp.description.map((desc, i) => (
                          <p key={i} className="mb-2">• {desc}</p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-navy-light text-neon-cyan rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-neon-purple mr-3" />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-neon-purple to-neon-cyan" />
                    <CardContent className="p-6 pl-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                        <div className="flex items-center text-neon-purple text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-300 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>

                      {edu.description && (
                        <p className="text-gray-300">{edu.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-neon-cyan mr-2" />
                Certifications
              </h4>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between p-4 bg-navy/30 rounded-lg border border-navy-light">
                    <div className="flex flex-col">
                      <span className="text-white">{cert.name}</span>
                      <span className="text-gray-400 text-sm">{cert.issuer}</span>
                    </div>
                    <span className="text-neon-cyan text-sm">{cert.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}