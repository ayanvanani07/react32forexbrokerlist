import Marquee from "react-fast-marquee";
import logo from "../../assets/images/logo.png";

export default function MarqueeAnimation() {
  return (
    <section className="bg-black100 py-[30px]">
      <Marquee speed={50} pauseOnHover>
        <img src={logo} alt="logo" className="h-12 mx-8" />
        <img src={logo} alt="logo" className="h-12 mx-8" />
        <img src={logo} alt="logo" className="h-12 mx-8" />
        <img src={logo} alt="logo" className="h-12 mx-8" />
      </Marquee>
    </section>
  );
}
