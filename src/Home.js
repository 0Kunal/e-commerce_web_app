import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Categories from "./components/Categories";

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <>
      <HeroSection myData={data} />
      {/* <FeatureProduct /> */}
      <Categories />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
