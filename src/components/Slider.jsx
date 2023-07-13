import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import square from "@/../public/square.png";

const Slider = () => {
  const carouselData = [
    {
      image: square,
      name: "Micheal Doe",
      location: "Sydney, Australia",
      description:
        "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem.",
    },
    {
      image: square,
      name: "Elina Doe",
      location: "Sydney, Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: square,
      name: "Williams Doe",
      location: "Sydney, Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <Carousel transition={{ duration: 1 }}>
        {carouselData.map((item, index) => (
          <div className="lg:mx-80" key={index}>
            <div className="flex">
              <Image src={item.image} alt="square" className="w-[30%]" />
              <p className="lg:text-[40px] text-[20px] lg:w-[30%] w-[50%] my-auto ml-5">
                {item.name} {item.location}
              </p>
            </div>
            <p className="lg:text-[20px] text-[10px] lg:w-[40%] mt-[10px]">
              {item.description}
            </p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
