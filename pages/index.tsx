import type { NextPage } from 'next';
import About from '../components/organisms/About';
import Blog from '../components/organisms/Blog';
import Client from '../components/organisms/Client';
import Contact from '../components/organisms/Contact';
import Hero from '../components/organisms/Hero';
import Portfolio from '../components/organisms/Portfolio';
import Service from '../components/organisms/Service';
import Layout from '../Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Client />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default Home;
