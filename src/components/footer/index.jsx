import React from "react";
import FooterMap from "../../assets/images/map-img.png";
import FooterLogo from "../../assets/logo/full-logo-dark.svg";
import { AtSign, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-[70px] pb-[50px] max-tab:pb-16 max-mobile:pb-[40px] bg-[#F0F2EC]">
      <div className="max-w-[1530px] px-16 mx-auto relative max-tab:px-5 max-mobile:px-4">
        <div className="relative">
          <img
            src={FooterMap}
            alt="FooterMap"
            className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[1100px] w-full"
          />
          <div className="flex max-tab:grid max-tab:grid-cols-2 max-mobile:grid-cols-1 relative z-10 gap-10 max-mobile:gap-5 justify-between">
            <div className="max-w-[360px]">
              <a className="block shrink-0 max-w-[175px] w-full">
                <img src={FooterLogo} className="h-8 w-auto object-contain" />
              </a>
              <p className="text-base text-black700 font-medium my-5">
                ForexBrokerList.io is a free forex broker directory helping
                traders discover, compare, and review 512+ verified forex
                brokers worldwide.
              </p>
              <div className="flex items-center gap-4">
                <a className="group flex items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none text-muted-foreground hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                    <Rss />
                  </div>
                </a>
                <a className="group flex items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none text-muted-foreground hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                    <AtSign />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h6 className="text-lg mb-3 text-black font-medium">
                Quick Links:
              </h6>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block pb-2"
              >
                Submit
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block pb-2"
              >
                About Us
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block pb-2"
              >
                Contact us
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block"
              >
                Privacy Policy
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block"
              >
                Terms of Service
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block"
              >
                Disclaimer
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block"
              >
                Cookie Policy
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block"
              >
                Advertise
              </a>
            </div>
            <div>
              <h6 className="text-lg mb-3 text-black font-medium">Browse :</h6>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block pb-2"
              >
                Brokers
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block pb-2"
              >
                Categories
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block pb-2"
              >
                Tags
              </a>
              <a
                href="-"
                className="group items-center gap-2 outline-none disabled:opacity-50 disabled:pointer-events-none hover:[&[href],&[type]]:text-foreground p-0.5 -m-0.5 text-base font-medium text-black700 block"
              >
                Blog
              </a>
            </div>
            <div className="max-w-[442px]">
              <h6 className="text-lg mb-3 text-black font-medium">
                Subscribe to our newsletter
              </h6>
              <p className="text-base text-black700 font-medium mb-6">
                Join 5,000+ other members and get updates straight to your
                inbox.
              </p>
              <form className="flex flex-col gap-3 w-full">
                <div className="border outline-transparent transition duration-100 ease-out focus-within:outline-2 focus-within:outline-border/50 focus-within:border-ring flex w-full bg-background rounded-full text-base">
                  <input
                    type="email"
                    className="border outline-transparent transition duration-100 ease-out focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring appearance-none min-h-0 w-full border-border-light self-stretch bg-background text-foreground break-words transition duration-150 disabled:text-secondary-foreground/50 px-3 py-2 flex-1 min-w-0 border-0 h-[50px] rounded-full text-base placeholder:text-base focus-visible:outline-none"
                    placeholder="Enter your Email"
                  />
                  <button className="outline-transparent ease-out cursor-pointer hover:outline-border/50 focus-visible:outline-2 focus-visible:outline-border/50 focus-visible:border-ring group/button inline-flex transition-all duration-300 items-center justify-center border-transparent! text-start overflow-clip hover:z-10 disabled:opacity-60 disabled:cursor-not-allowed bg-black100 max-mobile:text-sm max-mobile:leading-6 border border-solid border-black100 hover:bg-[#A8DD15] hover:border-[#A8DD15] hover:text-black100 text-white rounded-full text-base font-medium gap-[0.66ch] shrink-0 px-5 py-1.5 m-0.5">
                    <span className=" truncate only:text-center has-[div]:contents">
                      Subscribe
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-base relative z-10 max-mobile:pt-[40px] font-medium text-black700 pt-[60px]">
            <p>
              ForexBrokerList.io is an independent forex broker directory for
              informational purposes only. We do not provide financial advice,
              execute trades, or manage client funds.
            </p>
            <p className="mt-2">
              All broker listings, reviews, and comparisons are for general
              information only. Trading forex and CFDs involves significant risk
              of loss and may not be suitable for all investors. Past
              performance is not indicative of future results.
            </p>
            <p className="mt-2">
              Sponsored listings are clearly marked and do not imply endorsement
              or recommendation. Always verify a broker's regulatory status
              through official authorities such as FCA, ASIC, or CySEC before
              depositing funds.
            </p>
            <p className="mt-2">
              For queries or listing requests, contact us at:
              <a href="-" className="text-[#a8dd15] underline">
                forexbrokerlist24@gmail.com
              </a>
            </p>
          </div>
          <div className="w-full mt-4  h-[1px]   bg-[#1A1A1A1A]"></div>
          <p className="text-center relative z-10 text-base font-medium text-black700 mt-4">
            © 2026 ForexBrokerList.io - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
