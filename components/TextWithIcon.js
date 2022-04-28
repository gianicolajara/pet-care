import { AiOutlineSearch } from "react-icons/ai";

const TextWithIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        name="search"
        id="search"
        className="p-2 rounded-l-full text-sm h-10 border-y-[1px] border-l-[1px] border-orange-400"
        placeholder="Enter Keyword"
      />
      <button className="bg-white rounded-r-full min-w-max flex justify-center items-center p-3 h-10 border-y-[1px] border-r-[1px] border-orange-400">
        <AiOutlineSearch size={25} className="border-orange-400" />
      </button>
    </div>
  );
};

export default TextWithIcon;
