import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoCard = ({ video, index }) => {
  const viewsFormat = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });
  const { name, title, thumbnailURL, id, views } = video;

  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md">
      <Link to={`/video/${id}`}>
        <div className="relative mb-4 overflow-hidden">
          <img
            src={thumbnailURL}
            alt={title}
            className="w-full rounded-md transition-all group-hover:brightness-50"
          />
          <button className="absolute bottom-[-100%] left-[50%] flex h-[55px] w-[55px] translate-x-[-50%] translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-green-500 transition-all group-hover:bottom-[50%]">
            <FaPlay color="white" className="text-lg" title="play" />
          </button>
        </div>
        <div className="px-2">
          <span className="text-sm text-slate-500">
            {viewsFormat.format(views)} views
          </span>
          <h3 className="line-clamp-2 font-semibold">{title}</h3>
          <div className="mt-2 flex items-center gap-x-2 text-sm font-bold text-green-500">
            <img
              src={`https://picsum.photos/${35 + index}`}
              alt={name}
              className="rounded-full"
            />
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default VideoCard;
