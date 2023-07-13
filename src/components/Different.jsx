import Image from "next/image";
import headphones1 from "@/../public/headphones1.png";
import headphones2 from "@/../public/headphones2.png";

const images = [{ img: headphones1 }, { img: headphones2 }];

const Different = () => {
  return (
    <>
      <div className="grid justify-center lg:mx-80 mt-[80px]">
        <p className="lg:text-[40px] font-bold text-[18px] text-center">
          Different Colours & Different Choice
        </p>
        <p className="text-[15px] mx-auto text-center">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          offici
        </p>

        <div className="flex mt-[40px] lg:gap-20 gap-10 mx-auto lg:w-full">
          <div className="w-full">
            <Image src={headphones1} alt="headphones1" />
          </div>
          <div className="w-full">
            <Image src={headphones2} alt="headphones2" />
          </div>
          <div className="w-full">
            <Image src={headphones1} alt="headphones1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Different;
