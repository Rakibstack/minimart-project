import React from 'react';
import HeroSection from './components/Home/HeroSection';
import TrustSection from './components/Home/TrustSection';
import FeaturesSection from './FeaturesSection';
import ProductCategories from './components/Home/ProductCategori';
import FeaturedProducts from './components/Home/FeatureProduct';
import WhyChooseUs from './components/Home/WhyChoseSection';
import CTASection from './components/Home/CtaButton';

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