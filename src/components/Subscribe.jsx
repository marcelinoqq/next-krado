const Subscribe = () => {
  return (
    <>
      <div className="lg:grid lg:justify-center">
        <p className="lg:text-[40px] md:text-[30px] text-center text-[20px] font-black">
          Subscribe To Our Newsletter
        </p>
        <p className="lg:text-[15px] md:text-[16px] text-[12px] mx-auto text-center">
          Be First To Get Latest Updates From Krado
        </p>
        <div className="lg:flex mt-[40px]">
          <div className="border">
            <input
              className="p-3 border lg:w-[450px]"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#FF4D1C] text-white text-sm font-bold py-4 px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
