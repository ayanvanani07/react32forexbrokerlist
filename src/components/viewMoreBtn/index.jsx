import { MoveRight } from "lucide-react";
import React from "react";

export default function ViewMoreBtn() {
  return (
    <button className="group flex items-center gap-2 hover:bg-[#A8DD15] hover:text-black font-medium rounded-full py-2.5 px-5 transition-all duration-300 ease-out cursor-pointer bg-black text-white ">
      <span className=" ">View More</span>
      <div>
        <MoveRight />
      </div>
    </button>
  );
}
