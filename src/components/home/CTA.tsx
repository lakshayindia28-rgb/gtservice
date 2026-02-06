import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started with{' '}
            <span className="text-gold">Trusted Services</span>?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Investigation & verification services, due diligence, and technology-driven reporting — plus IT services like product design and software development when you need to build internal tools or customer apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-all"
            >
              Explore Services
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="tel:+918707615871" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>8707615871</span>
            </a>
            <a href="mailto:info@thegtservices.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>info@thegtservices.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
