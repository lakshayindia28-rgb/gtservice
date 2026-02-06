import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Landmark, Shield, Users, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    title: 'Banks & NBFCs',
    description: 'Pre-disbursement verification, fraud investigation, and compliance support for lending institutions.',
    features: ['FI / CPV', 'RCU / FCU', 'Due Diligence'],
  },
  {
    icon: Shield,
    title: 'Insurance Companies',
    description: 'Claims investigation, policy verification, and fraud detection services.',
    features: ['Claims', 'Policy Checks', 'Risk Assessment'],
  },
  {
    icon: Building,
    title: 'Corporate Sector',
    description: 'Employee background verification, vendor due diligence, and corporate investigations.',
    features: ['BGV', 'Vendor Verification', 'Compliance'],
  },
  {
    icon: Users,
    title: 'Risk & Due Diligence',
    description: 'Risk assessment and due diligence support for partnerships and business decisions.',
    features: ['Screening', 'Audits', 'Reporting'],
  },
];

const Industries = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-foreground text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Leading{' '}
            <span className="text-sky">Enterprises</span>
          </h2>
          <p className="text-lg text-white/60">
            We support BFSI and enterprises with verification, investigation, and due diligence — backed by secure, IT-enabled reporting.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-white/60 mb-5 leading-relaxed">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-foreground font-medium hover:bg-white/90 transition-colors"
          >
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
