import { IoSendSharp } from "react-icons/io5";
import Button from "./Button";
import CommentCard from "./cards/CommentCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import postComment from "../api/postComment";
import getListComments from "../api/getListComments";

const Comments = ({ videoId }) => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const [valueInp, setValueInp] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [listComments, setListComemnts] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();

    if (Object.keys(user).length === 0) {
      setError("Please Login to Comment");
    } else {
      if (!valueInp) setError("Don't Send Empty Comment");
      else {
        setError("");

        const data = {
          username: user.given_name,
          message: valueInp,
        };

        postComment(videoId, data).then(() => setIsSend(!isSend));
      }
    }
  };

  useEffect(() => {
    getListComments(videoId)
      .then((res) => res.json())
      .then((data) => setListComemnts(data));
  }, [isSend, videoId]);

  return (
    <div className="relative max-h-[430px] overflow-hidden rounded-3xl border border-slate-200 shadow hover:shadow-md">
      <h2 className="absolute top-0 z-10 w-full border border-slate-200 bg-white px-4 py-3 font-semibold">
        Comments
      </h2>
      <div className="no-scrollbar flex max-h-full flex-col gap-y-2 overflow-y-auto">
        {listComments.map((d) => (
          <CommentCard key={d.id} comment={d} />
        ))}
      </div>
      {error && (
        <p className="absolute bottom-[4.75rem] left-[50%] translate-x-[-50%] text-xs font-medium text-red-400">
          {error}
        </p>
      )}
      <form
        className="absolute bottom-4 left-[50%] z-10 flex w-11/12 translate-x-[-50%] items-center gap-x-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow"
        onSubmit={handleSend}
      >
        <input
          type="text"
          className="flex-1 bg-transparent py-1 text-sm caret-green-500 outline-none"
          placeholder="Give your Positive Comment"
          value={valueInp}
          onInput={(e) => setValueInp(e.target.value)}
        />
        <Button cls="rounded-full p-2">
          <IoSendSharp />
        </Button>
      </form>
    </div>
  );
};

export default Comments;
