import Button from "./Button";

const Discover = () => {
  return (
    <>
      <div className="bg-[#177FF8]">
        <div className="lg:h-[850px] h-[600px] lg:mx-80 flex">
          <div className="lg:w-2/3 my-auto flex flex-col items-center lg:mx-0 md:mx-auto sm:mx-auto lg:items-start justify-center lg:text-start text-center">
            <p className="font-black lg:text-[62px] text-[30px] text-white ">
              Discover The Power Of Great Music
            </p>
            <p className="lg:text-[20px] text-[14px] lg:w-[100%] text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan totam rem aperi.
            </p>
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

export default Discover;
