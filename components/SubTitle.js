const SubTitle = ({ children, className }) => {
  return (
    <h3 className={`text-[1.3rem] font-medium ${className} dark:text-white`}>
      {children}
    </h3>
  );
};

export default SubTitle;
