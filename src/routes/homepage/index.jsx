import React from "react";
import HeroSection from "./heroSection";
import MarqueeAnimation from "../../components/marquee";
import TopRatedForex from "./topRatedForex";
import PremiumForex from "./premiumForex";
import ForexBridge from "./forexBridge";
import AlgoTrading from "./algoTrading";
import Blogs from "./blogs";
import FAQ from "./faq";
import OurTrusted from "./ourTrusted";
import ChoosetheRight from "./choosetheRight";
import LearnForex from "./learnForex";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#F0F2EC]">
      <HeroSection />
      {/* <MarqueeAnimation /> */}
      <TopRatedForex />
      <PremiumForex />
      <LearnForex />
      <ForexBridge />
      <ChoosetheRight />
      <OurTrusted />
      <AlgoTrading />
      <Blogs />
      <FAQ />
    </div>
  );
}
