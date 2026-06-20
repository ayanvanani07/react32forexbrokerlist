import { MoveRight } from "lucide-react";
import XLogo from "../../../assets/images/xLogo.png";
import BrandLogo from "../../../assets/images/brandLogo.png";
import PaysafeLogo from "../../../assets/images/paysafeLogo.png";
import React from "react";
import ViewMoreBtn from "../../../components/viewMoreBtn";

export default function OurTrusted() {
  return (
    <section className="pt-[100px] overflow-hidden max-mobile:pt-16">
      <div className="max-w-[1640px] mx-auto px-16 max-tab:px-5 max-mobile:px-4">
        <div className="pb-12 max-mobile:pb-8">
          <h2 className="text-[42px] max-mobile:text-3xl max-mobile:leading-10 text-center leading-normal text-black100 font-bold font-geist">
            Our Trusted Forex Industry Partners
          </h2>
          <p className="text-lg max-mobile:text-base text-black700 text-center mx-auto font-medium max-w-[650px]">
            Supported by top forex industry partners, liquidity, platforms,
            payments & broker tech.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 max-tab:grid-cols-1">
          <div>
            <div className="rounded-[20px] max-mobile:rounded-xl max-mobile:p-4 border border-[rgba(26,26,26,0.08)] bg-white p-6">
              <div className="flex items-center justify-between pb-6 max-mobile:block">
                <div>
                  <h3 className="text-3xl max-mobile:text-2xl max-mobile:leading-8 text-black100 font-bold  mb-2">
                    Liquidity Partners
                  </h3>
                  <p className="text-base font-medium text-black700  max-w-[480px] whitespace-pre-line">
                    Providing deep liquidity and institutional-grade execution
                    for brokers and financial institutions.
                  </p>
                </div>
                <div className="max-mobile:pt-4">
                  {/* View More btn components */}
                  <ViewMoreBtn />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 max-mobile:grid-cols-1">
                <div className="rounded-xl bg-[#F4F4F4] p-2">
                  <div className="p-2.5 rounded-xl border border-[rgba(26,26,26,0.14)] bg-white h-full flex flex-col">
                    <div className="grid grid-cols-[80px_1fr] items-center gap-3 pb-4 border-b border-solid border-border-gray800">
                      <div className="h-[54px] w-full bg-[#F4F4F4] rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={XLogo}
                          alt="XLogo"
                          className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base text-black font-semibold truncate">
                          LMAX Group
                        </h3>
                        <p className="text-xs text-black700 font-medium truncate">
                          Global Exchange & Liquidity Provider
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 flex-1">
                      <p className="text-xs text-black700 line-clamp-3">
                        Provides institutional grade liquidity and direct market
                        access for brokers and financial institutions.
                      </p>
                    </div>
                    <div className="pt-3 mt-auto">
                      <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 gap-2.5 py-1.5 w-full justify-center text-xs group">
                        <span className=" truncate only:text-center has-[div]:contents">
                          Learn More
                          <div className="w-4 h-4 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                            <MoveRight />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-[#F4F4F4] p-2">
                  <div className="p-2.5 rounded-xl border border-[rgba(26,26,26,0.14)] bg-white h-full flex flex-col">
                    <div className="grid grid-cols-[80px_1fr] items-center gap-3 pb-4 border-b border-solid border-border-gray800">
                      <div className="h-[54px] w-full bg-[#F4F4F4] rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={XLogo}
                          alt="XLogo"
                          className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base text-black font-semibold truncate">
                          LMAX Group
                        </h3>
                        <p className="text-xs text-black700 font-medium truncate">
                          Prime Liquidity & Pricing Solutions
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 flex-1">
                      <p className="text-xs text-black700 line-clamp-3">
                        Provides institutional grade liquidity and direct market
                        access for brokers and financial institutions.
                      </p>
                    </div>
                    <div className="pt-3 mt-auto">
                      <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-primary hover:border-primary hover:text-black100 text-white rounded-full font-medium max-mobile:px-6 max-mobile:py-2.5 px-5 gap-2.5 py-1.5 w-full justify-center text-xs group">
                        <span className=" truncate only:text-center has-[div]:contents">
                          Learn More
                          <div className="w-4 h-4 rounded-full flex items-center group-hover:bg-white transition-all duration-300 justify-center bg-primary">
                            <MoveRight />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] mt-5 border border-[rgba(26,26,26,0.08)] bg-white ">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-3xl max-mobile:text-2xl max-mobile:leading-8 text-black100 font-bold  mb-2">
                    Trading Platform Partners
                  </h3>
                  <p className="text-base font-medium text-black700  max-w-[480px] whitespace-pre-line">
                    Connect with trusted trading platforms and automate your
                    strategies with powerful tools
                  </p>
                </div>
                <div className="max-mobile:pt-4">
                  {/* View More btn components */}
                  <ViewMoreBtn />
                </div>
              </div>
              <div className="px-[50px] max-laptop:px-5 pb-10">
                <div className="grid grid-cols-5 gap-4 max-mobile:grid-cols-2">
                  <div className="px-5 py-4 rounded-[12px] border border-[rgba(26,26,26,0.16)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[87.7px] shadow-sm flex flex-col items-end justify-between min-h-[135px]">
                    <div className="flex justify-center h-10 w-full">
                      <img
                        src={BrandLogo}
                        alt="BrandLogo"
                        className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em] size-full object-contain"
                      />
                    </div>
                    <div className="mt-3 text-sm max-laptop:mt-2 text-black700 text-center font-medium w-full">
                      Meta Trader 5
                    </div>
                  </div>
                  <div className="px-5 py-4 rounded-[12px] border border-[rgba(26,26,26,0.16)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[87.7px] shadow-sm flex flex-col items-end justify-between min-h-[135px]">
                    <div className="flex justify-center h-10 w-full">
                      <img
                        src={BrandLogo}
                        alt="BrandLogo"
                        className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em] size-full object-contain"
                      />
                    </div>
                    <div className="mt-3 text-sm max-laptop:mt-2 text-black700 text-center font-medium w-full">
                      Meta Trader 5
                    </div>
                  </div>
                  <div className="px-5 py-4 rounded-[12px] border border-[rgba(26,26,26,0.16)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[87.7px] shadow-sm flex flex-col items-end justify-between min-h-[135px]">
                    <div className="flex justify-center h-10 w-full">
                      <img
                        src={BrandLogo}
                        alt="BrandLogo"
                        className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em] size-full object-contain"
                      />
                    </div>
                    <div className="mt-3 text-sm max-laptop:mt-2 text-black700 text-center font-medium w-full">
                      Meta Trader 5
                    </div>
                  </div>
                  <div className="px-5 py-4 rounded-[12px] border border-[rgba(26,26,26,0.16)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[87.7px] shadow-sm flex flex-col items-end justify-between min-h-[135px]">
                    <div className="flex justify-center h-10 w-full">
                      <img
                        src={BrandLogo}
                        alt="BrandLogo"
                        className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em] size-full object-contain"
                      />
                    </div>
                    <div className="mt-3 text-sm max-laptop:mt-2 text-black700 text-center font-medium w-full">
                      Meta Trader 5
                    </div>
                  </div>
                  <div className="px-5 py-4 rounded-[12px] border border-[rgba(26,26,26,0.16)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[87.7px] shadow-sm flex flex-col items-end justify-between min-h-[135px]">
                    <div className="flex justify-center h-10 w-full">
                      <img
                        src={BrandLogo}
                        alt="BrandLogo"
                        className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em] size-full object-contain"
                      />
                    </div>
                    <div className="mt-3 text-sm max-laptop:mt-2 text-black700 text-center font-medium w-full">
                      Meta Trader 5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border max-mobile:rounded-xl max-mobile:p-4 border-[rgba(26,26,26,0.08)] bg-white overflow-hidden flex flex-col">
            <div className="p-10 pb-6 max-mobile:p-4">
              <h3 className="text-3xl max-mobile:text-2xl max-mobile:leading-8 text-black100 font-bold text-center mb-1">
                PSP Partners
              </h3>
              <p className="text-base font-medium text-black700 text-center max-w-[650px] mx-auto whitespace-pre-line">
                Explore trusted payment solution providers for forex brokers
                supporting fast, secure deposits and withdrawals for traders
                worldwide.
              </p>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex w-full overflow-hidden pb-4">
                <div className="flex w-max items-center">
                  <div className="flex gap-3 pr-3">
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-max items-center">
                  <div className="flex gap-3 pr-3">
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full overflow-hidden pb-4">
                <div className="flex w-max items-center">
                  <div className="flex gap-3 pr-3">
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-max items-center">
                  <div className="flex gap-3 pr-3">
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full overflow-hidden pb-4">
                <div className="flex w-max items-center">
                  <div className="flex gap-3 pr-3">
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-max items-center">
                  <div className="flex gap-3 pr-3">
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[13px] bg-[rgba(26,26,26,0.03)] p-2 max-w-[300px] max-mobile:max-w-[200px] max-mobile:w-[200px] max-mobile:min-w-[200px] w-[300px] min-w-[300px] backdrop-blur-[239.8px]">
                      <div className="rounded-[11.413px] border-[0.951px] border-[rgba(26,26,26,0.08)] h-[90px] max-mobile:h-[60px] flex items-center justify-center bg-white">
                        <div className="w-full max-w-[120px] h-full flex items-center justify-center p-2">
                          <img
                            src={PaysafeLogo}
                            alt="PaysafeL   ogo"
                            className="rounded-[0.375em] mix-blend-multiply dark:mix-blend-normal p-[0.1875em]  size-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5 max-mobile:pb-4 pb-10 mt-auto">
              {/* View More btn components */}
              <ViewMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
