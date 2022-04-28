import P from "./P";
import SectionWrapped from "./SectionWrapped";
import Title from "./Title";
import { GiDogBowl } from "react-icons/gi";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import Image from "next/image";
import SimpleCard from "./SimpleCard";

const Aboutus = () => {
  return (
    <SectionWrapped id="aboutus">
      <div className="grid grid-cols-1 grid-rows-(1fr,_400px) gap-10 items-center lg:grid-cols-2 lg:grid-rows-1">
        <div className="flex flex-col lg:order-2">
          <div>
            <Title className="mb-5">About us</Title>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ullam hic tempora debitis ipsam non aperiam porro nobis nostrum
              ducimus mollitia est aliquid rerum atque consequatur, perspiciatis
              corrupti illum beatae.
            </P>
          </div>
          <div className="mt-5 flex gap-5 flex-col lg:flex-row">
            <SimpleCard
              icon={
                <BsFillHandThumbsUpFill size={25} className="text-red-400" />
              }
              subTitle="Our Mission"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              iusto ipsum nam, reiciendis repudiandae id. Molestias molestiae,
              provident error dolorem inventore neque voluptatum vitae, iure
              veniam ipsum repellendus autem animi.
            </SimpleCard>
            <SimpleCard
              icon={<GiDogBowl size={25} className="text-red-400" />}
              subTitle="Our Vision"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              iusto ipsum nam, reiciendis repudiandae id. Molestias molestiae,
              provident error dolorem inventore neque voluptatum vitae, iure
              veniam ipsum repellendus autem animi.
            </SimpleCard>
          </div>
        </div>
        <div className="relative w-full h-full min-h-[400px] lg:order-1">
          <Image
            src="/images/aboutus.jpg"
            layout="fill"
            alt="aboutusimage"
            objectFit="cover"
            loader="https://raw.githubusercontent.com/gianicolajara/pet-care/main/public/images/aboutus.jpg"
          />
        </div>
      </div>
    </SectionWrapped>
  );
};

export default Aboutus;
