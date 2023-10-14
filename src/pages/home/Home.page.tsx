import AboutSection from '@components/aboutSection/aboutSection.component';
import AdvantageSection from '@components/advantageSection/advantageSection.component';
import MobileBar from '@components/bar/mobileBar/MobileBar.component';
import Footer from '@components/footer/footer.component';
import Header from '@components/header/header.component';
import PopularProducts from '@components/popularProducts/popularProducts.component';
import SectionContainer from '@components/sectionContainer/sectionContainer.component';
import RootShowProvider from '@providers/showProviders/unitProviders/RootShowProvider';
import { FC } from 'react';
import { Element } from 'react-scroll';
import css from './Home.module.css';

const Home: FC = () => {
  return (
    <RootShowProvider>
      <Header />
      <div id={css.bodyContainer}>
        <Element name="top">
          <SectionContainer />
        </Element>
        <PopularProducts />
        {/* <Element name="delivery">
          <DeliverySection />
        </Element> */}
        <Element name="advantage">
          <AdvantageSection />
        </Element>
        <Element name="about">
          <AboutSection />
        </Element>
        <Footer />
        <MobileBar />
      </div>
    </RootShowProvider>
  );
};

export default Home;
