import Image from "next/image";
import Button from "./Button";
import P from "./P";
import SubTitle from "./SubTitle";
import Title from "./Title";

const NewCard = ({ image, alt, title, children }) => {
  return (
    <article className="flex flex-col w-full lg:max-w-[33%] min-h-[500px] shadow dark:bg-slate-700">
      <div className="relative w-full min-h-[200px]">
        <Image
          src={image}
          layout="fill"
          alt={alt}
          objectFit="cover"
          loader={`https://raw.githubusercontent.com/gianicolajara/pet-care/main/public${image}`}
        />
      </div>

      <div className="flex flex-col gap-5 p-5 flex-shrink-0 flex-grow justify-between">
        <div>
          <SubTitle>{title}</SubTitle>
          <P>{children}</P>
        </div>
        <Button text="Read More" lighButton={false} />
      </div>
    </article>
  );
};

export default NewCard;
