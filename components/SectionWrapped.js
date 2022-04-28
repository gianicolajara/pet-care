import Section from "./Section";
import Wrapper from "./Wrapper";

const SectionWrapped = ({ children, id = "" }) => {
  return (
    <Section className="dark:bg-slate-800" id={id}>
      <Wrapper>{children}</Wrapper>
    </Section>
  );
};

export default SectionWrapped;
