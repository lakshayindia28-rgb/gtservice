import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import {
  Landmark,
  Shield,
  Building,
  Users,
  Home,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    title: 'Banks & NBFCs (BFSI)',
    description: 'FI / CPV, RCU / FCU support, fraud checks and verification workflows for lending and onboarding.',
    services: [
      'FI / CPV (Field Investigation / Contact Point Verification)',
      'Address & Employment Verification',
      'Bank Statement / Document Verification (as per scope)',
      'RCU / FCU support and reporting',
      'Property Verification & Valuation support',
      'IT-enabled reporting and dashboards (optional)',
    ],
    useCases: [
      'Loan onboarding and pre-disbursement checks',
      'Fraud risk review and investigation support',
      'KYC / due diligence operations',
      'Field reporting with location-enabled workflows',
    ],
  },
  {
    icon: Shield,
    title: 'Insurance Companies',
    description: 'Claims investigation, verification, and fraud detection support with structured reporting.',
    services: [
      'Claims investigation support',
      'Document and profile verification (as per scope)',
      'Address verification and field checks',
      'Fraud red-flag identification',
      'Standardized reports and exception notes',
      'IT-enabled real-time reporting (optional)',
    ],
    useCases: [
      'Claims verification and investigation',
      'Policy verification support',
      'Fraud screening and field validation',
      'Turnaround-time driven reporting',
    ],
  },
  {
    icon: Building,
    title: 'Corporate Sector',
    description: 'Employee background verification, vendor due diligence, and corporate verification support.',
    services: [
      'Employee background verification support',
      'Vendor / partner verification (as per scope)',
      'Business verification and site visits',
      'Compliance support (GST/ITR as required)',
      'Standardized checklists and reporting',
      'IT services for secure internal tools (optional)',
    ],
    useCases: [
      'Hiring and onboarding verification',
      'Vendor onboarding and due diligence',
      'Site verification for operational partners',
      'Audit-ready reporting outputs',
    ],
  },
  {
    icon: Users,
    title: 'Risk & Due Diligence Teams',
    description: 'Investigation and verification support for risk decisions across sectors and geographies.',
    services: [
      'Investigation support',
      'RCU / FCU / FI / KYC checks',
      'Document and profile verification (as per scope)',
      'Fast TAT with standardized outputs',
      'Hybrid field + office execution model',
      'Secure, IT-enabled reporting (optional)',
    ],
    useCases: [
      'Portfolio-level verification operations',
      'Fraud screening support',
      'Custom checklist-based verifications',
      'Reporting and audit trail for outcomes',
    ],
  },
  {
    icon: Home,
    title: 'Real Estate & Property',
    description: 'Property verification and valuation support to reduce risk in transactions and lending.',
    services: [
      'Property verification support (as per scope)',
      'Property valuation summary',
      'Document checks and exception reporting',
      'Field visit and observation notes',
      'Standardized reporting format',
      'Turnaround-time driven delivery',
    ],
    useCases: [
      'Pre-purchase verification support',
      'Lending collateral assessment support',
      'Valuation for underwriting decisions',
      'Risk review for property transfers',
    ],
  },
  {
    icon: Briefcase,
    title: 'IT-Enabled Operations',
    description: 'IT services and product design to support field operations, reporting, and secure workflows.',
    services: [
      'Product discovery and UX/UI for workflows',
      'Web portals and dashboards',
      'Mobile apps for field reporting (GPS/map enabled)',
      'Secure server setup and access controls',
      'Automation and audit trails',
      'Support and maintenance',
    ],
    useCases: [
      'Real-time reporting systems',
      'Operations dashboards for verification teams',
      'Case assignment and tracking tools',
      'Secure data handling and backups',
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
              Industries We{' '}
              <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              GUST TASK SERVICES PRIVATE LIMITED supports organizations with investigation, verification, due diligence, and compliance services — backed by IT-enabled reporting.
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
                      to="/login"
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
            Our delivery model works across domains. Contact us to discuss your verification scope, checklist, and turnaround time.
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
