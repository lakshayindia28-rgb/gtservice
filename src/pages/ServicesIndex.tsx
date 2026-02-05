import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Search, MapPin, Briefcase, FileText, Building2, 
  Receipt, FileCheck, Home, Scale, Users, Calculator, ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Investigation',
    description: 'Comprehensive investigation services including fraud detection, background verification, and risk assessment.',
    path: '/services/investigation',
    features: ['Fraud Investigation', 'Pre-Employment Checks', 'Asset Tracing'],
  },
  {
    icon: MapPin,
    title: 'Address Verification',
    description: 'Physical and permanent address verification with on-ground field visits and documentation.',
    path: '/services/address-verification',
    features: ['Residence Verification', 'Office Verification', 'Neighbor Check'],
  },
  {
    icon: Briefcase,
    title: 'Employment Verification',
    description: 'Complete employment history verification including tenure, designation, and salary details.',
    path: '/services/employment-verification',
    features: ['Past Employment', 'Current Employment', 'Reference Check'],
  },
  {
    icon: FileText,
    title: 'Bank Statement Verification',
    description: 'In-depth analysis and verification of bank statements for loan processing and credit assessment.',
    path: '/services/bank-statement-verification',
    features: ['Statement Analysis', 'Fraud Detection', 'Income Assessment'],
  },
  {
    icon: FileCheck,
    title: 'Form-16 Verification',
    description: 'Employment income verification through Form-16 validation with employer confirmation.',
    path: '/services/form-16-verification',
    features: ['Employer Verification', 'Salary Confirmation', 'TDS Verification'],
  },
  {
    icon: Building2,
    title: 'Business Verification',
    description: 'Complete business entity verification including registration, operations, and financial health.',
    path: '/services/business-verification',
    features: ['Entity Check', 'Business Activity', 'Financial Status'],
  },
  {
    icon: Receipt,
    title: 'GST Verification',
    description: 'GST registration verification and compliance assessment for business transactions.',
    path: '/services/gst-verification',
    features: ['GSTIN Validation', 'Filing History', 'Compliance Check'],
  },
  {
    icon: FileCheck,
    title: 'ITR Verification',
    description: 'Income tax return verification and validation for credit assessment and loan processing.',
    path: '/services/itr-verification',
    features: ['ITR Filing Check', 'Income Validation', 'Tax Compliance'],
  },
  {
    icon: Home,
    title: 'Property Verification',
    description: 'Property ownership, title, and encumbrance verification for secure transactions.',
    path: '/services/property-verification',
    features: ['Title Search', 'Ownership Proof', 'Encumbrance Check'],
  },
  {
    icon: Scale,
    title: 'Property Valuation',
    description: 'Professional property valuation and assessment by certified valuers.',
    path: '/services/property-valuation',
    features: ['Market Valuation', 'Technical Assessment', 'Valuation Report'],
  },
  {
    icon: Users,
    title: 'RCU / FCU / FI / KYC',
    description: 'Risk containment, fraud control, field investigation, and KYC verification services.',
    path: '/services/rcu-fcu-fi-kyc',
    features: ['Risk Assessment', 'Fraud Detection', 'Customer Verification'],
  },
  {
    icon: Calculator,
    title: 'Taxation Services',
    description: 'Comprehensive taxation, compliance, and regulatory advisory services.',
    path: '/services/taxation',
    features: ['Tax Planning', 'Compliance Support', 'Filing Assistance'],
  },
];

const ServicesIndex = () => {
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
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              End-to-End{' '}
              <span className="gradient-text">Verification Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From investigation to compliance, we provide comprehensive verification services 
              designed for modern enterprises and financial institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="group block h-full glass-card-hover p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesIndex;
