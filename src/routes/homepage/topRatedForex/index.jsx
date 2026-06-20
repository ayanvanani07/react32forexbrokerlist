import { MoveRight } from "lucide-react";
import Logo from "../../../assets/images/logo2.png";
import Bluetick from "../../../assets/images/bluetick.svg";
import logoThird from "../../../assets/images/logo3.png";
import Map from "../../../assets/images/map.png";
import React from "react";
import ViewMoreBtn from "../../../components/viewMoreBtn";

export default function TopRatedForex() {
  return (
    <section className="py-[100px] max-mobile:py-16">
      <div className="max-w-[1640px] mx-auto px-16 max-tab:px-5 max-mobile:px-4">
        <div className="flex items-center max-mobile:block justify-between pb-12 max-mobile:pb-8 max-tab:gap-10">
          <div>
            <h2 className="text-[42px] max-mobile:text-3xl leading-normal text-black100 font-bold font-geist">
              Top-Rated Forex Brokers & Trading Platforms Tools
            </h2>
            <p className="text-lg max-mobile:text-base text-black700 font-medium max-w-[885px] whitespace-pre-line font-geist">
              Browse verified forex brokers and trading platforms, compare
              spreads , regulation, and features to find the right fit for your
              trading goals.
            </p>
          </div>
          {/* View More btn components */}
          <ViewMoreBtn />
        </div>
        <div className="grid grid-cols-3 gap-6 max-tab:grid-cols-1  max-tab:gap-5">
          <div className="">
            <div className="rounded-[16px] mb-6 last:mb-0 border-[0.5px] border-[#A8DD15] p-5 max-laptop:p-4 bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[22px] font-semibold font-geist text-black">
                      Newera365
                    </h3>
                    <img src={Bluetick} alt="Bluetick" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                Competitive forex and CFD trading for beginners and pros alike
              </p>

              <div className="flex items-center gap-2.5">
                <p className="text-sm uppercase text-black100 font-medium">
                  MIN DEPOSIT:
                </p>
                <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                  Varies
                </div>
              </div>
            </div>
            <div className="rounded-[16px] mb-6 last:mb-0 border-[0.5px] border-[#A8DD15] p-5 max-laptop:p-4 bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[22px] font-semibold font-geist text-black">
                      Newera365
                    </h3>
                    <img src={Bluetick} alt="Bluetick" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                Competitive forex and CFD trading for beginners and pros alike
              </p>

              <div className="flex items-center gap-2.5">
                <p className="text-sm uppercase text-black100 font-medium">
                  MIN DEPOSIT:
                </p>
                <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                  Varies
                </div>
              </div>
            </div>
            <div className="rounded-[16px] mb-6 last:mb-0 border-[0.5px] border-[#A8DD15] p-5 max-laptop:p-4 bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[22px] font-semibold font-geist text-black">
                      Newera365
                    </h3>
                    <img src={Bluetick} alt="Bluetick" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                Competitive forex and CFD trading for beginners and pros alike
              </p>

              <div className="flex items-center gap-2.5">
                <p className="text-sm uppercase text-black100 font-medium">
                  MIN DEPOSIT:
                </p>
                <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                  Varies
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-[16px] mb-6 border-[0.5px] border-[#A8DD15] bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="p-5 pb-0 relative z-10">
                <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                      <img src={logoThird} alt="logoThird" />
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[22px] font-semibold font-monda text-black">
                        Edufins
                      </h3>
                      <img src={Bluetick} alt="Bluetick" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                  Live Mentorship | Expert-Led Courses | Thriving Trader
                  Community
                </p>
                <div className="flex items-center gap-2.5">
                  <p className="text-sm uppercase text-black100 font-medium">
                    MIN DEPOSIT:
                  </p>
                  <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                    -
                  </div>
                </div>
                <img
                  src={Map}
                  alt="Map"
                  className="block w-full mt-[-44px] object-center h-[185px] object-cover relative z-0"
                />
              </div>
            </div>
            <div className="rounded-[16px] mb-6 border-[0.5px] border-[#A8DD15] bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="p-5 pb-0 relative z-10">
                <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                      <img src={logoThird} alt="logoThird" />
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[22px] font-semibold font-monda text-black">
                        Edufins
                      </h3>
                      <img src={Bluetick} alt="Bluetick" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                  Live Mentorship | Expert-Led Courses | Thriving Trader
                  Community
                </p>
                <div className="flex items-center gap-2.5">
                  <p className="text-sm uppercase text-black100 font-medium">
                    MIN DEPOSIT:
                  </p>
                  <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                    -
                  </div>
                </div>
                <img
                  src={Map}
                  alt="Map"
                  className="block w-full mt-[-44px] object-center h-[185px] object-cover relative z-0"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded-[16px] mb-6 last:mb-0 border-[0.5px] border-[#A8DD15] p-5 max-laptop:p-4 bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[22px] font-semibold font-geist text-black">
                      Newera365
                    </h3>
                    <img src={Bluetick} alt="Bluetick" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                Competitive forex and CFD trading for beginners and pros alike
              </p>

              <div className="flex items-center gap-2.5">
                <p className="text-sm uppercase text-black100 font-medium">
                  MIN DEPOSIT:
                </p>
                <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                  Varies
                </div>
              </div>
            </div>
            <div className="rounded-[16px] mb-6 last:mb-0 border-[0.5px] border-[#A8DD15] p-5 max-laptop:p-4 bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[22px] font-semibold font-geist text-black">
                      Newera365
                    </h3>
                    <img src={Bluetick} alt="Bluetick" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                Competitive forex and CFD trading for beginners and pros alike
              </p>

              <div className="flex items-center gap-2.5">
                <p className="text-sm uppercase text-black100 font-medium">
                  MIN DEPOSIT:
                </p>
                <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                  Varies
                </div>
              </div>
            </div>
            <div className="rounded-[16px] mb-6 last:mb-0 border-[0.5px] border-[#A8DD15] p-5 max-laptop:p-4 bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-[inset_0_0_15px_0_rgba(168,221,21,0.2)] overflow-hidden">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[22px] font-semibold font-geist text-black">
                      Newera365
                    </h3>
                    <img src={Bluetick} alt="Bluetick" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-black800 font-medium mb-5 line-clamp-2">
                Competitive forex and CFD trading for beginners and pros alike
              </p>

              <div className="flex items-center gap-2.5">
                <p className="text-sm uppercase text-black100 font-medium">
                  MIN DEPOSIT:
                </p>
                <div className="w-fit text-sm font-medium text-black100 bg-[#F2F4F7] py-1.5 px-2.5 rounded-sm">
                  Varies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
