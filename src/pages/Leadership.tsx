import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

import ajayPhoto from '@/assets/leadership/ajay.png';
import ramSevakPhoto from '@/assets/leadership/ram-sevak.png';
import priyanshuPhoto from '@/assets/leadership/priyanshu.png';
import vishalPhoto from '@/assets/leadership/vishal.png';
import ritikaPhoto from '@/assets/leadership/ritika.png';

const leaders = [
  {
    name: 'Mr. Ajay Kumar Pathak',
    role: 'Chief Managing Director',
    photo: ajayPhoto,
    photoFit: 'cover',
    photoObjectPosition: 'object-center',
    description: 'Leads the organization with a focus on risk management, KYC assignments, due diligence, prudential checks, and background verification operations.',
    expertise: ['Risk Management', 'KYC / Due Diligence', 'Background Verification'],
  },
  {
    name: 'Mr. Ram Sevak Shukla',
    role: 'Director',
    photo: ramSevakPhoto,
    photoFit: 'contain',
    photoObjectPosition: 'object-top',
    description: 'B.Tech (Civil) and extensive experience in engineering leadership roles, supporting governance and operational discipline.',
    expertise: ['Leadership', 'Property Valuation', 'Governance'],
  },
  {
    name: 'Mr. Priyanshu Dubey',
    role: 'Director',
    photo: priyanshuPhoto,
    photoFit: 'cover',
    photoObjectPosition: 'object-center',
    description: 'Supports leadership and delivery with experience in risk management and verification operations.',
    expertise: ['Risk Management', 'Verification Ops', 'Execution'],
  },
  {
    name: 'Mr. Vishal Pandey',
    role: 'CTO / IT Head',
    photo: vishalPhoto,
    photoFit: 'contain',
    photoObjectPosition: 'object-top',
    description: 'Leads IT systems and reporting infrastructure supporting field operations — including mobile application workflows, map-enabled tracking support, and secure server practices.',
    expertise: ['IT Infrastructure', 'Mobile App Reporting', 'Secure Systems'],
  },
  {
    name: 'Ritika Thakur',
    role: 'Operation Head',
    photo: ritikaPhoto,
    photoFit: 'cover',
    photoObjectPosition: 'object-center',
    description: 'Leads office operations and execution support for risk management and verification delivery.',
    expertise: ['Office Operations', 'Execution Support', 'Quality Reporting'],
  },
];

const Leadership = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our{' '}
              <span className="gradient-text">Leadership Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experienced professionals driving excellence in verification operations and IT-enabled reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card-hover p-8 h-full">
                  {/* Profile Placeholder */}
                  <div className="flex items-start gap-6 mb-6">
                    {leader.photo ? (
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-secondary"
                      >
                        <img
                          src={leader.photo}
                          alt={leader.name}
                          loading="lazy"
                          className={`w-full h-full ${leader.photoFit === 'contain' ? 'object-contain' : 'object-cover'} ${leader.photoObjectPosition}`}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-sky flex items-center justify-center flex-shrink-0 text-white text-3xl font-bold"
                      >
                        {leader.name.split(' ').slice(-1)[0].charAt(0)}
                      </motion.div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-primary font-medium">{leader.role}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {leader.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leader.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-foreground text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Philosophy</h2>
            <p className="text-white/60">
              Our leadership team is committed to building a company that sets standards for integrity, reliability, and client success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Client-First Service', description: 'Every decision is made around outcomes, turnaround time, and measurable value.' },
              { title: 'Continuous Improvement', description: 'Stronger processes, better tooling, and clearer reporting with every cycle.' },
              { title: 'Quality & Integrity', description: 'We work ethically, follow defined checklists, and maintain confidentiality.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
