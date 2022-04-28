const P = ({ children, color = "text-gray-500", className = "", props }) => {
  return (
    <p
      className={`${color} leading-7 font-light ${className} dark:text-slate-400`}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
