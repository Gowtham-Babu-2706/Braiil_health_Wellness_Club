import Hero from "./Hero";
import Courses from "./Courses";
import Gallery from "./Gallery";
import About from "./About"
const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Courses />
      <Gallery />
    </>
  );
};

export default Home;