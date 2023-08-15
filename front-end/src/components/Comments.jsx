import { IoSendSharp } from "react-icons/io5";
import Button from "./Button";
import CommentCard from "./cards/CommentCard";
import useFetch from "../hooks/useFetch";

const Comments = ({ videoId }) => {
  const [data] = useFetch(
    import.meta.env.VITE_ROOT_API + `video/${videoId}/comments`,
  );

  return (
    data && (
      <div className="relative max-h-[430px] overflow-hidden rounded-3xl border border-slate-200 shadow hover:shadow-md">
        <h2 className="absolute top-0 z-10 w-full border border-slate-200 bg-white px-4 py-3 font-semibold">
          Comments
        </h2>
        <div className="no-scrollbar flex max-h-full flex-col gap-y-2 overflow-y-auto">
          {data.map((d) => (
            <CommentCard key={d.id} comment={d} />
          ))}
        </div>
        <form className="absolute bottom-4 left-[50%] z-10 flex w-11/12 translate-x-[-50%] items-center gap-x-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow">
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
    )
  );
};

export default Comments;
