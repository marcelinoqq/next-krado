import Slider from "./Slider";

const Feedback = () => {
  return (
    <>
      <div className="bg-[#F0F3F7] mt-[80px] lg:h-[710px]">
        <div className="mb-[60px]">
          <p className="text-center lg:text-[40px] text-[20px] font-bold text-[#333333]">
            Feedback From Our Customer
          </p>
          <p className="text-center text-[15px] font-light text-[#8D8D8D]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </p>
        </div>
        <Slider />
      </div>
    </>
  );
};
export default Feedback;
