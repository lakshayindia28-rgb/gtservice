import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Investigation', path: '/services/investigation' },
    { name: 'Address Verification', path: '/services/address-verification' },
    { name: 'Employment Verification', path: '/services/employment-verification' },
    { name: 'RCU / FCU / FI / KYC', path: '/services/rcu-fcu-fi-kyc' },
    { name: 'Product Design (UX/UI)', path: '/services/product-design' },
    { name: 'Web Development', path: '/services/web-development' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Network', path: '/network' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto container-padding relative">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">GUST TASK</h3>
                <p className="text-xs text-white/60">Services Pvt. Ltd.</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We maintain high standards of professional work culture and ethics. Services available on assignment or retainership (BPO) basis, delivered with secure and technology-first processes.
            </p>
            <div className="flex items-center gap-2 text-gold font-medium text-sm">
              <span>24×7 Technical Support</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  C2/86 Vibhuti Khand, Gomti Nagar, Lucknow – 226010
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  8707615871 / 8858015871 / 5444297727
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  info@thegtservices.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Gust Task Services Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/40 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
