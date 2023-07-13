import Button from "./Button";

const Great = () => {
  return (
    <>
      <div className="bg-[#5DCAE1] mt-[80px]">
        <div className="lg:h-[620px] h-[450px] lg:mx-80 flex">
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center my-auto">
            <p className="font-black lg:text-[42px] text-[30px] text-[#333333] text-center lg:text-start">
              The Krado Is a Great Way To Get On The Music
            </p>
            <p className="lg:text-[16px] text-[14px] text-[#333333] text-center lg:text-start">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo nemo enim ipsam voluptat.
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

export default Great;
