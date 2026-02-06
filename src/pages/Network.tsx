import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { MapPin, Users, Building, CheckCircle, Shield, Smartphone } from 'lucide-react';

const coverage = [
  { name: 'Uttar Pradesh', presence: 'Branch + Network', highlight: true, note: 'Lucknow / Sonbhadra' },
  { name: 'Madhya Pradesh', presence: 'Network', highlight: false, note: 'Field coverage' },
  { name: 'Delhi (NCR)', presence: 'Network', highlight: false, note: 'Client operations support' },
  { name: 'Bihar', presence: 'Network', highlight: false, note: 'Field coverage' },
  { name: 'Jharkhand', presence: 'Network', highlight: false, note: 'Field coverage' },
  { name: 'Haryana', presence: 'Network', highlight: false, note: 'Field coverage' },
  { name: 'West Bengal', presence: 'Branch + Network', highlight: true, note: 'Kolkata' },
];

const branches = [
  {
    title: 'Branch 1 — Lucknow (U.P.)',
    details: [
      'Office space of 1000 sq ft (17 seater), Dual ISP Broadband + lease line access.',
      'Branch office: C2/86, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    ],
  },
  {
    title: 'Branch 2 — Sonbhadra (U.P.)',
    details: [
      'Office space of 1000 sq ft (17 seater), ISP Broadband + lease line access.',
      'MKS Building (2nd Floor), Civil Lines Road, Robertsganj, Sonbhadra, Uttar Pradesh 231216',
    ],
  },
  {
    title: 'Branch 3 — Kolkata (W.B.)',
    details: [
      'Office space of 1200 sq ft (25 seater), Dual ISP Broadband + lease line access.',
      'Branch office: 16E, Mondal Temple Lane, New Alipore, Kolkata 700053, West Bengal',
    ],
  },
];

const Network = () => {
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
              Our Network
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pan‑India{' '}
              <span className="gradient-text">Field Network</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We operate through branch offices and a strong field network to deliver investigation, verification, and due diligence services — backed by IT‑enabled reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building, value: '3', label: 'Branch Offices' },
              { icon: MapPin, value: 'Multi‑State', label: 'Field Coverage' },
              { icon: Smartphone, value: 'Real‑Time', label: 'Mobile Reporting' },
              { icon: Shield, value: 'Secure', label: 'Server & Data Handling' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India Map Representation */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-lg mx-auto relative">
                {/* Stylized Map Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-sky/5 to-gold/10 border border-primary/20" />
                
                {/* Map Pins */}
                <div className="absolute inset-0 p-8">
                  {[
                    { top: '15%', left: '45%', name: 'Delhi (NCR)' },
                    { top: '25%', left: '55%', name: 'Uttar Pradesh' },
                    { top: '35%', left: '35%', name: 'Madhya Pradesh' },
                    { top: '30%', left: '65%', name: 'Bihar' },
                    { top: '40%', left: '70%', name: 'Jharkhand' },
                    { top: '20%', left: '40%', name: 'Haryana' },
                    { top: '45%', left: '80%', name: 'West Bengal (Kolkata)' },
                  ].map((location, index) => (
                    <motion.div
                      key={location.name}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute"
                      style={{ top: location.top, left: location.left }}
                    >
                      <div className="relative group">
                        <div className="w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center cursor-pointer">
                          <div className="w-3 h-3 rounded-full bg-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                          {location.name}
                        </div>
                        {/* Pulse Animation */}
                        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Center Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">INDIA</h3>
                    <p className="text-sm text-muted-foreground">Delivery Footprint</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* State List */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Coverage Snapshot</h2>
              <div className="space-y-4">
                {coverage.map((state, index) => (
                  <motion.div
                    key={state.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-5 rounded-xl ${state.highlight ? 'glass-card border-primary/30' : 'bg-white/50 border border-border'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg ${state.highlight ? 'bg-primary' : 'bg-primary/10'} flex items-center justify-center`}>
                          <MapPin className={`w-5 h-5 ${state.highlight ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{state.name}</h3>
                          <p className="text-sm text-muted-foreground">{state.note}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">{state.presence}</div>
                        <div className="text-xs text-muted-foreground">Presence</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Infrastructure & Branches</h2>
            <p className="text-muted-foreground mb-8">
              Our branch offices are equipped for secure operations and quality reporting. We also execute pan‑India through an extended field network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-8"
              >
                <h3 className="text-lg font-semibold mb-4">{branch.title}</h3>
                <div className="space-y-3">
                  {branch.details.map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Expanding Our Reach</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We continuously strengthen our field network and reporting systems. Contact us to confirm coverage, checklist scope, and turnaround time.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Talk to Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Network;
