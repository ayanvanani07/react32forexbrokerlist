import { ChevronLeft, ChevronRight, MoveRight, Users } from "lucide-react";
import EdufinsImg from "../../../assets/images/edufinsIMg.webp";
import LogoFour from "../../../assets/images/logo4.png";
import Star from "../../../assets/images/star.svg";
import React from "react";

export default function LearnForex() {
  return (
    <section className="bg-black100 py-[50px] max-mobile:py-16 overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-16 max-tab:px-5 max-mobile:px-4">
        <div className="flex items-center max-tab:block justify-between gap-10">
          <div className=" max-tab:max-w-full max-w-[550px] shrink-0">
            <h2 className="text-[42px] max-mobile:text-3xl max-mobile:leading-10 leading-normal text-white font-bold font-geist mb-2">
              Learn Forex Trading - Top Education Platforms & Courses
            </h2>
            <p className="text-lg max-mobile:text-base text-white700 font-medium mb-3 last:mb-0">
              The forex market rewards those who invest in their knowledge
              first. Our directory features hand-picked forex education
              platforms and trading academies trusted by thousands of active
              traders worldwide.
            </p>
            <p className="text-lg max-mobile:text-base text-white700 font-medium mb-3 last:mb-0">
              Compare course formats, student reviews, pricing, and
              specializations, whether you prefer self-paced online learning,
              live mentorship, or structured trading programs. Start with
              confidence, backed by verified reviews and transparent listings.
            </p>
            <div className="pt-12">
              <a
                href="-"
                className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center justify-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed max-mobile:text-sm max-mobile:leading-6 border border-black100 hover:bg-[#A8DD15] hover:border-[#A8DD15] hover:text-black100 text-base font-medium gap-2.5 max-mobile:px-6 max-mobile:py-2.5 border-none py-2.5 px-6 rounded-full bg-white text-black100"
              >
                <span className=" truncate only:text-center has-[div]:contents">
                  Start Learning
                  <div>
                    <MoveRight />
                  </div>
                </span>
              </a>
            </div>
          </div>
          <div className="w-full relative h-[550px] max-mobile:h-[450px] max-tab:max-w-full flex items-center justify-center overflow-hidden max-w-[calc(100%-650px)] max-laptop:max-w-[calc(100%-550px)]">
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="absolute left-[50%] top-[30px] w-[380px] max-mobile:w-[280px] rounded-[16px] max-mobile:rounded-lg bg-[#515151] shadow-[0_0_78px_0_rgba(26,26,26,0.5),inset_0_0_8.3px_0_rgba(0,0,0,0.25)] max-mobile:p-2 p-3 flex flex-col"
                style={{
                  opacity: 1,
                  zIndex: 10,
                  transform: "translateX(calc(-50% + 0px))",
                }}
              >
                <div className="mb-2">
                  <img
                    src={EdufinsImg}
                    alt="EdufinsImg"
                    className="block rounded-2xl w-full h-[200px] object-cover"
                  />
                </div>
                <div className=" relative z-20 rounded-[14.774px] bg-[#1A1A1A] shadow-[0_0_27.887px_0_rgba(0,0,0,0.1)] p-4">
                  <div className="absolute -top-[42px] right-4 w-[84px] h-[84px] rounded-full bg-white shadow-[0_0_30px_rgba(255,215,0,0.25)] z-30 flex items-center justify-center p-1.5 border-[3px] border-[rgba(255,255,255,0.1)]">
                    <img
                      src={LogoFour}
                      className="size-9 mix-blend-multiply dark:mix-blend-normal p-[0.1875em] border w-full h-full rounded-full"
                    />
                  </div>
                  <div className="inline-flex max-mobile:text-xs items-center px-2 py-1  text-xs font-semibold text-white700 bg-[rgba(255,255,255,0.1)] rounded-full w-fit mb-1 border border-[rgba(255,255,255,0.05)]">
                    Live Mentorship | Expert-Led Courses | Thriving Trader
                    Community
                  </div>
                  <h3 className="text-[22px] max-mobile:text-base max-mobile:mb-0 font-semibold font-monda text-white mb-1 tracking-[-0.222px]">
                    Edufins
                  </h3>
                  <p className="text-xs max-mobile:text-xs text-white700 font-medium mb-4 flex-1">
                    Edufins is a UK-based forex education platform founded in
                    2021, offering structured courses for beginner to advanced
                    traders.{" "}
                  </p>
                  <div className="flex gap-3 mb-4">
                    <div className="flex-1 rounded-full max-mobile:px-1 max-mobile:justify-center  border-[0.923px] border-[rgba(255,255,255,0.12)] border-solid py-1.5 px-3 flex items-center  gap-2">
                      <img
                        src={Star}
                        alt="star "
                        className="w-[14px] max-mobile:hidden h-[14px]"
                      />
                      <span className=" text-xs font-medium tracking-wide text-white700">
                        1.8k Reviews
                      </span>
                    </div>
                    <div className="flex-1 rounded-full max-mobile:px-1 max-mobile:justify-center  border-[0.923px] border-[rgba(255,255,255,0.12)] border-solid py-1.5 px-3 flex items-center  gap-2">
                      <Users className="w-[14px] max-mobile:hidden h-[14px] text-gray-400 fill-current" />
                      <span className="text-white700 text-xs font-medium tracking-wide">
                        8k+ Students
                      </span>
                    </div>
                  </div>
                  <a
                    href="-"
                    className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button transition-all duration-300 border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed max-mobile:text-sm max-mobile:leading-6 border border-black100 hover:bg-[#a8dd15] hover:border-[#a8dd15] hover:text-black100 rounded-full font-medium px-5 gap-2.5 max-mobile:px-6 max-mobile:py-2.5 border-none w-full justify-center text-sm py-2 bg-white text-black100 flex items-center group"
                  >
                    <span className=" truncate only:text-center has-[div]:contents">
                      Start Learning
                      <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 bg-black100">
                        <MoveRight className="text-white w-4 h-4" />
                      </div>
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="absolute left-[50%] top-[30px] w-[380px] max-mobile:w-[280px] rounded-[16px] max-mobile:rounded-lg bg-[#515151] shadow-[0_0_78px_0_rgba(26,26,26,0.5),inset_0_0_8.3px_0_rgba(0,0,0,0.25)] max-mobile:p-2 p-3 flex flex-col"
                style={{
                  opacity: 0.6,
                  zIndex: 9,
                  transform: "translateX(calc(-50% + 240px)) scale(0.85);",
                }}
              >
                <div className="mb-2">
                  <img
                    src={EdufinsImg}
                    alt="EdufinsImg"
                    className="block rounded-2xl w-full h-[200px] object-cover"
                  />
                </div>
                <div className=" relative z-20 rounded-[14.774px] bg-[#1A1A1A] shadow-[0_0_27.887px_0_rgba(0,0,0,0.1)] p-4">
                  <div className="absolute -top-[42px] right-4 w-[84px] h-[84px] rounded-full bg-white shadow-[0_0_30px_rgba(255,215,0,0.25)] z-30 flex items-center justify-center p-1.5 border-[3px] border-[rgba(255,255,255,0.1)]">
                    <img
                      src={LogoFour}
                      className="size-9 mix-blend-multiply dark:mix-blend-normal p-[0.1875em] border w-full h-full rounded-full"
                    />
                  </div>
                  <div className="inline-flex max-mobile:text-xs items-center px-2 py-1  text-xs font-semibold text-white700 bg-[rgba(255,255,255,0.1)] rounded-full w-fit mb-1 border border-[rgba(255,255,255,0.05)]">
                    Live Mentorship | Expert-Led Courses | Thriving Trader
                    Community
                  </div>
                  <h3 className="text-[22px] max-mobile:text-base max-mobile:mb-0 font-semibold font-monda text-white mb-1 tracking-[-0.222px]">
                    Edufins
                  </h3>
                  <p className="text-xs max-mobile:text-xs text-white700 font-medium mb-4 flex-1">
                    Edufins is a UK-based forex education platform founded in
                    2021, offering structured courses for beginner to advanced
                    traders.{" "}
                  </p>
                  <div className="flex gap-3 mb-4">
                    <div className="flex-1 rounded-full max-mobile:px-1 max-mobile:justify-center  border-[0.923px] border-[rgba(255,255,255,0.12)] border-solid py-1.5 px-3 flex items-center  gap-2">
                      <img
                        src={Star}
                        alt="star "
                        className="w-[14px] max-mobile:hidden h-[14px]"
                      />
                      <span className=" text-xs font-medium tracking-wide text-white700">
                        1.8k Reviews
                      </span>
                    </div>
                    <div className="flex-1 rounded-full max-mobile:px-1 max-mobile:justify-center  border-[0.923px] border-[rgba(255,255,255,0.12)] border-solid py-1.5 px-3 flex items-center  gap-2">
                      <Users className="w-[14px] max-mobile:hidden h-[14px] text-gray-400 fill-current" />
                      <span className="text-white700 text-xs font-medium tracking-wide">
                        8k+ Students
                      </span>
                    </div>
                  </div>
                  <a
                    href="-"
                    className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button transition-all duration-300 border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed max-mobile:text-sm max-mobile:leading-6 border border-black100 hover:bg-[#a8dd15] hover:border-[#a8dd15] hover:text-black100 rounded-full font-medium px-5 gap-2.5 max-mobile:px-6 max-mobile:py-2.5 border-none w-full justify-center text-sm py-2 bg-white text-black100 flex items-center group"
                  >
                    <span className=" truncate only:text-center has-[div]:contents">
                      Start Learning
                      <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 bg-black100">
                        <MoveRight className="text-white w-4 h-4" />
                      </div>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute left-0 z-30 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#3F3F3F] border border-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <ChevronLeft className="text-white w-5 h-5" />
            </div>
            <div className="absolute right-0 z-30 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#3F3F3F] border border-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <ChevronRight className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
