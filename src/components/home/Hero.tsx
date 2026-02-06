import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, FileSearch, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: FileSearch, delay: 0, className: 'top-20 left-[15%]' },
    { Icon: Shield, delay: 0.5, className: 'top-32 right-[20%]' },
    { Icon: MapPin, delay: 1, className: 'bottom-32 left-[10%]' },
    { Icon: CheckCircle, delay: 1.5, className: 'bottom-20 right-[15%]' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-sky/5 rounded-full blur-3xl translate-x-1/3" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, className }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className={`absolute ${className} hidden lg:block floating-element`}
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="w-16 h-16 glass-card flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>Investigation • Verification • Due Diligence</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Trusted Investigation &{' '}
            <span className="gradient-text">Verification Services</span>{' '}
            Across India
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We maintain high standards of professional work culture and ethics. We execute work on client sites as well as in our office — on assignment or retainership (BPO) basis. Our delivery is supported by secure, IT-enabled reporting (mobile app, real-time tracking, and licensed software).
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary flex items-center gap-2 text-base">
              Request Verification
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-outline text-base">
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-6">How We Work</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                'On-site & Office Execution',
                'Assignment / Retainership (BPO)',
                'Real-time Mobile Reporting',
                'Secure Private Servers',
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground/70"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-background" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,74L1380,74C1320,74,1200,74,1080,74C960,74,840,74,720,74C600,74,480,74,360,74C240,74,120,74,60,74L0,74Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
