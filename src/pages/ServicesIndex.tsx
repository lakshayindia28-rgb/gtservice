import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { shouldContainServiceImage } from '@/lib/service-images';
import { 
  Search, MapPin, Briefcase, FileText, Building2, 
  Receipt, FileCheck, Home, Scale, Users, Calculator, ArrowRight 
} from 'lucide-react';

const serviceImages = import.meta.glob('../assets/services/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getServiceImageUrlFromPath(path: string) {
  const match = path.match(/^\/services\/(.+)$/);
  if (!match) return undefined;

  const wanted = normalizeSlug(match[1]);
  const entries = Object.entries(serviceImages);

  for (const [filePath, url] of entries) {
    const fileName = filePath.split('/').pop() || '';
    const baseName = fileName.replace(/\.[^.]+$/, '');
    if (normalizeSlug(baseName) === wanted) return url;
  }

  return undefined;
}

const verificationServices = [
  {
    icon: Search,
    title: 'Investigation',
    description: 'Careful examination to discover the truth for fraud prevention and risk decisions.',
    path: '/services/investigation',
    features: ['Fraud Check', 'Field Investigation', 'Evidence & Reporting'],
  },
  {
    icon: MapPin,
    title: 'Address Verification',
    description: 'On-ground visit with document checks and neighbor confirmation.',
    path: '/services/address-verification',
    features: ['Residence Visit', 'Document Check', 'Neighbor Confirmation'],
  },
  {
    icon: Briefcase,
    title: 'Employment Verification',
    description: 'Office verification to confirm employment status and related details.',
    path: '/services/employment-verification',
    features: ['Office Visit', 'Colleague Confirmation', 'Salary Credit Check'],
  },
  {
    icon: FileText,
    title: 'Bank Statement Verification',
    description: 'Validation of transaction authenticity for financial assessment.',
    path: '/services/bank-statement-verification',
    features: ['Transaction Review', 'Authenticity Check', 'Risk Flags'],
  },
  {
    icon: FileCheck,
    title: 'Form-16 Verification',
    description: 'Authenticity and validity checks to support filing and loan requirements.',
    path: '/services/form-16-verification',
    features: ['Validity Check', 'Authenticity Review', 'Filing Support'],
  },
  {
    icon: Home,
    title: 'Property Verification',
    description: 'Confirm legal status and legitimacy before sale, purchase, or transfer.',
    path: '/services/property-verification',
    features: ['Legal Status', 'Ownership Check', 'Risk Review'],
  },
  {
    icon: Scale,
    title: 'Property Valuation',
    description: 'Fair market value assessment considering location, size, and market trends.',
    path: '/services/property-valuation',
    features: ['Market Value', 'Site Inputs', 'Valuation Summary'],
  },
  {
    icon: Users,
    title: 'RCU / FCU / FI / KYC',
    description: 'FI, CPV & due diligence activities for BFSI and enterprise risk teams.',
    path: '/services/rcu-fcu-fi-kyc',
    features: ['FI / CPV', 'Due Diligence', 'KYC Checks'],
  },
  {
    icon: FileCheck,
    title: 'Additional Verification Services',
    description: 'Pay slip/salary slip checks, employee background verification, profile verification, and more.',
    path: '/services/additional-services',
    features: ['Pay Slip', 'BGV', 'Profile Verification'],
  },
];

const businessComplianceServices = [
  {
    icon: Building2,
    title: 'Business Verification',
    description: 'Site visit and business analysis based on stock, activity, and transactions.',
    path: '/services/business-verification',
    features: ['Site Visit', 'Activity Check', 'Business Analysis'],
  },
  {
    icon: Receipt,
    title: 'GST Verification',
    description: 'GSTIN validation to confirm authenticity of a vendor or service provider.',
    path: '/services/gst-verification',
    features: ['GSTIN Validation', 'Vendor Check', 'Invoice Confidence'],
  },
  {
    icon: FileCheck,
    title: 'ITR Verification',
    description: 'Verification of ITR filing acknowledgement/receipt and related details.',
    path: '/services/itr-verification',
    features: ['ITR-V Check', 'Income Validation', 'Compliance View'],
  },
  {
    icon: Calculator,
    title: 'Taxation & Compliance',
    description: 'GST/ITR filing, EPF registration & filing, and related compliance support.',
    path: '/services/taxation',
    features: ['GST / ITR Filing', 'EPF Support', 'Compliance Help'],
  },
  {
    icon: FileText,
    title: 'TIN Facilitation Services',
    description: 'Support for PAN/TAN requests, corrections, e-TDS/TCS returns and related services.',
    path: '/services/tin-facilitation',
    features: ['PAN/TAN', 'e-TDS/TCS', 'Form 26AS'],
  },
];

