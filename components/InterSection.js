const InterSection = ({ children, id = "" }) => {
  return (
    <section className="pb-[5rem] dark:bg-slate-800" id={id}>
      {children}
    </section>
  );
};

export default InterSection;
