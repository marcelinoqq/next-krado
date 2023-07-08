import Image from "next/image";
import bighead from "@/../public/bighead.png";

const Big = () => {
  return (
    <>
      <div className="lg:flex lg:mx-80">
        <div className="lg:w-1/3 lg:mr-[40px]">
          <Image src={bighead} alt="big headphone" className="md:mx-auto" />
        </div>
        <div className="lg:w-2/3 my-auto">
          <p className="lg:text-[36px] md:text-[30px] text-center lg:text-start font-black lg:w-[60%]">
            Purchase <span className="text-[#FF4D1C]">Krado Headphone</span> For
            $299
          </p>
          <p className="lg:w-[70%] md:text-[12px] lg:mt-[10px] lg:text-[13px] text-[12px] text-center lg:text-start text-[#555555]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Big;
