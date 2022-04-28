import P from "./P";
import SubTitle from "./SubTitle";
import { GiDogBowl } from "react-icons/gi";

const SimpleCard = ({ icon = GiDogBowl, subTitle = "SubTitle", children }) => {
  return (
    <div className="flex flex-col gap-2">
      {icon}
      <SubTitle>{subTitle}</SubTitle>
      <P>{children}</P>
    </div>
  );
};

export default SimpleCard;
