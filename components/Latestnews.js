import SectionWrapped from "./SectionWrapped";
import Title from "./Title";
import P from "./P";
import NewCard from "./NewCard";

const Latestnews = () => {
  return (
    <SectionWrapped id="news">
      <div className="mb-5">
        <Title className="mb-5 text-center">Latest News</Title>
        <P className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          atque quidem quam similique quia repellat fugit at explicabo illum
          quasi nihil, dolorem sint non ad autem accusamus laboriosam. Beatae,
          natus.
        </P>
      </div>
      <div className="flex flex-col w-full gap-5 lg:flex-row">
        <NewCard
          image="/images/new-1.jpg"
          title="How to keep your dog cool this summer"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          magnam.
        </NewCard>
        <NewCard
          image="/images/new-2.jpg"
          title="Solution for grooming behavior problems"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          magnam.
        </NewCard>
        <NewCard
          image="/images/new-3.jpg"
          title="How to keep your dog cool this summer"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          magnam.
        </NewCard>
      </div>
    </SectionWrapped>
  );
};

export default Latestnews;
