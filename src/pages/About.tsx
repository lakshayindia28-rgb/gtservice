import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Target, Eye, Award, Users, Building, Clock, CheckCircle } from 'lucide-react';

const milestones = [
  { year: '01', title: 'Work Culture & Ethics', description: 'We maintain high standards of professional work culture and ethics.' },
  { year: '02', title: 'Flexible Delivery Model', description: 'Services available on assignment or retainership (Business Process Outsourcing) basis.' },
  { year: '03', title: 'On-site + Office Execution', description: 'We execute work at client sites as well as in our office — based on requirements.' },
  { year: '04', title: 'Verification Services', description: 'Investigation, address, employment, bank statement, Form-16, business, GST, ITR, property verification, RCU/FCU/FI/KYC, taxation and valuation.' },
  { year: '05', title: 'IT-Enabled Reporting', description: 'Mobile app-based reporting with photo capture, Google map tracking, and secure private servers.' },
  { year: '06', title: 'IT Services & Product Support', description: 'We also help build secure tools, portals, and dashboards (product design + IT services) when clients need technology support.' },
];

const values = [
  { icon: Target, title: 'Accuracy', description: 'We prioritize precision in every verification we conduct.' },
  { icon: Eye, title: 'Transparency', description: 'Clear communication and honest reporting at every step.' },
  { icon: Award, title: 'Integrity', description: 'Ethical practices and compliance-driven operations.' },
  { icon: Users, title: 'Partnership', description: 'Long-term relationships built on trust and reliability.' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              GUST TASK SERVICES{' '}
              <span className="gradient-text">PRIVATE LIMITED</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are maintaining high standards of professional work culture and ethics.
              We execute work on the sites of client as well as in our office.
              Our services are available on assignment or on retainership (Business Process Outsourcing) basis or to be as independent
              professionals of the client companies.
              <br />
              <br />
              Along with investigation and verification services, our delivery is supported by IT infrastructure and secure reporting.
              We also provide IT services (including product design and software development) when clients need internal tools,
              dashboards, portals, or workflow systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, accurate, and timely investigation and verification services that help our clients make informed decisions,
                mitigate risks, and maintain compliance through ethical execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted partner for verified intelligence and technology-enabled delivery — setting benchmarks for quality,
                turnaround time (TAT), and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Culture</h2>
            <p className="text-muted-foreground">
              We foster a culture of excellence, integrity, and continuous improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building, title: 'Professional Environment', description: 'We execute work at client sites as well as from our offices with clear SOPs.' },
              { icon: Clock, title: 'BPO & Retainer Services', description: 'Dedicated teams for retainership clients ensuring consistent quality and quick TAT.' },
              { icon: CheckCircle, title: 'Quality First', description: 'Training and multi-step checks to keep quality high and reduce rework.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              How We Work <span className="gradient-text-gold">End-to-End</span>
            </h2>
          </motion.div>

          <div className="space-y-8 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card-hover p-6 inline-block">
                    <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 flex-shrink-0 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-foreground text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-white/60">The principles that guide every interaction and decision.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
