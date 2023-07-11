import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function InputField() {
  return (
    <div className="relative flex w-full max-w-[24rem] mx-auto">
      <Input
        type="email"
        placeholder="Enter Your Email"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button size="sm" className="!absolute bg-primary right-1 top-1 rounded">
        Invite
      </Button>
    </div>
  );
}
