import { Calendar, MoveRight } from "lucide-react";
import BlogIMg from "../../../assets/images/blogImg.png";
import React from "react";
import ViewMoreBtn from "../../../components/viewMoreBtn";

export default function Blogs() {
  return (
    <section className="py-20 max-mobile:pt-16 max-mobile:pb-0">
      <div className="max-w-[1640px] mx-auto px-16 max-tab:px-5 max-mobile:px-4">
        <div className="flex items-center max-mobile:block justify-between pb-12 max-mobile:pb-8">
          <div>
            <h2 className="text-[42px] max-mobile:text-3xl max-mobile:leading-10 leading-normal text-black100 font-bold font-geist">
              Blogs
            </h2>
            <p className="text-lg max-mobile:text-base text-black700 font-medium max-w-[650px]">
              Stay informed with the latest forex broker reviews, trading tips,
              and market insights written for traders at every level.
            </p>
          </div>
          {/* View More btn components */}
          <ViewMoreBtn />
        </div>
        <div className="grid grid-cols-3 max-tab:grid-cols-2 gap-6 max-mobile:gap-4 max-mobile:grid-cols-1">
          <div className="p-3.5 border border-[rgba(0,0,0,0.1)] bg-white shadow-[0_0_22.7px_0_rgba(0,0,0,0.09)] rounded-2xl cursor-pointer h-full flex flex-col">
            <div className="overflow-hidden rounded-xl">
              <img
                src={BlogIMg}
                className="block w-full aspect-video object-cover"
                alt="blog-card-img"
              />
            </div>
            <div className="pt-5 max-mobile:pt-3 flex-1 flex flex-col">
              <div className="flex items-center justify-between pb-3">
                <div className="text-sm max-mobile:text-xs font-semibold text-black800 py-1.5 px-3 bg-[#F0F1EC] rounded-md">
                  Market Analysis
                </div>
                <div className="flex items-center gap-2">
                  <Calendar width={18} height={18} />
                  <p className="text-sm max-mobile:text-xs font-medium text-black700">
                    Mar 10, 2026
                  </p>
                </div>
              </div>
              <h2 className="text-xl max-mobile:text-lg text-black200 font-semibold mb-2 transition-colors hover:text-primary leading-tight line-clamp-2 font-geist">
                How to Choose the Best Forex Broker in 2026
              </h2>
              <p className="text-base max-mobile:text-sm font-medium text-black700 line-clamp-2 mb-4 font-geist">
                Choosing the right forex broker is one of the most important
                decisions a trader can make. With hundreds of brokers available
                online, each offering different spreads, platforms, and leverage
                options, finding the right one can be challenging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
