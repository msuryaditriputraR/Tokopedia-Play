const Frame = ({ title, linkVideo, videoId }) => {
  return (
    <div className="relative col-span-2  h-0 pb-[56.25%]">
      <iframe
        className="absolute left-0 top-0 h-full w-full rounded-2xl shadow-md"
        src={`${linkVideo}?controls=0&autoplay=1&loop=1&rel=0&playlist=${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Frame;
