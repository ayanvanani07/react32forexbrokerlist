import React from "react";
import ProfileGroup from "../../../assets/images/profile-group.svg";
import { CirclePlus, MoveRight } from "lucide-react";

export default function FAQ() {
  return (
    <section className="py-[100px] max-mobile:py-16">
      <div className="max-w-[1640px] mx-auto px-16 max-tab:px-5 max-mobile:px-4">
        <div className="grid grid-cols-[650px_1fr] max-tab:grid-cols-1 max-laptop:grid-cols-2 max-laptop:gap-10 gap-20">
          <div>
            <div className="pb-[50px] max-mobile:pb-8">
              <h2 className="text-[42px] max-mobile:text-3xl max-mobile:leading-10 leading-normal text-black100 font-bold font-geist">
                Frequently Asked Questions
              </h2>
              <p className="text-lg max-mobile:text-base text-black700 font-medium leading-normal">
                Got questions about forex brokers or our directory? Find quick
                answers below.
              </p>
            </div>
            <div className="max-w-[560px] max-mobile:rounded-xl max-mobile:p-5 w-full blue-blure-shade overflow-hidden relative rounded-[20px] border border-[rgba(18,18,18,0.1)] bg-white shadow-[0_0_26px_0_rgba(0,0,0,0.05)] backdrop-blur-[15.6px] p-[30px]">
              <img src={ProfileGroup} alt="ProfileGroup" />
              <div className="ProfileGroup">
                <h3 className="text-2xl max-mobile:text-xl max-mobile:leading-8 font-semibold text-black100 mb-3">
                  Still confused? We’ll guide you.
                </h3>
                <p className="text-lg max-mobile:text-base text-black800 font-normal mb-5">
                  Our team will help you create your first AI fashion visuals
                  and set up the perfect workflow for your store — step by step.
                </p>
              </div>
              <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center justify-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full text-base font-medium max-mobile:px-6 max-mobile:py-2.5 py-2.5 px-5 gap-2.5 group">
                <span className=" truncate only:text-center has-[div]:contents">
                  Contact Us
                  <div className="w-7 h-7 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                    <MoveRight />
                  </div>
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="p-5 max-mobile:rounded-xl max-mobile:p-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white shadow-[0_0_80px_0_rgba(0,0,0,0.06)]">
              <div className="space-y-3">
                <div className="border border-[#E7E7E7] rounded-[12px] bg-white overflow-hidden transition-all">
                  <h3 className="flex w-full">
                    <button className="group flex flex-1 items-center justify-between gap-4 p-4 text-lg tracking-[-0.15px] font-semibold text-black100 transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-left">
                      How do I find the right forex broker?
                      <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]  text-[#6B857D]">
                        <CirclePlus />
                      </div>
                    </button>
                  </h3>
                </div>
                <div className="border border-[#E7E7E7] rounded-[12px] bg-white overflow-hidden transition-all">
                  <h3 className="flex w-full">
                    <button className="group flex flex-1 items-center justify-between gap-4 p-4 text-lg tracking-[-0.15px] font-semibold text-black100 transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-left">
                      How do I find the right forex broker?
                      <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]  text-[#6B857D]">
                        <CirclePlus />
                      </div>
                    </button>
                  </h3>
                </div>
                <div className="border border-[#E7E7E7] rounded-[12px] bg-white overflow-hidden transition-all">
                  <h3 className="flex w-full">
                    <button className="group flex flex-1 items-center justify-between gap-4 p-4 text-lg tracking-[-0.15px] font-semibold text-black100 transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-left">
                      How do I find the right forex broker?
                      <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]  text-[#6B857D]">
                        <CirclePlus />
                      </div>
                    </button>
                  </h3>
                </div>
                <div className="border border-[#E7E7E7] rounded-[12px] bg-white overflow-hidden transition-all">
                  <h3 className="flex w-full">
                    <button className="group flex flex-1 items-center justify-between gap-4 p-4 text-lg tracking-[-0.15px] font-semibold text-black100 transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-left">
                      How do I find the right forex broker?
                      <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]  text-[#6B857D]">
                        <CirclePlus />
                      </div>
                    </button>
                  </h3>
                </div>
                <div className="border border-[#E7E7E7] rounded-[12px] bg-white overflow-hidden transition-all">
                  <h3 className="flex w-full">
                    <button className="group flex flex-1 items-center justify-between gap-4 p-4 text-lg tracking-[-0.15px] font-semibold text-black100 transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-left">
                      How do I find the right forex broker?
                      <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]  text-[#6B857D]">
                        <CirclePlus />
                      </div>
                    </button>
                  </h3>
                </div>
                <div className="border border-[#E7E7E7] rounded-[12px] bg-white overflow-hidden transition-all">
                  <h3 className="flex w-full">
                    <button className="group flex flex-1 items-center justify-between gap-4 p-4 text-lg tracking-[-0.15px] font-semibold text-black100 transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-left">
                      How do I find the right forex broker?
                      <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]  text-[#6B857D]">
                        <CirclePlus />
                      </div>
                    </button>
                  </h3>
                </div>
                <div className="border border-[#E7E7E7] rounded-[12px] bg-white overflow-hidden transition-all">
                  <h3 className="flex w-full">
                    <button className="group flex flex-1 items-center justify-between gap-4 p-4 text-lg tracking-[-0.15px] font-semibold text-black100 transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-left">
                      How do I find the right forex broker?
                      <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]  text-[#6B857D]">
                        <CirclePlus />
                      </div>
                    </button>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
