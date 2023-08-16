import { formatRelative } from "date-fns";
import { useEffect } from "react";

const CommentCard = ({ comment }) => {
  const { username, createdAt, message } = comment;

  useEffect(() => {
    document
      .querySelector(".comment-card:last-child")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, []);

  return (
    <article className="comment-card mx-auto w-11/12 rounded-lg border border-slate-200 bg-white p-2 shadow-sm first:mt-14 ">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="flex-1 truncate font-semibold">{username}</h2>
        <span className="text-xs text-slate-400">
          {formatRelative(new Date(createdAt), new Date())}
        </span>
      </div>
      <p className="text-sm text-slate-500">{message}</p>
    </article>
  );
};

export default CommentCard;
