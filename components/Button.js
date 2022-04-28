const Button = ({ text = "Button", type = "button", lighButton = true }) => {
  const colorButton = lighButton
    ? "rounded-sm max-w-max min-w-[75px] bg-transparent border border-white text-white p-2 font-light hover:text-blue-900 hover:bg-white transition-all ease-in-out"
    : "rounded-sm max-w-max min-w-[75px] bg-transparent border border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 p-2 font-light hover:text-white dark:hover:text-white hover:bg-blue-900  dark:hover:bg-blue-400 transition-all ease-in-out";

  return (
    <button type={type} className={colorButton}>
      {text}
    </button>
  );
};

export default Button;
