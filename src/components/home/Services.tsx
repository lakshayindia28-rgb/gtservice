import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, MapPin, Briefcase, FileText, Building2, 
  Receipt, FileCheck, Home, Scale, Users, Calculator, ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Investigation',
    description: 'Comprehensive investigation services for fraud detection and risk assessment.',
    path: '/services/investigation',
    color: 'from-primary to-sky',
  },
  {
    icon: MapPin,
    title: 'Address Verification',
    description: 'Accurate physical and permanent address verification across India.',
    path: '/services/address-verification',
    color: 'from-sky to-sky-light',
  },
  {
    icon: Briefcase,
    title: 'Employment Verification',
    description: 'Thorough employment history and credential verification.',
    path: '/services/employment-verification',
    color: 'from-primary to-navy-light',
  },
  {
    icon: FileText,
    title: 'Bank Statement Verification',
    description: 'Detailed analysis and verification of financial documents.',
    path: '/services/bank-statement-verification',
    color: 'from-gold to-gold-light',
  },
  {
    icon: Building2,
    title: 'Business Verification',
    description: 'Complete business entity verification and due diligence.',
    path: '/services/business-verification',
    color: 'from-navy to-primary',
  },
  {
    icon: Receipt,
    title: 'GST Verification',
    description: 'GST registration and compliance verification services.',
    path: '/services/gst-verification',
    color: 'from-sky-light to-sky',
  },
  {
    icon: FileCheck,
    title: 'ITR Verification',
    description: 'Income tax return verification and validation.',
    path: '/services/itr-verification',
    color: 'from-primary to-sky',
  },
  {
    icon: Home,
    title: 'Property Verification',
    description: 'Property ownership and title verification services.',
    path: '/services/property-verification',
    color: 'from-gold to-gold-light',
  },
  {
    icon: Scale,
    title: 'Property Valuation',
    description: 'Professional property valuation and assessment.',
    path: '/services/property-valuation',
    color: 'from-navy-light to-primary',
  },
  {
    icon: Users,
    title: 'RCU / FCU / FI / KYC',
    description: 'Risk containment, fraud control, and KYC verification.',
    path: '/services/rcu-fcu-fi-kyc',
    color: 'from-sky to-primary',
  },
  {
    icon: Calculator,
    title: 'Taxation Services',
    description: 'Comprehensive taxation and compliance services.',
    path: '/services/taxation',
    color: 'from-gold-light to-gold',
  },
  {
    icon: FileCheck,
    title: 'Form-16 Verification',
    description: 'Employment income and Form-16 validation services.',
    path: '/services/form-16-verification',
    color: 'from-primary to-navy',
  },
];

const Services = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Verification{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From investigation to compliance, we provide end-to-end verification services designed for modern enterprises.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={service.path}
                className="group block h-full glass-card-hover p-6"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
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
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
