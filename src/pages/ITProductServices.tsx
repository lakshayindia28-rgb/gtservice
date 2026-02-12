import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { itServices } from './ServicesIndex';
import { getServiceImageUrlFromPath, shouldContainServiceImage } from '@/lib/service-images';

const ITProductServices = () => {
  return (
    <Layout>
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
              IT & Product Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Product Design &{' '}
              <span className="gradient-text">IT Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore our IT services to build secure apps, dashboards, portals, and workflows — supporting field operations,
              reporting, and customer experiences.
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
                <Link to={service.path} className="group block h-full glass-card-hover p-8">
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
                  <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/70">
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

export default ITProductServices;
