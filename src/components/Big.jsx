import Image from "next/image";
import bighead from "@/../public/bighead.png";
import Button from "./Button";

const Big = () => {
  return (
    <>
      <div className="lg:flex lg:mx-80 mt-[80px]">
        <div className="lg:w-1/3 lg:mr-[40px]">
          <Image
            src={bighead}
            alt="big headphone"
            className="mx-auto lg:w-full w-1/2"
          />
        </div>
        <div className="lg:w-2/3 flex flex-col items-center lg:items-start justify-center my-auto">
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
          <div className="flex">
            <Button
              buttonText="PURCHASE NOW"
              className="mt-[20px] text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Big;
