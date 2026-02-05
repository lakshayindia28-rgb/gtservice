import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Building, Server, Smartphone, Shield, Lock, Wifi, Clock, FileCheck, CheckCircle } from 'lucide-react';

const offices = [
  {
    city: 'Lucknow',
    type: 'Head Office',
    description: 'State-of-the-art facility housing our core operations, technology, and management teams.',
    features: ['Central Operations Hub', 'Technology Center', 'Management Office'],
  },
  {
    city: 'Kolkata',
    type: 'Regional Office',
    description: 'Eastern region operations center managing verification across West Bengal and neighboring states.',
    features: ['Regional Operations', 'Field Coordination', 'Quality Control'],
  },
  {
    city: 'Sonbhadra',
    type: 'Branch Office',
    description: 'Dedicated branch for local operations and field agent coordination in the region.',
    features: ['Field Operations', 'Local Coordination', 'Agent Training'],
  },
];

const techFeatures = [
  {
    icon: Smartphone,
    title: 'Mobile App-Based Verification',
    description: 'Our proprietary mobile application enables field agents to capture geotagged photos, GPS coordinates, and real-time data during verifications.',
  },
  {
    icon: Wifi,
    title: 'Real-Time Tracking',
    description: 'Track verification progress in real-time with live updates, instant notifications, and comprehensive dashboards.',
  },
  {
    icon: Server,
    title: 'Secure Servers',
    description: 'Enterprise-grade servers with 99.9% uptime, regular backups, and disaster recovery protocols.',
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'End-to-end encryption, secure data transmission, and compliance with data protection standards.',
  },
  {
    icon: FileCheck,
    title: 'Licensed Software',
    description: 'All software and tools used are properly licensed and compliant with legal requirements.',
  },
  {
    icon: Clock,
    title: '24/7 System Availability',
    description: 'Round-the-clock system availability ensuring uninterrupted service delivery for critical verifications.',
  },
];

const securityItems = [
  'ISO 27001 compliant data handling',
  'End-to-end encryption for all data',
  'Regular security audits and penetration testing',
  'Strict access controls and authentication',
  'Compliance with RBI and data protection guidelines',
  'Secure document storage and destruction protocols',
];

const Infrastructure = () => {
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
              Infrastructure & IT
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Robust Infrastructure for{' '}
              <span className="gradient-text">Reliable Verification</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our technology-driven infrastructure ensures accurate, secure, and timely verification services across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office Infrastructure */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Office Infrastructure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic office locations ensuring efficient operations and quick response times.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mb-6">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                <p className="text-primary font-medium text-sm mb-4">{office.type}</p>
                <p className="text-muted-foreground text-sm mb-5">{office.description}</p>
                <div className="space-y-2">
                  {office.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-foreground text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IT Infrastructure & Security</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Cutting-edge technology powering secure and efficient verification processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Compliance */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                Security & Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade <span className="gradient-text-gold">Security Standards</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We maintain the highest security standards to protect sensitive client data and ensure regulatory compliance across all operations.
              </p>

              <div className="space-y-4">
                {securityItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Data Security Promise</h3>
              <p className="text-center text-muted-foreground mb-6">
                Your data is protected with industry-leading security measures. We never share client information and maintain strict confidentiality protocols.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">256-bit</div>
                  <div className="text-xs text-muted-foreground">Encryption</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Infrastructure;
