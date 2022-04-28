import InterSection from "./InterSection";
import Wrapper from "./Wrapper";

const InterSectionWrapped = ({ children, id = "" }) => {
  return (
    <InterSection id={id}>
      <Wrapper>{children}</Wrapper>
    </InterSection>
  );
};

export default InterSectionWrapped;
