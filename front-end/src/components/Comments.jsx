import { IoSendSharp } from "react-icons/io5";
import Button from "./Button";

const Comments = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow hover:shadow-md">
      <h2 className="absolute top-0 w-full border border-slate-200 px-4 py-3 font-semibold">
        Comments
      </h2>
      <form className="absolute bottom-4 left-[50%] flex w-11/12 translate-x-[-50%] items-center gap-x-3 rounded-full border border-slate-200 px-4 py-2 shadow">
        <input
          type="text"
          className="flex-1 bg-transparent py-1 text-sm caret-green-500 outline-none"
          placeholder="Give your Positive Comment"
        />
        <Button cls="rounded-full p-2">
          <IoSendSharp />
        </Button>
      </form>
    </div>
  );
};

export default Comments;
