import Image from "next/image";
import ExploreButton from "./ExploreButton";
import video from "@/../public/video.png";

const Science = () => {
  return (
    <>
      <div className="lg:flex lg:mt-40 mt-[20px]">
        <div className="lg:w-1/2 lg:h-[600px] h-[400px] bg-[#37A000] flex items-center">
          <div className="text-white">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2 mx-auto">
              <p className="lg:text-4xl text-xl font-black lg:text-start text-center">
                The science of today is the technology of tomorrow
              </p>
              <p className="text-lg lg:text-start mt-4 text-center">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inven.
              </p>
              <div className="mt-[20px] text-center lg:text-start">
                <ExploreButton
                  buttonText="LEARN MORE"
                  textColor="text-[#FF4D1C]"
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-[600px] h-[400px] bg-black flex items-center justify-center">
          <p>
            Watch
            <span className="ml-2">
              <Image src={video} alt="video" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Science;
