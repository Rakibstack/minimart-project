import React from 'react';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import FeaturesSection from './FeaturesSection';
import ProductCategories from './components/ProductCategori';
import FeaturedProducts from './components/FeatureProduct';
import WhyChooseUs from './components/WhyChoseSection';
import CTASection from './components/CtaButton';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <TrustSection></TrustSection>
      <FeaturesSection></FeaturesSection>
      <ProductCategories></ProductCategories>
      <FeaturedProducts></FeaturedProducts>
      <WhyChooseUs></WhyChooseUs>
      <CTASection></CTASection>
    </div>
  );
};

export default HomePage;