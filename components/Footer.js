import SubTitle from "./SubTitle";
import Wrapper from "./Wrapper";
import { FaDog } from "react-icons/fa";
import P from "./P";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="py-[4rem] bg-gray-900">
      <Wrapper>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-[2fr,repeat(2,_1fr)] lg:grid-rows-1">
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex items-center">
              <FaDog size={30} className="text-orange-500" />
              <h2 className="text-white text-lg font-bold ml-2">Dogs Care</h2>
            </div>
            <P color="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              dolores id neque voluptas excepturi.
            </P>
          </div>
          <div>
            <SubTitle className="text-white mb-5">PAGES</SubTitle>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white hover:text-orange-500">
                &gt; Home
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                &gt; About Us
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                &gt; Services
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                &gt; Blog Posts
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                &gt; Contact Us
              </a>
            </div>
          </div>
          <div>
            <SubTitle className="text-white mb-5">NEWS</SubTitle>
            <div className="flex flex-col gap-5">
              <SubTitle className="text-white mb-5">SUBSCRIBE</SubTitle>
              <input
                type="text"
                name="email"
                id="email"
                className="p-3 rounded"
                placeholder="Email"
              />
              <Button text="Subscribe" />
            </div>
          </div>
        </div>
        <div className="py-5">
          <hr className="border-t-4 border-t-slate-700" />
        </div>
        <div className="w-full">
          <P>&copy; Dogs Care 2022</P>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
