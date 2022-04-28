import SectionWrapped from "./SectionWrapped";
import Title from "./Title";
import Image from "next/image";
import SimpleCard from "./SimpleCard";
import { GiSittingDog, GiTooth, GiHairStrands } from "react-icons/gi";
import { FaWalking } from "react-icons/fa";
import InterSection from "./InterSection";
import InterSectionWrapped from "./InterSectionWrapped";

const Services = () => {
  return (
    <InterSectionWrapped id="services">
      <div className="grid grid-cols-1 grid-rows-[1fr,_400px] gap-5 lg:grid-cols-[1fr,1fr] lg:grid-rows-1 items-center">
        <div>
          <div className="mb-5">
            <Title>Services</Title>
          </div>
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-5">
            <SimpleCard
              icon={<GiSittingDog size={25} className="text-red-400" />}
              subTitle="Dog Sitting"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              unde rerum quae aliquam error beatae itaque quidem illo
              necessitatibus aperiam tempora.
            </SimpleCard>
            <SimpleCard
              icon={<FaWalking size={25} className="text-red-400" />}
              subTitle="Dog Walking"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              unde rerum quae aliquam error beatae itaque quidem illo
              necessitatibus aperiam tempora.
            </SimpleCard>
            <SimpleCard
              icon={<GiTooth size={25} className="text-red-400" />}
              subTitle="Dog Dentistry"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              unde rerum quae aliquam error beatae itaque quidem illo
              necessitatibus aperiam tempora.
            </SimpleCard>
            <SimpleCard
              icon={<GiHairStrands size={25} className="text-red-400" />}
              subTitle="Dog Haircut"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              unde rerum quae aliquam error beatae itaque quidem illo
              necessitatibus aperiam tempora.
            </SimpleCard>
          </div>
        </div>
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src="/images/services.jpg"
            layout="fill"
            alt="services"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </InterSectionWrapped>
  );
};

export default Services;
