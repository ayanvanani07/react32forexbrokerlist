import React from "react";
import CardImg from "../../../assets/images/cardImg.png";
import ArrowExport from "../../../assets/images/arrowExport.svg";
import GreenTick from "../../../assets/images/greenTick.svg";
import { MoveRight } from "lucide-react";
import ViewMoreBtn from "../../../components/viewMoreBtn";

export default function ForexBridge() {
  return (
    <section className="py-[100px] max-mobile:py-16">
      <div className="max-w-[1640px] px-16 mx-auto  max-tab:px-5 max-mobile:px-4">
        <div className="flex items-center max-mobile:block justify-between pb-12 max-mobile:pb-8">
          <div>
            <h2 className="text-[42px] max-mobile:text-3xl max-mobile:leading-10 leading-normal text-black100 font-bold font-monda">
              Forex Bridge & Plugin Technology Partners
            </h2>
            <p className="text-lg max-mobile:text-base text-black700 font-medium max-w-[650px] whitespace-pre-line">
              Discover trusted bridge and plugin technology partners used by
              512+ forex brokers worldwide. Compare features, integrations, and
              infrastructure solutions in one place.
            </p>
          </div>
          {/* View More btn components */}
          <ViewMoreBtn />
        </div>
        <div className="grid grid-cols-3 max-mobile:grid-cols-1 max-mobile:gap-8 max-tab:grid-cols-2 max-tab:gap-6 gap-6 max-laptop:gap-6">
          <div className="rounded-[16px] p-4 rounded-xl relative px-5 py-7 bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.04)]">
            <div className="bg-[#f0f2ec] w-[128px] h-[128px] rounded-full absolute -right-[26px] -top-[26px] flex items-center justify-center pointer-events-none">
              <div className="w-[97px] h-[97px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.05)] pointer-events-auto border-[0.5px] border-gray-100 overflow-hidden p-3">
                <img
                  src={CardImg}
                  alt="cardImg"
                  className="size-9 rounded-[0.375em] dark:mix-blend-normal !size-auto max-w-full max-h-full object-contain mix-blend-normal"
                />
              </div>
            </div>
            <div className="w-fit text-[11px] text-black700 font-medium px-2.5 py-[3px] rounded-full bg-[#f4f5f0] relative z-10">
              Bridge Technology
            </div>
            <h3 className="text-2xl font-semibold text-black mt-2">Prime XM</h3>
            <p className="text-base text-black700 font-medium mb-5 line-clamp-2 min-h-[48px]">
              Ultra-Low Latency Bridge
            </p>
            <ul className="flex flex-col gap-4 pb-5">
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                XCore execution engine
              </li>
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                Multi-venue order aggregation
              </li>
            </ul>
            <div className="py-1.5 px-2.5 text-sm text-black700 font-medium border  border-gray800 bg-white rounded-full w-fit flex items-center gap-2">
              <img src={GreenTick} alt="GreenTick" />
              Trusted by global brokers
            </div>
            <div className="pt-5">
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full text-base font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 w-full justify-center gap-2.5 py-2 group/button">
                <span className="">View Integration</span>
                <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                  <MoveRight />
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-[16px] p-4 rounded-xl relative px-5 py-7 bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.04)]">
            <div className="bg-[#f0f2ec] w-[128px] h-[128px] rounded-full absolute -right-[26px] -top-[26px] flex items-center justify-center pointer-events-none">
              <div className="w-[97px] h-[97px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.05)] pointer-events-auto border-[0.5px] border-gray-100 overflow-hidden p-3">
                <img
                  src={CardImg}
                  alt="cardImg"
                  className="size-9 rounded-[0.375em] dark:mix-blend-normal !size-auto max-w-full max-h-full object-contain mix-blend-normal"
                />
              </div>
            </div>
            <div className="w-fit text-[11px] text-black700 font-medium px-2.5 py-[3px] rounded-full bg-[#f4f5f0] relative z-10">
              Bridge Technology
            </div>
            <h3 className="text-2xl font-semibold text-black mt-2">Prime XM</h3>
            <p className="text-base text-black700 font-medium mb-5 line-clamp-2 min-h-[48px]">
              Ultra-Low Latency Bridge
            </p>
            <ul className="flex flex-col gap-4 pb-5">
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                XCore execution engine
              </li>
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                Multi-venue order aggregation
              </li>
            </ul>
            <div className="py-1.5 px-2.5 text-sm text-black700 font-medium border  border-gray800 bg-white rounded-full w-fit flex items-center gap-2">
              <img src={GreenTick} alt="GreenTick" />
              Trusted by global brokers
            </div>
            <div className="pt-5">
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full text-base font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 w-full justify-center gap-2.5 py-2 group/button">
                <span className="">View Integration</span>
                <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                  <MoveRight />
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-[16px] p-4 rounded-xl relative px-5 py-7 bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.04)]">
            <div className="bg-[#f0f2ec] w-[128px] h-[128px] rounded-full absolute -right-[26px] -top-[26px] flex items-center justify-center pointer-events-none">
              <div className="w-[97px] h-[97px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.05)] pointer-events-auto border-[0.5px] border-gray-100 overflow-hidden p-3">
                <img
                  src={CardImg}
                  alt="cardImg"
                  className="size-9 rounded-[0.375em] dark:mix-blend-normal !size-auto max-w-full max-h-full object-contain mix-blend-normal"
                />
              </div>
            </div>
            <div className="w-fit text-[11px] text-black700 font-medium px-2.5 py-[3px] rounded-full bg-[#f4f5f0] relative z-10">
              Bridge Technology
            </div>
            <h3 className="text-2xl font-semibold text-black mt-2">Prime XM</h3>
            <p className="text-base text-black700 font-medium mb-5 line-clamp-2 min-h-[48px]">
              Ultra-Low Latency Bridge
            </p>
            <ul className="flex flex-col gap-4 pb-5">
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                XCore execution engine
              </li>
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                Multi-venue order aggregation
              </li>
            </ul>
            <div className="py-1.5 px-2.5 text-sm text-black700 font-medium border  border-gray800 bg-white rounded-full w-fit flex items-center gap-2">
              <img src={GreenTick} alt="GreenTick" />
              Trusted by global brokers
            </div>
            <div className="pt-5">
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full text-base font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 w-full justify-center gap-2.5 py-2 group/button">
                <span className="">View Integration</span>
                <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                  <MoveRight />
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-[16px] p-4 rounded-xl relative px-5 py-7 bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.04)]">
            <div className="bg-[#f0f2ec] w-[128px] h-[128px] rounded-full absolute -right-[26px] -top-[26px] flex items-center justify-center pointer-events-none">
              <div className="w-[97px] h-[97px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.05)] pointer-events-auto border-[0.5px] border-gray-100 overflow-hidden p-3">
                <img
                  src={CardImg}
                  alt="cardImg"
                  className="size-9 rounded-[0.375em] dark:mix-blend-normal !size-auto max-w-full max-h-full object-contain mix-blend-normal"
                />
              </div>
            </div>
            <div className="w-fit text-[11px] text-black700 font-medium px-2.5 py-[3px] rounded-full bg-[#f4f5f0] relative z-10">
              Bridge Technology
            </div>
            <h3 className="text-2xl font-semibold text-black mt-2">Prime XM</h3>
            <p className="text-base text-black700 font-medium mb-5 line-clamp-2 min-h-[48px]">
              Ultra-Low Latency Bridge
            </p>
            <ul className="flex flex-col gap-4 pb-5">
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                XCore execution engine
              </li>
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                Multi-venue order aggregation
              </li>
            </ul>
            <div className="py-1.5 px-2.5 text-sm text-black700 font-medium border  border-gray800 bg-white rounded-full w-fit flex items-center gap-2">
              <img src={GreenTick} alt="GreenTick" />
              Trusted by global brokers
            </div>
            <div className="pt-5">
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full text-base font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 w-full justify-center gap-2.5 py-2 group/button">
                <span className="">View Integration</span>
                <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                  <MoveRight />
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-[16px] p-4 rounded-xl relative px-5 py-7 bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.04)]">
            <div className="bg-[#f0f2ec] w-[128px] h-[128px] rounded-full absolute -right-[26px] -top-[26px] flex items-center justify-center pointer-events-none">
              <div className="w-[97px] h-[97px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.05)] pointer-events-auto border-[0.5px] border-gray-100 overflow-hidden p-3">
                <img
                  src={CardImg}
                  alt="cardImg"
                  className="size-9 rounded-[0.375em] dark:mix-blend-normal !size-auto max-w-full max-h-full object-contain mix-blend-normal"
                />
              </div>
            </div>
            <div className="w-fit text-[11px] text-black700 font-medium px-2.5 py-[3px] rounded-full bg-[#f4f5f0] relative z-10">
              Bridge Technology
            </div>
            <h3 className="text-2xl font-semibold text-black mt-2">Prime XM</h3>
            <p className="text-base text-black700 font-medium mb-5 line-clamp-2 min-h-[48px]">
              Ultra-Low Latency Bridge
            </p>
            <ul className="flex flex-col gap-4 pb-5">
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                XCore execution engine
              </li>
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                Multi-venue order aggregation
              </li>
            </ul>
            <div className="py-1.5 px-2.5 text-sm text-black700 font-medium border  border-gray800 bg-white rounded-full w-fit flex items-center gap-2">
              <img src={GreenTick} alt="GreenTick" />
              Trusted by global brokers
            </div>
            <div className="pt-5">
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full text-base font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 w-full justify-center gap-2.5 py-2 group/button">
                <span className="">View Integration</span>
                <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                  <MoveRight />
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-[16px] p-4 rounded-xl relative px-5 py-7 bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.04)]">
            <div className="bg-[#f0f2ec] w-[128px] h-[128px] rounded-full absolute -right-[26px] -top-[26px] flex items-center justify-center pointer-events-none">
              <div className="w-[97px] h-[97px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.05)] pointer-events-auto border-[0.5px] border-gray-100 overflow-hidden p-3">
                <img
                  src={CardImg}
                  alt="cardImg"
                  className="size-9 rounded-[0.375em] dark:mix-blend-normal !size-auto max-w-full max-h-full object-contain mix-blend-normal"
                />
              </div>
            </div>
            <div className="w-fit text-[11px] text-black700 font-medium px-2.5 py-[3px] rounded-full bg-[#f4f5f0] relative z-10">
              Bridge Technology
            </div>
            <h3 className="text-2xl font-semibold text-black mt-2">Prime XM</h3>
            <p className="text-base text-black700 font-medium mb-5 line-clamp-2 min-h-[48px]">
              Ultra-Low Latency Bridge
            </p>
            <ul className="flex flex-col gap-4 pb-5">
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                XCore execution engine
              </li>
              <li className="flex items-center gap-3 text-base text-black700 font-medium">
                <img src={ArrowExport} alt="arrowExport" />
                Multi-venue order aggregation
              </li>
            </ul>
            <div className="py-1.5 px-2.5 text-sm text-black700 font-medium border  border-gray800 bg-white rounded-full w-fit flex items-center gap-2">
              <img src={GreenTick} alt="GreenTick" />
              Trusted by global brokers
            </div>
            <div className="pt-5">
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full text-base font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 w-full justify-center gap-2.5 py-2 group/button">
                <span className="">View Integration</span>
                <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                  <MoveRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
