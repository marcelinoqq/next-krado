import Image from "next/image";
import footer from "@/../public/footer.png";
import circle from "@/../public/circle.png";
import circle1 from "@/../public/circle1.png";

const icons = [circle, circle1, circle, circle, circle];

const Footer = () => {
  return (
    <div className="lg:h-[520px] h-[260px] bg-[#F4F4F4] mt-[80px] flex justify-center items-center">
      <div className="lg:mx-80">
        <div className="grid justify-center text-center">
          <div className="flex flex-col items-center">
            <Image src={footer} alt="footer" />
            <p className="lg:text-[56px] text-[40px] font-black">KRADO</p>
            <div className="flex gap-4">
              {icons.map((icon, index) => (
                <Image key={index} src={icon} alt={`circle-${index}`} />
              ))}
            </div>
            <p className="text-[14px] mt-[20px] font-semibold">
              © 2019 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
