import Button from "./Button";
import P from "./P";
import Section from "./Section";
import SectionWrapped from "./SectionWrapped";
import Title from "./Title";
import Wrapper from "./Wrapper";

const Ourteam = () => {
  return (
    <Section className="w-full h-[500px] bg-[url('/images/ourteam.jpg')] bg-top bg-no-repeat bg-cover flex flex-col justify-center items-left">
      <Wrapper>
        <div className="flex flex-col gap-5">
          <P color="text-white">Pet Lovers</P>
          <Title className="text-white">
            Our Team Is Filled With Highly Dedicated Pet Lovers
          </Title>
          <Button text="Read More" />
        </div>
      </Wrapper>
    </Section>
  );
};

export default Ourteam;
