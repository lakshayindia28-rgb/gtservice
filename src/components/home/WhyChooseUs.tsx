import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Professional Ethics',
    description: 'High standards of professional work culture and ethics in every assignment.',
    stat: '100%',
    statLabel: 'Integrity',
  },
  {
    icon: Clock,
    title: 'Quality & TAT Focus',
    description: 'Training and motivational sessions at regular intervals to maintain quality and turnaround time.',
    stat: 'TAT',
    statLabel: 'Driven',
  },
  {
    icon: Users,
    title: 'Assignment or Retainer (BPO)',
    description: 'Services available on assignment basis or retainership (Business Process Outsourcing).',
    stat: 'BPO',
    statLabel: 'Ready',
  },
  {
    icon: Award,
    title: 'On-site + Office Execution',
    description: 'We execute work on client sites as well as in our office — as per requirement.',
    stat: 'Hybrid',
    statLabel: 'Delivery',
  },
  {
    icon: CheckCircle,
    title: 'Mobile App Reporting',
    description: 'Real-time reporting with photo capture and Google map tracking for 100% monitoring.',
    stat: 'Live',
    statLabel: 'Tracking',
  },
  {
    icon: TrendingUp,
    title: 'Secure IT Practices',
    description: 'Secure private servers and only licensed/certified software for operational continuity.',
    stat: '24×7',
    statLabel: 'Support',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Partner in{' '}
              <span className="gradient-text-gold">Verified Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We deliver investigation and verification with a disciplined operating model — supported by IT infrastructure for secure, trackable, and auditable reporting.
            </p>

            {/* Stats Highlight */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-1">On-site</div>
                <div className="text-xs text-muted-foreground">Execution</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gold/5">
                <div className="text-3xl font-bold text-gold mb-1">BPO</div>
                <div className="text-xs text-muted-foreground">Retainer Model</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-sky/5">
                <div className="text-3xl font-bold text-sky mb-1">Live</div>
                <div className="text-xs text-muted-foreground">Reporting</div>
              </div>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-5 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <span className="text-xl font-bold text-primary">{feature.stat}</span>
                      <span className="text-xs text-muted-foreground ml-2">{feature.statLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
