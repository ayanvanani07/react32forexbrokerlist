import React from "react";
import Rightimg from "../../../assets/images/right-img.png";
import Blacklayer from "../../../assets/images/black-layer.png";
import { MoveRight } from "lucide-react";

export default function ChoosetheRight() {
  return (
    <section className="max-w-[1640px] mx-auto px-16 max-tab:px-5 max-mobile:px-0 ">
      <div
        style={{ backgroundImage: `url(${Blacklayer})` }}
        className="px-[100px] max-tab:px-10 max-mobile:px-5 max-mobile:rounded-none bg-cover bg-center bg-no-repeat rounded-3xl   "
      >
        <div className="grid grid-cols-[1fr_593px] max-tab:grid-cols-1 items-end">
          <div className="py-[60px]">
            <h2 className="text-[42px] max-mobile:text-3xl max-mobile:mb-2 max-mobile:leading-10 leading-normal text-white font-bold">
              Choose the Right Forex Broker for Your Investment
            </h2>
            <p className="text-lg max-mobile:text-base max-mobile:leading-6 text-white mb-7">
              Compare forex brokers by spread, regulation, platform, and minimum
              deposit. Browse 512+ verified listings completely free. A signup
              is required.
            </p>

            <div className="">
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button transition-all duration-300 border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed max-mobile:text-sm max-mobile:leading-6 border border-black100 hover:bg-primary hover:border-primary hover:text-black100 rounded-full text-base font-medium px-5 gap-2.5 max-mobile:px-6 max-mobile:py-2.5 border-none py-2.5 bg-white text-black100 flex justify-between items-center group">
                <span className=" truncate only:text-center has-[div]:contents">
                  Browse All Brokers
                  <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 bg-black100 ">
                    <MoveRight color="white" />
                  </div>
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-end">
            <img src={Rightimg} alt="Rightimg" className="block" />
          </div>
        </div>
      </div>
    </section>
  );
}