export const itServices = [
  {
    icon: Search,
    title: 'Product Discovery',
    description: 'Workshops and research to define scope, success metrics, and roadmap.',
    path: '/services/product-discovery',
    features: ['Workshops', 'User Research', 'Roadmap & MVP'],
  },
  {
    icon: MapPin,
    title: 'Product Design (UX/UI)',
    description: 'UX strategy, flows, wireframes, and prototypes to improve usability and clarity.',
    path: '/services/product-design',
    features: ['User Flows', 'Wireframes', 'UI Design'],
  },
  {
    icon: Briefcase,
    title: 'Web Development',
    description: 'Web apps, portals, and dashboards with reliable architecture and performance.',
    path: '/services/web-development',
    features: ['Web Apps', 'Portals', 'Dashboards'],
  },
  {
    icon: FileText,
    title: 'Mobile App Development',
    description: 'Field and customer apps with real-time reporting and map-enabled workflows.',
    path: '/services/mobile-app-development',
    features: ['Android/iOS', 'Geo Tracking', 'Realtime Sync'],
  },
  {
    icon: FileCheck,
    title: 'Custom Software',
    description: 'Operations tools, admin panels, and workflow automation tailored to your process.',
    path: '/services/custom-software',
    features: ['Automation', 'Admin Panels', 'Audit Trails'],
  },
  {
    icon: Building2,
    title: 'Cloud & DevOps',
    description: 'Secure servers, deployments, monitoring, backups, and access controls.',
    path: '/services/cloud-devops',
    features: ['CI/CD', 'Monitoring', 'Security'],
  },
  {
    icon: Receipt,
    title: 'QA & Testing',
    description: 'Manual + automation testing to maintain quality and reduce rework.',
    path: '/services/qa-testing',
    features: ['Manual QA', 'Automation', 'Release Checks'],
  },
  {
    icon: FileCheck,
    title: 'Data & AI',
    description: 'Reporting dashboards, data workflows, and safe AI integrations.',
    path: '/services/data-ai',
    features: ['Dashboards', 'Data Pipelines', 'AI'],
  },
  {
    icon: Home,
    title: 'Cybersecurity',
    description: 'Security reviews, hardening, and best practices for safer systems.',
    path: '/services/cybersecurity',
    features: ['Hardening', 'Access Hygiene', 'Monitoring'],
  },
  {
    icon: Scale,
    title: 'Support & Maintenance',
    description: 'Ongoing support, upgrades, performance tuning, and continuous improvements.',
    path: '/services/support-maintenance',
    features: ['Monitoring', 'Upgrades', 'Support'],
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Retainer-based squads for continuous delivery and ownership.',
    path: '/services/dedicated-teams',
    features: ['Retainer', 'Ownership', 'Velocity'],
  },
  {
    icon: Calculator,
    title: 'API & Integrations',
    description: 'Payments, analytics, CRM and partner integrations that work reliably.',
    path: '/services/api-integrations',
    features: ['Payments', 'Analytics', 'Partner APIs'],
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
              Investigation, Verification{' '}
              <span className="gradient-text">& IT Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From investigation and verification to compliance support — plus IT services to build secure tools, apps, and reporting systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Verification & Due Diligence</h2>
            <p className="text-muted-foreground mb-8">
              Core verification services and additional compliance support, delivered on assignment or retainership (BPO) basis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verificationServices.map((service, index) => (
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
                  {(() => {
                    const imageUrl = getServiceImageUrlFromPath(service.path);
                    if (!imageUrl) return null;

                    return (
                      <div className="mb-6 overflow-hidden rounded-xl border border-border aspect-[16/9] bg-white">
                        <img
                          src={imageUrl}
                          alt={service.title}
                          loading="lazy"
                          className={
                            shouldContainServiceImage(service.path.replace(/^\/services\//, ''))
                              ? 'h-full w-full object-contain p-3'
                              : 'h-full w-full object-cover'
                          }
                        />
                      </div>
                    );
                  })()}

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Business & Compliance</h2>
            <p className="text-muted-foreground mb-8">
              Business verification, GST/ITR checks, and compliance support services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessComplianceServices.map((service, index) => (
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
                  {(() => {
                    const imageUrl = getServiceImageUrlFromPath(service.path);
                    if (!imageUrl) return null;

                    return (
                      <div className="mb-6 overflow-hidden rounded-xl border border-border aspect-[16/9] bg-white">
                        <img
                          src={imageUrl}
                          alt={service.title}
                          loading="lazy"
                          className={
                            shouldContainServiceImage(service.path.replace(/^\/services\//, ''))
                              ? 'h-full w-full object-contain p-3'
                              : 'h-full w-full object-cover'
                          }
                        />
                      </div>
                    );
                  })()}

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">IT Services</h2>
            <p className="text-muted-foreground mb-8">
              Product design and IT services to build secure apps, dashboards, and workflows — supporting field operations, reporting, and customer experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service, index) => (
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
                  {(() => {
                    const imageUrl = getServiceImageUrlFromPath(service.path);
                    if (!imageUrl) return null;

                    return (
                      <div className="mb-6 overflow-hidden rounded-xl border border-border aspect-[16/9] bg-white">
                        <img
                          src={imageUrl}
                          alt={service.title}
                          loading="lazy"
                          className={
                            shouldContainServiceImage(service.path.replace(/^\/services\//, ''))
                              ? 'h-full w-full object-contain p-3'
                              : 'h-full w-full object-cover'
                          }
                        />
                      </div>
                    );
                  })()}

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
