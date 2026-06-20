import { MoveRight } from "lucide-react";
import BlogImg from "../../../assets/images/screenshot.webp";
import Algologo from "../../../assets/images/algologo.png";
import ArrowExport from "../../../assets/images/arrowExport.svg";
import React from "react";
import ViewMoreBtn from "../../../components/viewMoreBtn";

export default function AlgoTrading() {
  return (
    <section className="pt-[100px] max-mobile:pt-16">
      <div className="max-w-[1640px] mx-auto px-16 max-tab:px-5 max-mobile:px-4">
        <div className="flex max-mobile:block items-center  justify-between pb-12 max-mobile:pb-8">
          <div>
            <h2 className="text-[42px] max-mobile:text-3xl max-mobile:leading-10 leading-normal text-black100 font-bold font-geist">
              Algo Trading & Forex Bot Provider
            </h2>
            <p className="text-lg max-mobile:text-base text-black700 font-medium max-w-[950px] whitespace-pre-line">
              Discover automated forex trading bots and algorithmic strategy
              providers built for passive income, consistent execution, and
              hands-free trading.
            </p>
          </div>
          <div className="max-mobile:pt-4">
            {/* View More btn components */}
            <ViewMoreBtn />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 max-mobile:gap-5 max-tab:grid-cols-1">
          <div className="bg-white rounded-2xl p-4 max-mobile:p-2">
            <div className=" h-[290px] max-mobile:h-auto bg-[#F0F1EC] p-2 max-mobile:p-1 rounded-xl">
              <img
                src={BlogImg}
                alt="BlogImg"
                className="w-full rounded-xl h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-[87px_1fr] gap-5 pt-5 pb-4 border-b border-light800">
              <div className="w-full h-[64px] rounded-lg bg-[#F2F4F7] flex items-center justify-center">
                <div className="h-[40px] flex justify-center">
                  <img
                    src={Algologo}
                    alt="Algologo"
                    className="rounded-[0.375em]   p-[0.1875em] border  object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black100 font-geist">
                  Algomatic Bot
                </h3>
                <p className="text-sm text-black700 font-medium line-clamp-2 font-geist ">
                  Editorial review of Algomatic Bot: regulation, platforms, fees
                  and verdict
                </p>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="pt-4">
                <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button transition-all duration-300 justify-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 rounded-full text-base px-5 max-mobile:px-6 max-mobile:py-2.5 py-2.5 flex items-center bg-[#F0F1EC] text-black100 font-medium w-full gap-2">
                  <span className=" truncate only:text-center has-[div]:contents">
                    Run Bot
                    <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-black100">
                      <MoveRight color="white" />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 max-mobile:p-2">
            <div className=" h-[290px] max-mobile:h-auto bg-[#F0F1EC] p-2 max-mobile:p-1 rounded-xl">
              <img
                src={BlogImg}
                alt="BlogImg"
                className="w-full rounded-xl h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-[87px_1fr] gap-5 pt-5 pb-4 border-b border-light800">
              <div className="w-full h-[64px] rounded-lg bg-[#F2F4F7] flex items-center justify-center">
                <div className="h-[40px] flex justify-center">
                  <img
                    src={Algologo}
                    alt="Algologo"
                    className="rounded-[0.375em]   p-[0.1875em] border  object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black100 font-geist">
                  Algomatic Bot
                </h3>
                <p className="text-sm text-black700 font-medium line-clamp-2 font-geist ">
                  Editorial review of Algomatic Bot: regulation, platforms, fees
                  and verdict
                </p>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="pt-4">
                <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button transition-all duration-300 justify-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 rounded-full text-base px-5 max-mobile:px-6 max-mobile:py-2.5 py-2.5 flex items-center bg-[#F0F1EC] text-black100 font-medium w-full gap-2">
                  <span className=" truncate only:text-center has-[div]:contents">
                    Run Bot
                    <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-black100">
                      <MoveRight color="white" />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 max-mobile:p-2">
            <div className=" h-[290px] max-mobile:h-auto bg-[#F0F1EC] p-2 max-mobile:p-1 rounded-xl">
              <img
                src={BlogImg}
                alt="BlogImg"
                className="w-full rounded-xl h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-[87px_1fr] gap-5 pt-5 pb-4 border-b border-light800">
              <div className="w-full h-[64px] rounded-lg bg-[#F2F4F7] flex items-center justify-center">
                <div className="h-[40px] flex justify-center">
                  <img
                    src={Algologo}
                    alt="Algologo"
                    className="rounded-[0.375em]   p-[0.1875em] border  object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black100 font-geist">
                  Algomatic Bot
                </h3>
                <p className="text-sm text-black700 font-medium line-clamp-2 font-geist ">
                  Editorial review of Algomatic Bot: regulation, platforms, fees
                  and verdict
                </p>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="flex pb-2 last:pb-0 items-center gap-2">
                <img src={ArrowExport} alt="ArrowExport" />
                <p className="text-base font-medium text-black700">
                  <span className="font-bold text-black100">Focus : </span>
                  Gold Arbitrage Opportunities
                </p>
              </div>
              <div className="pt-4">
                <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button transition-all duration-300 justify-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 rounded-full text-base px-5 max-mobile:px-6 max-mobile:py-2.5 py-2.5 flex items-center bg-[#F0F1EC] text-black100 font-medium w-full gap-2">
                  <span className=" truncate only:text-center has-[div]:contents">
                    Run Bot
                    <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-black100">
                      <MoveRight color="white" />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
