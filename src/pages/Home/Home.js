import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Milestones from "../../components/milestones/Milestones";
import News from "../../components/news/News";
import Portfolio from "../../components/portfolio/Portfolio";
import Pricing from "../../components/pricing/Pricing";
import Services from "../../components/services/Services";
import Skills from "../../components/skills/Skills";
import Team from "../../components/team/Team";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Testimonial></Testimonial>
      <News></News>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Team></Team>
      <Skills></Skills>
      <Milestones></Milestones>
      <Contact></Contact>
    </>
  );
};

export default Home;
