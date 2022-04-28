import Heroe from "../components/Heroe";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import Ourteam from "../components/Ourteam";
import Latestnews from "../components/Latestnews";
import Footer from "../components/Footer";
import Head from "next/head";
import { prefix } from "../utils/prefix";

const Home = () => {
  return (
    <>
      <Head>
        <title>Dogs Care</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <Heroe />
      <Aboutus />
      <Services />
      <Ourteam />
      <Latestnews />
      <Footer />
    </>
  );
};

export default Home;
