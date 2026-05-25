import { Helmet } from 'react-helmet-async';
import Hero from '../component/Home/Hero.jsx';
import AboutPreview from '../component/Home/AboutPreview.jsx';
import ServicesPreview from '../component/Home/ServicesPreview.jsx';
import ProjectsPreview from '../component/Home/ProjectsProview.jsx';
import WhyChooseUs from '../component/Home/WhyChooseUs.jsx';
import Testimonials from '../component/Home/Testimonials.jsx';
import CTA from '../component/Home/CTA.jsx';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Curve Brand | Premium Construction & Interior Design</title>
      </Helmet>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}