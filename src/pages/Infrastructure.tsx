import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Building, Server, Smartphone, Shield, Lock, Wifi, Clock, FileCheck, CheckCircle } from 'lucide-react';

const offices = [
  {
    city: 'Lucknow',
    type: 'Branch Office (U.P.)',
    description: 'Office infrastructure in a central locality of Lucknow supporting verification operations.',
    features: [
      'Office space: 1000 sq ft (17 seater)',
      'Connectivity: Dual ISP Broadband + lease line access',
      'Address: C2/86, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    ],
  },
  {
    city: 'Sonbhadra',
    type: 'Branch Office (U.P.)',
    description: 'Operations setup supporting verification delivery in Sonbhadra region.',
    features: [
      'Office space: 1000 sq ft (17 seater)',
      'Connectivity: ISP Broadband + lease line access',
      'Address: MKS Building (2nd Floor), Civil Lines Road, Robertsganj, Sonbhadra, Uttar Pradesh 231216',
    ],
  },
  {
    city: 'Kolkata',
    type: 'Branch Office (W.B.)',
    description: 'Kolkata branch supporting verification operations with secure infrastructure and connectivity.',
    features: [
      'Office space: 1200 sq ft (25 seater)',
      'Connectivity: Dual ISP Broadband + lease line access',
      'Address: 16E, Mondal Temple Lane, New Alipore, Kolkata 700053, West Bengal',
    ],
  },
];

const techFeatures = [
  {
    icon: Smartphone,
    title: 'Mobile Application Software',
    description: 'Our field staff perform verification using our own mobile application which captures photographs and supports real-time reporting.',
  },
  {
    icon: Wifi,
    title: 'Google Map & Tracking',
    description: 'Map-enabled tracking supports monitoring of verifier movements throughout the day as per operational requirements.',
  },
  {
    icon: Server,
    title: 'Secure Servers',
    description: 'All details are highly secured as we use our own server for data handling and reporting workflows.',
  },
  {
    icon: Lock,
    title: 'Controlled Access',
    description: 'Operational access controls and confidentiality-focused handling of verification data and reports.',
  },
  {
    icon: FileCheck,
    title: 'Licensed Software',
    description: 'We use only legal software which is fully licensed and certified, helping reduce downtime and business risks.',
  },
  {
    icon: Clock,
    title: 'Operational Continuity',
    description: 'Reliable connectivity and systems that support daily verification execution and timely reporting.',
  },
];

const securityItems = [
  'Own server for secured data handling and reporting',
  'Mobile app based field reporting with photo capture',
  'Map-enabled tracking support for field operations',
  'Licensed and certified software usage',
  'Confidentiality-focused handling of client information',
  'Reliable connectivity at branch offices (Broadband + lease line where available)',
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
              Infrastructure &{' '}
              <span className="gradient-text">IT Practices</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Branch offices, connectivity, and IT-enabled reporting that support investigation, verification, and due diligence operations.
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
              Branch offices with seating capacity and connectivity to support field operations and reporting.
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
              IT-enabled verification operations with real-time reporting, tracking support, and secure server handling.
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
                Security & <span className="gradient-text-gold">IT Practices</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We understand the importance of IT practices in verification operations and focus on secure handling, licensed software, and reliable reporting workflows.
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
              <h3 className="text-2xl font-bold text-center mb-4">Delivery Readiness</h3>
              <p className="text-center text-muted-foreground mb-6">
                We support operations with controlled processes and IT-enabled reporting, focused on confidentiality and continuity.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">Mobile</div>
                  <div className="text-xs text-muted-foreground">Reporting</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Own</div>
                  <div className="text-xs text-muted-foreground">Server</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Licensed</div>
                  <div className="text-xs text-muted-foreground">Software</div>
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
