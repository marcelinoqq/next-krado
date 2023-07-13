const Button = ({ buttonText, className, textColor }) => {
  return (
    <>
      <button
        className={`bg-[#FF4D1C] text-[14px] font-bold py-2 px-4 rounded-full ${className}`}
      >
        <span className={textColor}>{buttonText}</span>
      </button>
    </>
  );
};

export default Button;
