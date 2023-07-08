import Header from "@/components/Header";
import Discover from "@/components/Discover";
import Technology from "@/components/Technology";
import Science from "@/components/Science";
import Krado from "@/components/Krado";
import Great from "@/components/Great";
import Different from "@/components/Different";
import Big from "@/components/Big";
// import Card from "@/components/Card";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="mx-[5px] md:mx-[10px]">
      <Header />
      <Discover />
      <Technology />
      <Science />
      <Krado />
      <Great />
      <Different />
      <Big />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
