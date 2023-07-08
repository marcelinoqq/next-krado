import ExploreButton from "./ExploreButton";
import Image from "next/image";
import head1 from "@/../public/head1.png";
import head2 from "@/../public/head2.png";

const Krado = () => {
  return (
    <>
      <div className="lg:mx-80 lg:flex mt-[80px]">
        <div className="lg:w-1/2">
          <Image src={head1} alt="headphone 1" className="md:mx-auto" />
        </div>

        <div className="lg:w-1/2 my-auto lg:text-start text-center">
          <p className="lg:text-3xl text-xl font-black text-center lg:text-start">
            Krado Came Up With The Latest Technology
          </p>
          <div className="mt-10">
            <p className="text-sm lg:text-start text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>
          </div>
          <div className="mt-10">
            <ExploreButton buttonText="EXPLORE MORE" textColor="text-white" />
          </div>
        </div>
      </div>

      <div className="lg:mx-80 lg:flex hidden">
        <div className="lg:w-1/2 my-auto">
          <p className="text-3xl font-black">
            Krado Came Up With The Latest Technology
          </p>
          <div className="mt-10">
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>
          </div>
          <div className="mt-10">
            <ExploreButton buttonText="EXPLORE MORE" textColor="text-white" />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-end">
          <Image src={head2} alt="headphone 2" />
        </div>
      </div>
    </>
  );
};

export default Krado;
