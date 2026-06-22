import logo from "../../assets/images/logo.png";
import brand2 from "../../assets/images/brand2.png";
import Asic from "../../assets/images/asic.png";

export default function MarqueeAnimation() {
  return (
    <section className="bg-black100 py-[30px]">
      <div className="w-full">
        <div className="flex w-max">
          <div className="flex items-center gap-[60px] pr-[60px] shrink-0">
            <img src={logo} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={brand2} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={Asic} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={logo} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={brand2} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={Asic} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={logo} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={brand2} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />
            <img src={Asic} alt="logo" className="block max-w-[140px] max-mobile:max-w-[100px] shrink-0 object-contain h-[58px]" />

          </div>
        </div>
      </div>
    </section>
  );
}
