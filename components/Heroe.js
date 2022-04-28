import { prefix } from "../utils/prefix";
import Button from "./Button";
import Menu from "./Menu";
import Wrapper from "./Wrapper";

const urlImageHeroe = `${prefix}/images/heroe.jpg`;

const Heroe = () => {
  return (
    <div
      className={`h-screen bg-[url("${urlImageHeroe}")] bg-center bg-cover flex flex-col text-center justify-center w-full`}
    >
      <Wrapper>
        <Menu />
        <h1 className="text-white text-5xl font-extralight">
          Providing Special Care For
          <span className="font-bold"> Your Pets!</span>
        </h1>
        <p className="text-white text-lg m-5">
          We offer special services for special pets!
        </p>
        <div className="flex justify-center gap-5">
          <Button text="View Our Services" />
          <Button text="Hire Us" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Heroe;
