import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const offices = [
  {
    city: 'Lucknow',
    type: 'Branch 1',
    address: 'C2/86, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
  },
  {
    city: 'Sonbhadra',
    type: 'Branch 2',
    address: 'MKS Building (2nd Floor), Civil Lines Road, Robertsganj, Sonbhadra, Uttar Pradesh 231216',
  },
  {
    city: 'Kolkata',
    type: 'Branch 3',
    address: '16E, Mondal Temple Lane, New Alipore, Kolkata 700053, West Bengal',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      toast({
        title: 'Email not configured',
        description: 'Please set VITE_WEB3FORMS_ACCESS_KEY on the server and redeploy.',
        variant: 'destructive',
      });
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const serviceLabel = formData.service
      ? formData.service
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ')
      : 'Not selected';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact Form Submission — ${formData.name}`,
          from_name: 'thegtservices.com',
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: serviceLabel,
          message: formData.message,
        }),
      });

      const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || 'Failed to send message');
      }

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err) {
      toast({
        title: 'Failed to send message',
        description: err instanceof Error ? err.message : 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact{' '}
              <span className="gradient-text">GUST TASK</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your verification requirements, checklist scope, and expected turnaround time. We also support IT services and product design for operations and reporting systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="bg-white/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className="bg-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-white/50 text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="investigation">Investigation</option>
                    <option value="address-verification">Address Verification</option>
                    <option value="employment-verification">Employment Verification</option>
                    <option value="bank-statement-verification">Bank Statement Verification</option>
                    <option value="form-16-verification">Form-16 Verification</option>
                    <option value="business-verification">Business Verification</option>
                    <option value="gst-verification">GST Verification</option>
                    <option value="itr-verification">ITR Verification</option>
                    <option value="property-verification">Property Verification</option>
                    <option value="property-valuation">Property Valuation</option>
                    <option value="rcu-fcu-fi-kyc">RCU / FCU / FI / KYC</option>
                    <option value="taxation">Taxation & Compliance</option>
                    <option value="tin-facilitation">TIN Facilitation Services</option>
                    <option value="additional-services">Additional Verification Services</option>
                    <option value="product-discovery">Product Discovery (IT)</option>
                    <option value="product-design">Product Design (UX/UI)</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="qa-testing">QA & Testing</option>
                    <option value="data-ai">Data & AI</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="support-maintenance">Support & Maintenance</option>
                    <option value="dedicated-teams">Dedicated Teams</option>
                    <option value="api-integrations">API & Integrations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements (scope, checklist, locations, TAT)..."
                    rows={5}
                    className="bg-white/50"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+918707615871" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">8707615871 / 8858015871 / 5444297727</p>
                    </div>
                  </a>
                  <a href="mailto:info@thegtservices.com" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">info@thegtservices.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Support</p>
                      <p className="font-medium">Business Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registered Address */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Registered Address</h3>
                <div className="flex items-start gap-4 p-3 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Lucknow, Uttar Pradesh</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      C2/86, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                    </p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-4 p-3 rounded-lg bg-secondary/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{office.city}</p>
                        <p className="text-sm text-muted-foreground">{office.type}</p>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="glass-card p-6 bg-primary text-white">
                <h3 className="text-lg font-semibold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    'Ethical work culture and confidentiality focus',
                    'Assignment / retainership (BPO) delivery model',
                    'Field + office execution with standardized checklists',
                    'IT-enabled real-time reporting and secure server handling',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
