import InputField from "./InputField";

const Subscribe = () => {
  return (
    <>
      <div className="lg:grid lg:justify-center mt-[80px]">
        <p className="lg:text-[32px] md:text-[28px] text-center text-[20px] font-medium">
          Subscribe To Our Newsletter
        </p>
        <p className="lg:text-[15px] md:text-[16px] text-[12px] mx-auto text-center">
          Be First To Get Latest Updates From Krado
        </p>
        <div className="mt-[40px]">
          <InputField />
        </div>
      </div>
    </>
  );
};

export default Subscribe;
