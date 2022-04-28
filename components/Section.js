const Section = ({ children, className, id = "" }) => {
  return (
    <section className={`py-[4rem] ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
