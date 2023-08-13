const CommentCard = ({ comment }) => {
  const { username, time, text } = comment;
  return (
    <article className="mx-auto w-11/12 rounded-lg border border-slate-200 bg-white p-2 shadow-sm first:mt-14">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="font-semibold">{username}</h2>
        <span className="text-xs text-slate-400">{time}</span>
      </div>
      <p className="text-sm text-slate-500">{text}</p>
    </article>
  );
};

export default CommentCard;
