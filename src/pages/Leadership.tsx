import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Linkedin, Mail } from 'lucide-react';

const leaders = [
  {
    name: 'Mr. Ajay Kumar Pathak',
    role: 'Chairman & Managing Director',
    description: 'A visionary leader with over 20 years of experience in investigation and verification services. Mr. Pathak has been instrumental in building Gust Task into a trusted name in the industry.',
    expertise: ['Strategic Leadership', 'Business Development', 'Industry Relations'],
  },
  {
    name: 'Mr. Ram Sevak Shukla',
    role: 'Director',
    description: 'With extensive experience in operations management and field investigations, Mr. Shukla oversees the company\'s verification operations across multiple states.',
    expertise: ['Operations Management', 'Field Investigation', 'Quality Control'],
  },
  {
    name: 'Mr. Priyanshu Dubey',
    role: 'Director',
    description: 'Mr. Dubey brings expertise in technology integration and process optimization, driving digital transformation in verification services.',
    expertise: ['Technology', 'Process Optimization', 'Innovation'],
  },
  {
    name: 'Mrs. Ritika Thakur',
    role: 'Operations Head',
    description: 'Leading the operations team, Mrs. Thakur ensures seamless execution of verification services with a focus on client satisfaction and quality delivery.',
    expertise: ['Operations', 'Client Relations', 'Team Management'],
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
              Experienced professionals driving excellence in verification and investigation services.
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
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-sky flex items-center justify-center flex-shrink-0 text-white text-3xl font-bold group-hover:scale-105 transition-transform duration-300">
                      {leader.name.split(' ').slice(-1)[0].charAt(0)}
                    </div>
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

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
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
              Our leadership team is committed to building a company that sets industry standards for integrity, accuracy, and client service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Client-First Approach', description: 'Every decision is made with our clients\' best interests in mind.' },
              { title: 'Continuous Innovation', description: 'Embracing technology to deliver faster, more accurate services.' },
              { title: 'Ethical Excellence', description: 'Maintaining the highest standards of integrity in all operations.' },
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
