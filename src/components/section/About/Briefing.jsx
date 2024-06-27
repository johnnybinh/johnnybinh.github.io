import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import IU_Logo from "../../../../src/assets/IU_Logo.png";

const Briefing = () => {
  return (
    <div className="flex justify-center p-10 px-32 h-full w-full gap-4">
      <Card className="w-4/5">
        <CardHeader>
          <CardTitle className="text-3xl">Experience</CardTitle>
          <CardContent className="pt-10">
            <h1 className="text-4xl mt-4">~1 Year</h1>
            <h1 className="text-4xl mt-4">Software development</h1>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className="w-4/5">
        <CardHeader>
          <CardTitle className="text-3xl">Education</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center  gap-2">
          <CardTitle>Computer Science Undergraduate</CardTitle>
          <img src={IU_Logo} alt="iu logo" className=" size-32" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Briefing;
