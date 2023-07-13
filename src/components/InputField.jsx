import React from "react";
import { Input, Button } from "@material-tailwind/react";

const InputField = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="relative flex mx-auto lg:w-[500px] w-[300px]">
      <Input
        type="email"
        label="Enter Your Email Address"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        className="!absolute right-1 top-1 rounded bg-[#FF4D1C]"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default InputField;
