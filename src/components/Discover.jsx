import ExploreButton from "./ExploreButton";

const Discover = () => {
  return (
    <>
      <div className="bg-[#177FF8]">
        <div className="lg:mx-80">
          <div className="lg:flex lg:h-[850px]">
            <div className="lg:w-1/2 my-auto lg:text-start text-center">
              <p className="lg:text-[62px] text-[17px] lg:text-start font-black text-white leading-tight">
                Discover The Power Of Great Music
              </p>
              <p className="lg:text-[20px] text-[16px] lg:text-start mt-[10px] text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan totam rem aperi.
              </p>
              <div className="mt-[20px]">
                <ExploreButton
                  buttonText="PURCHASE NOW"
                  textColor="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
