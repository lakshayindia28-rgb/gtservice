import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Landmark, Shield, Building, Users, ArrowRight, CheckCircle } from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    title: 'Banks & NBFCs',
    description: 'Comprehensive verification services for lending institutions including pre-disbursement verification, document authentication, and field investigation.',
    services: [
      'Pre-Disbursement Verification',
      'Document Authentication',
      'Address & Employment Verification',
      'Income Verification',
      'Property Verification',
      'RCU/FCU Support',
    ],
    useCases: [
      'Personal Loan Verification',
      'Home Loan Processing',
      'Vehicle Finance',
      'Business Loan Due Diligence',
    ],
  },
  {
    icon: Shield,
    title: 'Insurance Companies',
    description: 'Claims investigation, policy verification, and fraud detection services for general and life insurance companies.',
    services: [
      'Claims Investigation',
      'Policy Verification',
      'Fraud Detection',
      'Mortality Investigation',
      'Hospital Verification',
      'Document Verification',
    ],
    useCases: [
      'Health Insurance Claims',
      'Motor Insurance Claims',
      'Life Insurance Verification',
      'Fraud Prevention',
    ],
  },
  {
    icon: Building,
    title: 'Corporate Sector',
    description: 'Employee background verification, vendor due diligence, and corporate investigation services for enterprises.',
    services: [
      'Pre-Employment Screening',
      'Reference Verification',
      'Education Verification',
      'Criminal Record Check',
      'Vendor Due Diligence',
      'Corporate Investigation',
    ],
    useCases: [
      'New Hire Verification',
      'Vendor Onboarding',
      'Internal Investigations',
      'Compliance Audits',
    ],
  },
  {
    icon: Users,
    title: 'Risk & Due Diligence Firms',
    description: 'Partner with risk management firms for comprehensive due diligence and investigation support.',
    services: [
      'Partner Screening',
      'Investment Due Diligence',
      'Asset Verification',
      'Business Intelligence',
      'Litigation Support',
      'Compliance Audits',
    ],
    useCases: [
      'M&A Due Diligence',
      'Investment Screening',
      'Partnership Verification',
      'Regulatory Compliance',
    ],
  },
];

const Industries = () => {
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
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by{' '}
              <span className="gradient-text">Leading Enterprises</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Specialized verification solutions for diverse industry verticals, each tailored to meet specific regulatory and operational requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 md:p-10"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Header */}
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mb-6">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{industry.title}</h2>
                    <p className="text-muted-foreground">{industry.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Services Offered</h3>
                    <div className="space-y-3">
                      {industry.services.map((service) => (
                        <div key={service} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Use Cases</h3>
                    <div className="space-y-3">
                      {industry.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="px-4 py-3 rounded-lg bg-secondary/50 text-sm"
                        >
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not in the List? We Still Serve You
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our verification services extend beyond these industries. Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
