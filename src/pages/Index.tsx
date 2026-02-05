import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Industries from '@/components/home/Industries';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <CTA />
    </Layout>
  );
};

export default Index;
