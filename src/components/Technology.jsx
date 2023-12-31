import React from "react";
import Image from "next/image";
import headphones from "@/../public/headphones.png";
import message from "@/../public/message.png";
import heart from "@/../public/heart.png";
import note from "@/../public/note.png";
import sound from "@/../public/sound.png";
import layer from "@/../public/layer.png";
import smallh from "@/../public/smallh.png";

const Technology = () => {
  const firstThree = [
    {
      image: message,
      title: "Latest Technology",
      text: "Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.",
    },
    {
      image: heart,
      title: "Modern Design",
      text: "Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.",
    },
    {
      image: note,
      title: "Sound Clarity",
      text: "Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.",
    },
  ];

  const secondThree = [
    {
      image: sound,
      title: "Easy To Use",
      text: "Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.",
    },
    {
      image: layer,
      title: "Layered Materials",
      text: "Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.",
    },
    {
      image: smallh,
      title: "Wireless Available",
      text: "Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.",
    },
  ];

  return (
    <>
      <div className="lg:block hidden">
        <div className="text-center mt-[80px]">
          <p className="lg:text-[40px] text-[30px] text-[#333333] text-center font-bold">
            Technology Keeps Moving Forward
          </p>
          <p className="text-[15px]mx-auto text-center text-[#8D8D8D] font-light">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            offici
          </p>
        </div>
        <div className="lg:mx-80 mt-[60px] lg:flex">
          <div className="lg:w-full lg:mx-10">
            {firstThree.map((item, index) => (
              <div key={index} className={index === 1 ? "my-[80px]" : ""}>
                <Image src={item.image} alt="message" />
                <p className="text-[22px] mt-[10px]">{item.title}</p>
                <p className="text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-full">
            <Image
              src={headphones}
              alt="headphones"
              className="lg:w-full w-1/2 mx-auto"
            />
          </div>
          <div className="lg:w-full lg:mx-10">
            {secondThree.map((item, index) => (
              <div key={index} className={index === 1 ? "my-[80px]" : ""}>
                <Image src={item.image} alt="message" />
                <p className="text-[22px] mt-[10px]">{item.title}</p>
                <p className="text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="text-center mt-[80px]">
          <p className="lg:text-[40px] text-[30px] text-[#333333] text-center font-bold">
            Technology Keeps Moving Forward
          </p>
          <p className="text-[15px]mx-auto text-center text-[#8D8D8D] font-light">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            offici
          </p>
        </div>
        <div className="mt-[80px] mx-2">
          <div className="flex gap-3">
            <div className="w-1/2">
              {firstThree.map((item, index) => (
                <div key={item.image}>
                  <div className={`${index === 1 ? "my-[20px]" : ""}`}>
                    <Image src={item.image} alt={item.title} />
                    <p className="text-[16px] font-medium">{item.title}</p>
                    <p className="text-[13px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-1/2">
              {secondThree.map((item, index) => (
                <div key={item.image}>
                  <div className={`${index === 1 ? "my-[20px]" : ""}`}>
                    <Image src={item.image} alt={item.title} />
                    <p className="text-[16px] font-medium">{item.title}</p>
                    <p className="text-[13px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={headphones}
            alt="headphones"
            className="lg:w-full w-1/2 mx-auto mt-[40px]"
          />
        </div>
      </div>
    </>
  );
};

export default Technology;
