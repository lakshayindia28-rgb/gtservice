import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { 
  Search, MapPin, Briefcase, FileText, Building2, 
  Receipt, FileCheck, Home, Scale, Users, Calculator,
  ArrowRight, CheckCircle, Clock, Shield, FileCheck2
} from 'lucide-react';

const servicesData: Record<string, {
  icon: typeof Search;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  benefits: string[];
}> = {
  'investigation': {
    icon: Search,
    title: 'Investigation Services',
    description: 'Comprehensive investigation services for fraud detection and risk assessment.',
    longDescription: 'Our investigation services provide in-depth analysis and field investigation to uncover fraud, verify backgrounds, and assess risks. We employ trained investigators with extensive experience in corporate and financial investigations.',
    features: ['Fraud Investigation', 'Pre-Employment Background Checks', 'Asset Tracing', 'Corporate Investigations', 'Insurance Claims Investigation', 'Litigation Support'],
    process: [
      { step: 1, title: 'Case Initiation', description: 'Receive case details and documentation requirements' },
      { step: 2, title: 'Field Investigation', description: 'Deploy investigators for on-ground verification' },
      { step: 3, title: 'Documentation', description: 'Collect evidence and supporting documents' },
      { step: 4, title: 'Analysis & Report', description: 'Compile findings into comprehensive report' },
    ],
    benefits: ['Expert investigators with 10+ years experience', '24-48 hours TAT for urgent cases', 'Pan-India coverage', 'Court-admissible documentation'],
  },
  'address-verification': {
    icon: MapPin,
    title: 'Address Verification',
    description: 'Accurate physical and permanent address verification across India.',
    longDescription: 'Our address verification services ensure the authenticity of residential and office addresses through physical field visits, neighbor confirmations, and document verification.',
    features: ['Residence Verification', 'Office/Business Address Verification', 'Permanent Address Check', 'Neighbor Confirmation', 'Landmark Verification', 'Photo Documentation'],
    process: [
      { step: 1, title: 'Address Received', description: 'Receive address details and verification requirements' },
      { step: 2, title: 'Field Visit', description: 'Physical verification by local field agent' },
      { step: 3, title: 'Photo Documentation', description: 'Capture geotagged photos and GPS coordinates' },
      { step: 4, title: 'Report Submission', description: 'Submit detailed verification report with evidence' },
    ],
    benefits: ['Real-time GPS tracking', 'Geotagged photography', 'Same-day verification available', '500+ field agents nationwide'],
  },
  'employment-verification': {
    icon: Briefcase,
    title: 'Employment Verification',
    description: 'Thorough employment history and credential verification.',
    longDescription: 'We verify complete employment history including past and current employers, job titles, tenure, salary details, and reasons for leaving. Our verification process includes direct HR confirmations.',
    features: ['Past Employment Verification', 'Current Employment Check', 'Salary Verification', 'Designation Confirmation', 'Reference Checks', 'Exit Reason Verification'],
    process: [
      { step: 1, title: 'Document Collection', description: 'Gather employment documents and references' },
      { step: 2, title: 'HR Verification', description: 'Contact HR departments for confirmation' },
      { step: 3, title: 'Reference Check', description: 'Verify references and conduct interviews' },
      { step: 4, title: 'Report Generation', description: 'Compile comprehensive employment report' },
    ],
    benefits: ['Direct HR verification', 'Comprehensive reference checks', '99% accuracy rate', 'Industry-standard compliance'],
  },
  'bank-statement-verification': {
    icon: FileText,
    title: 'Bank Statement Verification',
    description: 'Detailed analysis and verification of financial documents.',
    longDescription: 'Our bank statement verification services include thorough analysis of financial documents to detect fraud, verify income patterns, and assess creditworthiness for loan processing.',
    features: ['Statement Authenticity Check', 'Income Pattern Analysis', 'Fraud Detection', 'Balance Verification', 'Transaction Analysis', 'Bank Confirmation'],
    process: [
      { step: 1, title: 'Statement Receipt', description: 'Receive bank statements for analysis' },
      { step: 2, title: 'Forensic Analysis', description: 'Check for tampering and authenticity' },
      { step: 3, title: 'Bank Verification', description: 'Confirm with issuing bank if required' },
      { step: 4, title: 'Analytical Report', description: 'Provide detailed financial analysis report' },
    ],
    benefits: ['Advanced fraud detection', 'Forensic document analysis', 'Direct bank verification', 'Detailed income assessment'],
  },
  'form-16-verification': {
    icon: FileCheck,
    title: 'Form-16 Verification',
    description: 'Employment income and Form-16 validation services.',
    longDescription: 'We verify Form-16 documents issued by employers to validate employment income, TDS deductions, and ensure authenticity of salary certificates for loan processing.',
    features: ['Employer Confirmation', 'Salary Verification', 'TDS Details Validation', 'Document Authenticity', 'PAN Verification', 'Income Calculation'],
    process: [
      { step: 1, title: 'Document Submission', description: 'Receive Form-16 and related documents' },
      { step: 2, title: 'Employer Contact', description: 'Verify with issuing employer' },
      { step: 3, title: 'TDS Validation', description: 'Cross-check TDS details with records' },
      { step: 4, title: 'Verification Report', description: 'Submit verification confirmation' },
    ],
    benefits: ['Direct employer verification', 'TDS compliance check', 'Quick turnaround', 'Fraud prevention'],
  },
  'business-verification': {
    icon: Building2,
    title: 'Business Verification',
    description: 'Complete business entity verification and due diligence.',
    longDescription: 'Comprehensive business verification covering entity registration, operational status, financial health, and management structure for B2B transactions and partnerships.',
    features: ['Entity Registration Check', 'Business Activity Verification', 'Financial Health Assessment', 'Management Verification', 'Physical Verification', 'Compliance Check'],
    process: [
      { step: 1, title: 'Information Gathering', description: 'Collect business details and documents' },
      { step: 2, title: 'Registry Verification', description: 'Verify with ROC and other registries' },
      { step: 3, title: 'Site Visit', description: 'Physical verification of business premises' },
      { step: 4, title: 'Due Diligence Report', description: 'Comprehensive business assessment report' },
    ],
    benefits: ['Complete entity verification', 'ROC registry checks', 'On-site verification', 'Financial assessment'],
  },
  'gst-verification': {
    icon: Receipt,
    title: 'GST Verification',
    description: 'GST registration and compliance verification services.',
    longDescription: 'We verify GST registration status, filing history, and compliance records to ensure authenticity of business transactions and vendor due diligence.',
    features: ['GSTIN Validation', 'Registration Status', 'Filing History Check', 'Compliance Assessment', 'Address Verification', 'Business Type Confirmation'],
    process: [
      { step: 1, title: 'GSTIN Submission', description: 'Receive GST number for verification' },
      { step: 2, title: 'Portal Verification', description: 'Verify on GST portal' },
      { step: 3, title: 'Compliance Check', description: 'Review filing and compliance history' },
      { step: 4, title: 'Status Report', description: 'Detailed GST verification report' },
    ],
    benefits: ['Real-time GST portal verification', 'Compliance history analysis', 'Vendor due diligence', 'B2B transaction safety'],
  },
  'itr-verification': {
    icon: FileCheck,
    title: 'ITR Verification',
    description: 'Income tax return verification and validation.',
    longDescription: 'Verify income tax returns filed by individuals and businesses to validate reported income for loan processing and credit assessment purposes.',
    features: ['ITR Filing Confirmation', 'Income Validation', 'Assessment Year Check', 'PAN Verification', 'TDS Reconciliation', 'Tax Compliance Check'],
    process: [
      { step: 1, title: 'Document Collection', description: 'Receive ITR documents and PAN' },
      { step: 2, title: 'Portal Verification', description: 'Cross-verify on income tax portal' },
      { step: 3, title: 'Income Analysis', description: 'Analyze declared income patterns' },
      { step: 4, title: 'Verification Certificate', description: 'Issue ITR verification report' },
    ],
    benefits: ['Portal verification', 'Income pattern analysis', 'Multi-year verification', 'Tax compliance assessment'],
  },
  'property-verification': {
    icon: Home,
    title: 'Property Verification',
    description: 'Property ownership and title verification services.',
    longDescription: 'Comprehensive property verification including title search, ownership verification, encumbrance check, and legal due diligence for property transactions.',
    features: ['Title Search', 'Ownership Verification', 'Encumbrance Check', 'Legal Due Diligence', 'Document Verification', 'Physical Inspection'],
    process: [
      { step: 1, title: 'Document Collection', description: 'Gather property documents' },
      { step: 2, title: 'Title Search', description: 'Search at registrar office' },
      { step: 3, title: 'Physical Verification', description: 'On-site property inspection' },
      { step: 4, title: 'Legal Opinion', description: 'Property verification report with legal view' },
    ],
    benefits: ['Registrar office verification', 'Encumbrance certificate', 'Physical inspection', 'Legal due diligence'],
  },
  'property-valuation': {
    icon: Scale,
    title: 'Property Valuation',
    description: 'Professional property valuation and assessment.',
    longDescription: 'Certified property valuation services by experienced valuers for mortgage, insurance, sale, or legal purposes with detailed valuation reports.',
    features: ['Market Valuation', 'Technical Assessment', 'Comparable Analysis', 'Legal Compliance', 'Valuation Report', 'Insurance Valuation'],
    process: [
      { step: 1, title: 'Site Visit Scheduled', description: 'Schedule property inspection' },
      { step: 2, title: 'Physical Inspection', description: 'Detailed property assessment' },
      { step: 3, title: 'Market Analysis', description: 'Comparable property analysis' },
      { step: 4, title: 'Valuation Report', description: 'Certified valuation certificate' },
    ],
    benefits: ['Certified valuers', 'Bank-accepted reports', 'Market-based valuation', 'Quick turnaround'],
  },
  'rcu-fcu-fi-kyc': {
    icon: Users,
    title: 'RCU / FCU / FI / KYC',
    description: 'Risk containment, fraud control, and KYC verification.',
    longDescription: 'Specialized services for Risk Containment Unit (RCU), Fraud Control Unit (FCU), Field Investigation (FI), and Know Your Customer (KYC) verification for financial institutions.',
    features: ['Risk Assessment', 'Fraud Detection', 'Field Investigation', 'Customer Due Diligence', 'Document Verification', 'Real-time Tracking'],
    process: [
      { step: 1, title: 'Case Assignment', description: 'Receive verification case details' },
      { step: 2, title: 'Risk Analysis', description: 'Initial risk assessment and planning' },
      { step: 3, title: 'Field Verification', description: 'On-ground investigation and verification' },
      { step: 4, title: 'RCU/FCU Report', description: 'Comprehensive investigation report' },
    ],
    benefits: ['Dedicated RCU teams', 'Real-time case tracking', 'Fraud prevention', 'Compliance assured'],
  },
  'taxation': {
    icon: Calculator,
    title: 'Taxation Services',
    description: 'Comprehensive taxation and compliance services.',
    longDescription: 'End-to-end taxation services including tax planning, filing assistance, compliance support, and regulatory advisory for individuals and businesses.',
    features: ['Tax Planning', 'Filing Assistance', 'Compliance Support', 'GST Services', 'TDS Compliance', 'Tax Advisory'],
    process: [
      { step: 1, title: 'Requirement Analysis', description: 'Understand taxation needs' },
      { step: 2, title: 'Document Review', description: 'Review financial documents' },
      { step: 3, title: 'Tax Computation', description: 'Calculate tax liability' },
      { step: 4, title: 'Filing & Compliance', description: 'Complete filing and compliance' },
    ],
    benefits: ['Expert tax consultants', 'Compliance assured', 'Year-round support', 'Cost optimization'],
  },
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? servicesData[serviceSlug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </Layout>
    );
  }

  const IconComponent = service.icon;

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
            className="max-w-4xl"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm mb-6 hover:underline">
              ← Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-8">What's Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 glass-card"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-sky text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 glass-card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team for customized {service.title.toLowerCase()} solutions tailored to your business needs.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all">
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
