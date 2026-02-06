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
    title: 'Investigation',
    description: 'Structured investigation support for risk and fraud prevention.',
    longDescription:
      'We provide careful examination to discover the truth behind a claim, profile, or transaction. Our team supports fraud prevention and risk decisions with field intelligence, desk checks, and clear evidence-based reporting — executed on assignment or retainership (BPO) basis.',
    features: [
      'Assignment / retainership execution model',
      'Field investigation and desk verification support',
      'Evidence-based observations and reporting',
      'Standardized checklists and outcomes',
      'Fast turnaround time (as agreed)',
      'Confidential and controlled handling of data',
    ],
    process: [
      { step: 1, title: 'Case Intake', description: 'Confirm scope, checklist, and TAT with the client team' },
      { step: 2, title: 'Execution', description: 'Perform field visit and/or desk checks as per policy' },
      { step: 3, title: 'Validation', description: 'Validate findings, flag inconsistencies, and document evidence' },
      { step: 4, title: 'Report', description: 'Submit a structured report with outcome and clear notes' },
    ],
    benefits: ['Better risk decisions', 'Reduced fraud exposure', 'Consistent reporting formats', 'Support for compliance workflows'],
  },
  'address-verification': {
    icon: MapPin,
    title: 'Address Verification',
    description: 'Residence verification through on-ground visit and checks.',
    longDescription:
      'We conduct address verification through field visits to confirm occupancy and authenticity. Checks are performed using a standardized checklist and can include document review and nearby confirmation where applicable.',
    features: [
      'Residence visit and locality check',
      'Document verification (as per checklist)',
      'Neighbor/nearby confirmation (where applicable)',
      'Clear outcomes with notes and exceptions',
      'Real-time reporting support (where enabled)',
      'Hybrid field + desk execution model',
    ],
    process: [
      { step: 1, title: 'Request', description: 'Receive case details and required checklist points' },
      { step: 2, title: 'Field Visit', description: 'Verifier visits the address and records observations' },
      { step: 3, title: 'Checks', description: 'Document/reference checks are performed as per feasibility' },
      { step: 4, title: 'Submission', description: 'Share a structured AV report with outcome and evidence notes' },
    ],
    benefits: ['Faster onboarding decisions', 'Reduced identity/address risk', 'Standardized field reports', 'Supports BFSI and enterprise onboarding'],
  },
  'employment-verification': {
    icon: Briefcase,
    title: 'Employment Verification',
    description: 'Office verification to confirm employment status and key details.',
    longDescription:
      'We help confirm employment status through office verification and/or desk checks based on your policy. Outputs are shared in a clear reporting format to support onboarding, credit assessment, and compliance requirements.',
    features: [
      'Office verification / desk checks (as per scope)',
      'Employment status confirmation',
      'Consistency checks with available proofs',
      'Clear outcomes and exception notes',
      'Standardized report format',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Case Setup', description: 'Confirm checkpoints, policy and required details' },
      { step: 2, title: 'Verification', description: 'Perform office visit and/or desk verification as defined' },
      { step: 3, title: 'Validation', description: 'Validate responses and flag mismatches' },
      { step: 4, title: 'Report', description: 'Deliver EV report with status, notes, and exceptions' },
    ],
    benefits: ['Improves onboarding confidence', 'Reduces misrepresentation risk', 'Supports compliance checks', 'Clear reporting for decisioning'],
  },
  'bank-statement-verification': {
    icon: FileText,
    title: 'Bank Statement Verification',
    description: 'Transaction authenticity checks to support financial assessment.',
    longDescription:
      'We support verification of bank statement details to help with financial assessment and risk review. Based on the agreed checklist, we review transactions and highlight anomalies or inconsistencies for client decisioning.',
    features: [
      'Transaction review as per scope',
      'Authenticity indicators check',
      'Risk flags and anomaly notes',
      'Standardized summary output',
      'Confidential handling of documents',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Collect', description: 'Confirm statement period and required checkpoints' },
      { step: 2, title: 'Review', description: 'Review transactions and patterns per checklist' },
      { step: 3, title: 'Validate', description: 'Validate and document inconsistencies/exceptions' },
      { step: 4, title: 'Share', description: 'Submit summary findings and checklist outcomes' },
    ],
    benefits: ['Supports safer credit decisions', 'Highlights anomalies early', 'Clear exceptions reporting', 'Improves process confidence'],
  },
  'form-16-verification': {
    icon: FileCheck,
    title: 'Form-16 Verification',
    description: 'Authenticity and validity checks for Form-16 details.',
    longDescription:
      'We verify Form-16 details to support filing and verification workflows. Our process checks for completeness and consistency as per your checklist and reports outcomes with clear notes and exceptions.',
    features: [
      'Validity and authenticity review',
      'Completeness and consistency checks',
      'Clear exception notes',
      'Standardized reporting format',
      'Confidential handling of documents',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Intake', description: 'Confirm period and required checkpoints' },
      { step: 2, title: 'Review', description: 'Review Form-16 details for completeness/consistency' },
      { step: 3, title: 'Validate', description: 'Validate and document exceptions for review' },
      { step: 4, title: 'Outcome', description: 'Share outcome summary with checklist results' },
    ],
    benefits: ['Improves compliance confidence', 'Reduces document risk', 'Clear outcomes for decisioning', 'Consistent checklist outputs'],
  },
  'business-verification': {
    icon: Building2,
    title: 'Business Verification',
    description: 'Site visit and business analysis to confirm legitimacy.',
    longDescription:
      'We verify business operations through site visits and analysis based on stock, activity, and transactions as per the scope. This helps organizations assess legitimacy and reduce risk in onboarding and lending workflows.',
    features: [
      'On-ground business site visit',
      'Stock and activity observation',
      'Basic transaction and legitimacy checks',
      'Clear outcomes with notes and exceptions',
      'Standardized reporting format',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Scope', description: 'Confirm business details and verification checkpoints' },
      { step: 2, title: 'Visit', description: 'Conduct site visit and record operational observations' },
      { step: 3, title: 'Analyze', description: 'Analyze findings against checklist and policy' },
      { step: 4, title: 'Report', description: 'Submit a structured BV report with outcome and notes' },
    ],
    benefits: ['More reliable business assessment', 'Reduced risk in onboarding/lending', 'Field-verified intelligence', 'Consistent reporting'],
  },
  'gst-verification': {
    icon: Receipt,
    title: 'GST Verification',
    description: 'GSTIN validation to confirm authenticity of vendors/service providers.',
    longDescription:
      'We validate GST details to confirm authenticity of a vendor or service provider and support compliance workflows. Findings are shared as per the defined checklist with clear exceptions.',
    features: [
      'GSTIN validation',
      'Basic authenticity checks',
      'Vendor verification support',
      'Exception highlighting',
      'Standardized reporting format',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Inputs', description: 'Collect GSTIN and entity details' },
      { step: 2, title: 'Validate', description: 'Verify GST details as per checklist' },
      { step: 3, title: 'Review', description: 'Record mismatches or anomalies as exceptions' },
      { step: 4, title: 'Outcome', description: 'Share verification outcome with notes' },
    ],
    benefits: ['Improves vendor confidence', 'Reduces compliance risk', 'Faster verification', 'Clear exception reporting'],
  },
  'itr-verification': {
    icon: FileCheck,
    title: 'ITR Verification',
    description: 'Verification of ITR filing acknowledgement/receipt and related details.',
    longDescription:
      'We verify ITR filing acknowledgement/receipt details to support financial assessment and compliance checks. Outcomes are provided in a structured format aligned to your checklist.',
    features: [
      'ITR acknowledgement/receipt verification',
      'Consistency checks',
      'Exception notes for decisioning',
      'Standardized reporting format',
      'Confidential handling of documents',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Request', description: 'Confirm period and required checkpoints' },
      { step: 2, title: 'Verify', description: 'Verify ITR details as per checklist' },
      { step: 3, title: 'Validate', description: 'Validate and document exceptions' },
      { step: 4, title: 'Report', description: 'Submit outcome summary and checklist results' },
    ],
    benefits: ['Supports safer decisions', 'Improves compliance confidence', 'Clear outcomes', 'Standardized reports'],
  },
  'property-verification': {
    icon: Home,
    title: 'Property Verification',
    description: 'Checks to confirm property legitimacy and legal status (as per scope).',
    longDescription:
      'We support property verification to confirm legality and legitimacy prior to sale, purchase, or transfer. Checks are performed as per your scope and available documents, with clear reporting for decision support.',
    features: [
      'Legitimacy and legal status support checks',
      'Ownership/possession indicators (as per scope)',
      'Exception highlighting and clear notes',
      'Standardized reporting format',
      'Field + desk execution (as applicable)',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Inputs', description: 'Confirm property details and verification scope' },
      { step: 2, title: 'Checks', description: 'Perform verification checks per checklist and feasibility' },
      { step: 3, title: 'Validate', description: 'Validate findings and document exceptions' },
      { step: 4, title: 'Report', description: 'Share a structured report for decisioning' },
    ],
    benefits: ['Reduces transaction risk', 'Improves due diligence confidence', 'Clear exception reporting', 'Supports lending and purchase decisions'],
  },
  'property-valuation': {
    icon: Scale,
    title: 'Property Valuation',
    description: 'Fair market value assessment considering location and trends.',
    longDescription:
      'We provide property valuation support to estimate fair market value based on property size, location, and market trends. Suitable for lending, asset evaluation, and due diligence workflows.',
    features: [
      'Market value estimation',
      'Site observations (where applicable)',
      'Clear valuation summary',
      'Assumptions and notes',
      'Standardized reporting format',
      'Fast turnaround time (as agreed)',
    ],
    process: [
      { step: 1, title: 'Inputs', description: 'Confirm property details and valuation requirements' },
      { step: 2, title: 'Visit', description: 'Conduct site visit and record key parameters (if applicable)' },
      { step: 3, title: 'Assess', description: 'Assess using comparable indicators and market trends' },
      { step: 4, title: 'Summary', description: 'Share valuation summary with assumptions and notes' },
    ],
    benefits: ['Supports fair assessment', 'Improves lending decisions', 'Clear documentation', 'Consistent reporting'],
  },
  'rcu-fcu-fi-kyc': {
    icon: Users,
    title: 'RCU / FCU / FI / KYC',
    description: 'FI, CPV, due diligence and KYC support for risk teams.',
    longDescription:
      'We support RCU/FCU/FI/KYC workflows for BFSI and enterprise clients. Our trained resources execute field and desk checks with standardized reporting and technology-enabled operations, aligned to your policy and checklist.',
    features: [
      'FI / CPV / due diligence workflows',
      'KYC verification support',
      'Hybrid field + office execution model',
      'Standardized reporting and quality checks',
      'Real-time reporting support (where enabled)',
      'Confidential and controlled data handling',
    ],
    process: [
      { step: 1, title: 'Align', description: 'Align checklist, policy and reporting format' },
      { step: 2, title: 'Execute', description: 'Perform field/desk verification as per scope' },
      { step: 3, title: 'Review', description: 'Quality review for completeness and consistency' },
      { step: 4, title: 'Submit', description: 'Submit final report with outcomes and exceptions' },
    ],
    benefits: ['Improved decision quality', 'Faster TAT', 'Consistent compliance output', 'Operational scalability through BPO model'],
  },
  'taxation': {
    icon: Calculator,
    title: 'Taxation & Compliance',
    description: 'GST/ITR filing, EPF support, and compliance assistance.',
    longDescription:
      'We provide support for taxation and compliance requirements including GST/ITR filing and EPF registration/filing. Scope can be customized as per client requirements and operational needs.',
    features: [
      'GST & ITR filing support',
      'EPF registration and filing support',
      'Document checklist and confirmation summaries',
      'Clear process and status updates',
      'Confidential handling of client documents',
      'Assignment or retainership engagement',
    ],
    process: [
      { step: 1, title: 'Collect', description: 'Collect documents and confirm timeline' },
      { step: 2, title: 'Prepare', description: 'Prepare data and validate for completeness' },
      { step: 3, title: 'Submit', description: 'File/submit as per requirements and inputs' },
      { step: 4, title: 'Confirm', description: 'Share acknowledgement and summary for records' },
    ],
    benefits: ['Reduces compliance workload', 'Improves documentation clarity', 'Helps avoid delays', 'Structured acknowledgements and summaries'],
  },
  'tin-facilitation': {
    icon: FileText,
    title: 'TIN Facilitation Services',
    description: 'PAN/TAN services, e-TDS/TCS support, and related facilitation.',
    longDescription:
      'We support PAN/TAN requests and corrections, e-TDS/TCS returns, Form 26AS related services, and other facilitation activities as per requirement — with clear progress and outcome summaries.',
    features: [
      'PAN/TAN request and correction support',
      'e-TDS / TCS returns support',
      'Form 26AS related assistance',
      'Document checklist and confirmation summaries',
      'Clear process and status updates',
      'Assignment or retainership engagement',
    ],
    process: [
      { step: 1, title: 'Intake', description: 'Confirm requested service and collect documents' },
      { step: 2, title: 'Process', description: 'Prepare and process requests/returns as needed' },
      { step: 3, title: 'Validate', description: 'Validate details and resolve errors if any' },
      { step: 4, title: 'Deliver', description: 'Share acknowledgement and summary outcome' },
    ],
    benefits: ['Simplifies facilitation tasks', 'Reduces paperwork effort', 'Clear outcomes for records', 'More predictable turnaround'],
  },
  'additional-services': {
    icon: FileCheck2,
    title: 'Additional Verification Services',
    description: 'Pay slip checks, employee background, profile verification and more.',
    longDescription:
      'We also support additional verification and facilitation needs such as pay slip/salary slip verification, employee background verification, profile verification (including doctors seeding) and other custom checks as per your policy and checklist.',
    features: [
      'Pay slip / salary slip verification',
      'Employee background verification support',
      'Profile verification (including doctors seeding)',
      'Custom checklist-based services',
      'Standardized reporting and outcomes',
      'Assignment or retainership engagement',
    ],
    process: [
      { step: 1, title: 'Align', description: 'Align scope, checklist and reporting format' },
      { step: 2, title: 'Execute', description: 'Perform checks as per feasibility and policy' },
      { step: 3, title: 'Review', description: 'Quality review and exception documentation' },
      { step: 4, title: 'Share', description: 'Share outcome report with clear notes' },
    ],
    benefits: ['Flexible scope', 'Supports onboarding/compliance workflows', 'Consistent outcomes', 'Easy integration into operations'],
  },
  'product-discovery': {
    icon: Search,
    title: 'Product Discovery',
    description: 'Workshops and research to define the right product direction.',
    longDescription: 'We help you reduce risk before writing code. Through discovery workshops, user research, and rapid prototyping, we align stakeholders on goals, prioritize the roadmap, and define an MVP scope that can ship quickly.',
    features: ['Stakeholder Workshops', 'User Interviews', 'Problem Framing', 'MVP Scope & Roadmap', 'Rapid Prototyping', 'Success Metrics'],
    process: [
      { step: 1, title: 'Kickoff', description: 'Align on goals, constraints, and stakeholders' },
      { step: 2, title: 'Research', description: 'Understand users, workflows, and market context' },
      { step: 3, title: 'Prototype', description: 'Validate flows with clickable prototypes' },
      { step: 4, title: 'Plan', description: 'Define MVP scope, milestones, and delivery plan' },
    ],
    benefits: ['Clear scope and roadmap', 'Faster time-to-market', 'Better alignment across teams', 'Reduced delivery risk'],
  },
  'product-design': {
    icon: MapPin,
    title: 'Product Design (UX/UI)',
    description: 'User-centered design for products that are usable and consistent.',
    longDescription: 'From information architecture to polished UI, we design experiences that feel intuitive. We create user flows, wireframes, prototypes, and design systems so engineering teams can ship consistently and faster.',
    features: ['UX Strategy', 'User Flows', 'Wireframes', 'UI Design', 'Design System', 'Interactive Prototypes'],
    process: [
      { step: 1, title: 'Understand', description: 'Map journeys and define UX requirements' },
      { step: 2, title: 'Explore', description: 'Wireframes and multiple solution directions' },
      { step: 3, title: 'Design', description: 'High-fidelity UI with components and states' },
      { step: 4, title: 'Handoff', description: 'Dev-ready specs, assets, and collaboration' },
    ],
    benefits: ['Better user experience', 'Higher conversions', 'Consistent UI across product', 'Faster engineering handoff'],
  },
  'web-development': {
    icon: Briefcase,
    title: 'Web Development',
    description: 'Modern web apps with scalable architecture.',
    longDescription: 'We build fast, accessible web applications with clean front-end architecture and reliable APIs. Whether it’s a customer-facing product or an internal portal, we focus on performance, maintainability, and security.',
    features: ['Frontend Engineering', 'Backend APIs', 'Auth & Roles', 'Performance Optimization', 'Accessibility', 'Analytics Integration'],
    process: [
      { step: 1, title: 'Architecture', description: 'Define stack, data model, and system boundaries' },
      { step: 2, title: 'Build', description: 'Implement features in sprints with demos' },
      { step: 3, title: 'QA', description: 'Test flows, edge cases, and performance' },
      { step: 4, title: 'Launch', description: 'Release with monitoring and rollback plan' },
    ],
    benefits: ['Clean and maintainable code', 'Performance-first builds', 'Secure authentication', 'Scales with growth'],
  },
  'mobile-app-development': {
    icon: FileText,
    title: 'Mobile App Development',
    description: 'iOS and Android apps that users love.',
    longDescription: 'We build mobile apps with great UX and reliable performance. From onboarding to payments to offline workflows, we help teams ship apps that feel fast, stable, and modern.',
    features: ['iOS & Android', 'Offline-first Workflows', 'Push Notifications', 'Analytics', 'App Store/Play Store Release', 'Performance Tuning'],
    process: [
      { step: 1, title: 'Plan', description: 'Define platform scope, devices, and release strategy' },
      { step: 2, title: 'Implement', description: 'Build features with reusable components' },
      { step: 3, title: 'Test', description: 'QA across devices with release checklists' },
      { step: 4, title: 'Release', description: 'Store submission, monitoring, and iteration' },
    ],
    benefits: ['Stable releases', 'Great user experience', 'Faster iteration cycles', 'App-store ready delivery'],
  },
  'custom-software': {
    icon: FileCheck,
    title: 'Custom Software',
    description: 'Tailored software for your workflows.',
    longDescription: 'We design and build custom internal tools and platforms — admin panels, CRMs, operations dashboards, and automation workflows — to reduce manual work and improve visibility across teams.',
    features: ['Admin Panels', 'Role-based Access', 'Workflow Automation', 'Dashboards', 'Integrations', 'Audit Logs'],
    process: [
      { step: 1, title: 'Requirements', description: 'Map workflows and define requirements' },
      { step: 2, title: 'Prototype', description: 'Design screens and validate with users' },
      { step: 3, title: 'Build', description: 'Implement with security and scalability' },
      { step: 4, title: 'Adopt', description: 'Training, rollout, and continuous improvements' },
    ],
    benefits: ['Less manual work', 'Better reporting visibility', 'Fewer operational errors', 'Tools that fit your process'],
  },
  'cloud-devops': {
    icon: Building2,
    title: 'Cloud & DevOps',
    description: 'Reliable infrastructure and delivery pipelines.',
    longDescription: 'We set up cloud infrastructure and CI/CD so releases are safe and repeatable. Monitoring, alerts, backups, and security controls are built in from day one so your product is production-ready.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerts', 'Backups & DR', 'Access Controls', 'Cost Optimization'],
    process: [
      { step: 1, title: 'Audit', description: 'Review current infra, risks, and targets' },
      { step: 2, title: 'Setup', description: 'Implement pipelines, environments, and policies' },
      { step: 3, title: 'Observability', description: 'Add monitoring, logging, and alerting' },
      { step: 4, title: 'Handover', description: 'Runbooks, documentation, and training' },
    ],
    benefits: ['Faster deployments', 'Less downtime', 'Improved security posture', 'Scales with demand'],
  },
  'qa-testing': {
    icon: Receipt,
    title: 'QA & Testing',
    description: 'Testing that improves quality without slowing delivery.',
    longDescription: 'We combine manual QA with automation to reduce regressions and increase confidence. From test strategy to release checklists, we help you ship faster with fewer production issues.',
    features: ['Test Strategy', 'Manual QA', 'Automation', 'Regression Suites', 'Performance Checks', 'Release Checklists'],
    process: [
      { step: 1, title: 'Scope', description: 'Define critical flows and risk areas' },
      { step: 2, title: 'Test', description: 'Manual testing across devices and browsers' },
      { step: 3, title: 'Automate', description: 'Automate stable regression scenarios' },
      { step: 4, title: 'Release', description: 'Quality gates and release confidence' },
    ],
    benefits: ['Fewer bugs in production', 'Higher release confidence', 'Faster feedback loops', 'Better customer experience'],
  },
  'data-ai': {
    icon: Home,
    title: 'Data & AI',
    description: 'Data pipelines, dashboards, and AI integrations.',
    longDescription: 'We help teams turn data into decisions. From analytics dashboards to data pipelines and AI-powered features, we build solutions that are reliable, secure, and measurable.',
    features: ['Dashboards', 'Data Pipelines', 'Event Tracking', 'Data Quality', 'AI Integrations', 'Reporting'],
    process: [
      { step: 1, title: 'Model', description: 'Define metrics, events, and data sources' },
      { step: 2, title: 'Build', description: 'Implement pipelines and data transformations' },
      { step: 3, title: 'Visualize', description: 'Dashboards and insights for teams' },
      { step: 4, title: 'Iterate', description: 'Improve accuracy and expand reporting' },
    ],
    benefits: ['Clear metrics and reporting', 'Better decision-making', 'Reliable pipelines', 'AI features with guardrails'],
  },
  'cybersecurity': {
    icon: Scale,
    title: 'Cybersecurity',
    description: 'Security-first engineering practices.',
    longDescription: 'We strengthen your product security with reviews, hardening, and best practices. Our goal is practical improvements that reduce risk without slowing delivery.',
    features: ['Secure SDLC', 'Security Reviews', 'Secrets & Access Hygiene', 'Hardening', 'Logging & Monitoring', 'Best Practices'],
    process: [
      { step: 1, title: 'Assess', description: 'Identify risk areas and quick wins' },
      { step: 2, title: 'Fix', description: 'Remediate issues and harden configurations' },
      { step: 3, title: 'Validate', description: 'Verify fixes and improve monitoring' },
      { step: 4, title: 'Standardize', description: 'Policies, checklists, and team enablement' },
    ],
    benefits: ['Reduced security risk', 'Better access control', 'Safer releases', 'Improved compliance readiness'],
  },
  'support-maintenance': {
    icon: Users,
    title: 'Support & Maintenance',
    description: 'Keep products reliable after launch.',
    longDescription: 'Launch is just the beginning. We provide ongoing monitoring, upgrades, performance tuning, and feature iterations so your product stays secure, fast, and reliable as you grow.',
    features: ['Monitoring', 'Bug Fixes', 'Upgrades', 'Performance Tuning', 'Security Patching', 'Feature Iterations'],
    process: [
      { step: 1, title: 'Onboard', description: 'Understand the system and set SLAs' },
      { step: 2, title: 'Monitor', description: 'Dashboards, alerts, and incident response' },
      { step: 3, title: 'Improve', description: 'Fix issues and ship iterative improvements' },
      { step: 4, title: 'Optimize', description: 'Performance, cost, and reliability upgrades' },
    ],
    benefits: ['Reduced downtime', 'Continuous improvement', 'Security updates', 'Predictable support'],
  },
  'dedicated-teams': {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'A long-term squad that ships continuously.',
    longDescription: 'Need ongoing delivery capacity? Our dedicated teams blend design, engineering, and QA to integrate with your process. You get predictable velocity, accountability, and product ownership.',
    features: ['Product Manager/BA', 'UX/UI Designer', 'Engineers', 'QA', 'Sprint Planning', 'Ongoing Delivery'],
    process: [
      { step: 1, title: 'Match', description: 'Team composition based on your needs' },
      { step: 2, title: 'Integrate', description: 'Work in your tools, rituals, and cadence' },
      { step: 3, title: 'Deliver', description: 'Plan, build, demo, and ship continuously' },
      { step: 4, title: 'Scale', description: 'Adjust team size as product needs evolve' },
    ],
    benefits: ['Predictable delivery', 'Shared ownership', 'Flexible scaling', 'Lower hiring burden'],
  },
  'api-integrations': {
    icon: Calculator,
    title: 'API & Integrations',
    description: 'Connect your product with the tools you rely on.',
    longDescription: 'We design and implement integrations with third-party platforms — payments, analytics, CRM, messaging, and more — with reliability, observability, and security best practices.',
    features: ['Payments', 'CRM', 'Analytics', 'Webhooks', 'Rate Limiting', 'Observability'],
    process: [
      { step: 1, title: 'Design', description: 'Define contracts, retries, and failure handling' },
      { step: 2, title: 'Implement', description: 'Build integrations with secure auth' },
      { step: 3, title: 'Test', description: 'Sandbox testing and edge-case validation' },
      { step: 4, title: 'Monitor', description: 'Alerts, logs, and dashboards for stability' },
    ],
    benefits: ['Fewer integration failures', 'Better monitoring', 'Secure connections', 'Faster partner onboarding'],
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
            Contact our team for a plan tailored to your verification requirements or IT goals.
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
