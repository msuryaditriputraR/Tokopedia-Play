import { useContext } from "react";
import { BsSearchHeart } from "react-icons/bs";
import { SearchContext } from "../context/SearchContext";

const Search = () => {
  const { keyword, setKeyword } = useContext(SearchContext);

  const handleSearch = (e) => setKeyword(e.target.value);

  return (
    <div
      className={`group order-2 flex w-full items-center gap-x-2 rounded-md border px-4 py-2 shadow-sm transition hover:border-2 hover:border-green-500 lg:order-1 lg:w-1/2 ${
        keyword && "border-2 border-green-500"
      }`}
    >
      <input
        type="text"
        placeholder="Search Video"
        className="w-full bg-transparent caret-green-500 outline-none"
        value={keyword}
        onChange={handleSearch}
      />
      <BsSearchHeart
        className={`text-xl group-hover:text-green-500  ${
          keyword && "text-green-500"
        } `}
      />
    </div>
  );
};

export default Search;
