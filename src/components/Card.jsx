import Image from "next/image";
import card1 from "@/../public/card1.png";
import card2 from "@/../public/card2.png";
import card3 from "@/../public/card3.png";
import card4 from "@/../public/card4.png";
import card5 from "@/../public/card5.png";

const Card = () => {
  const images = [card1, card2, card3, card4, card2, card5];

  return (
    <div className="bg-[#F6F6F6] mt-[80px]">
      <div className="flex flex-wrap py-10 lg:h-[210px] lg:mx-80">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6 my-auto flex justify-center"
          >
            <div className="flex items-center py-3">
              <Image src={src} alt={`card${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
