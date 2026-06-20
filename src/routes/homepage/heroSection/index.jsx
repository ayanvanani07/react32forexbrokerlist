import React from "react";
import HeroImage from "../../../assets/images/herobanner.png";
import { ArrowRight, Search } from "lucide-react";
import MarqueeAnimation from "../../../components/marquee";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f0f2ec] min-h-[calc(100dvh-50px)] overflow-hidden pb-4">
      <div className="max-w-[1640px] px-16 mx-auto max-tab:px-5 max-mobile:px-4">
        <div className=" relative overflow-hidden">
          <div className=" relative bg-[#F0F2EC]">
            <div className=" max-w-[800px] max-mobile:pt-[120px] max-tab:pt-[160px] pt-[150px]">
              <div className="bg-white flex items-center gap-1 pr-4 px-2 py-1.5 w-fit rounded-full">
                <div className="py-[3px] px-2.5 text-white text-sm font-normal rounded-full bg-black font-geist">
                  New
                </div>
                <span className="text-base font-medium text-black700 font-geist max-mobile:text-sm">
                  512+ Verified Brokers Listed
                </span>
              </div>
              <h1 className="text-[60px] my-3 font-bold relative z-[9] leading-[70px] font-geist max-w-[700px] max-mobile:text-4xl max-mobile:leading-[45px]">
                Find, Compare & Choose the Best Forex Brokers
              </h1>
              <p className="text-lg max-w-[710px] mb-9 z-[9] relative font-medium text-black700 font-geist max-mobile:text-base max-mobile:mb-5">
                Search and compare 512+ forex brokers by spread, regulation,
                platform, and minimum deposit. Trusted by thousands of traders
                worldwide, completely free.
              </p>
              <div className="flex items-center gap-2 font-geist">
                <button
                  aria-label="find your broker"
                  className="group flex items-center gap-2 text-base font-medium rounded-full py-2.5 px-5 transition-all duration-300 ease-out cursor-pointer bg-black text-white hover:bg-[#A8DD15] hover:text-black"
                >
                  <span>Find Your Broker</span>

                  <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#A8DD15] transition-all duration-300 group-hover:bg-white">
                    <ArrowRight className="text-black transition-all duration w-[20px] h-[20px]" />
                  </div>
                </button>
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full lg:w-auto">
                  <div className="relative w-full sm:w-[250px] lg:w-[320px]">
                    <div className="flex items-center rounded-full px-3 py-2 gap-2 w-full bg-white/10 border border-[#1A1A1A]/20 backdrop-blur-[13.8px] cursor-text">
                      <input
                        type="text"
                        className="bg-transparent text-black100 text-sm placeholder:text-black100/40 outline-none w-full"
                        placeholder="Search Broker ..."
                      />
                      <Search className="lucide lucide-search text-white bg-black100 p-1.5 rounded-full w-8 h-8 shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[50px] relative z-[9] max-mobile:pt-[30px] flex items-center max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-5">
                <div className="pr-[30px] border-r border-light300 max-mobile:px-5 max-mobile:border-none">
                  <h2 className="text-[40px] leading-normal text-black100 font-semibold font-monda text-center  font-geist max-mobile:text-3xl">
                    512+
                  </h2>
                  <p className="text-lg  text-black700 text-center font-medium font-geist max-mobile:text-base">
                    Verified Brokers
                  </p>
                </div>
                <div className="px-[30px] border-r border-light300 max-mobile:px-5 max-mobile:border-none">
                  <h2 className="text-[40px] leading-normal text-black100 font-semibold font-monda text-center  font-geist max-mobile:text-3xl">
                    5,000+
                  </h2>
                  <p className="text-lg  text-black700 text-center font-medium font-geist max-mobile:text-base">
                    Newsletter Members
                  </p>
                </div>
                <div className="pl-[30px] max-mobile:px-5">
                  <h2 className="text-[40px] leading-normal text-black100 font-semibold font-monda text-center font-geist max-mobile:text-3xl">
                    15k+
                  </h2>
                  <p className="text-lg  text-black700 text-center font-medium font-geist max-mobile:text-base">
                    Trader Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 max-mobile:hidden max-tab:flex max-tab:pt-10 max-tab:justify-center max-tab:relative">
        <img
          src={HeroImage}
          alt="HeroImage"
          className="max-w-[900px] block absolute right-0 top-0 z-[0] max-mobile:max-w-full max-mobile:w-full max-tab:max-w-[500px]"
        />
      </div>
    </section>
  );
}
