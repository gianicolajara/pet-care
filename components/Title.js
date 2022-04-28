const Title = ({ children, className }) => {
  return (
    <h2 className={`text-4xl font-semibold ${className} dark:text-white `}>
      {children}
    </h2>
  );
};

export default Title;
