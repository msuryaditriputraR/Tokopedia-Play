import VideoCard from "./cards/videoCard";

export const Panel = () => {
  const data = [
    {
      name: "Pasar Ponsel Surabaya",
      title: "Oppo Reno 5",
      videoId: "_DHtREjG0Kc",
      linkVideo: "https://www.youtube.com/embed/_DHtREjG0Kc",
      thumbnailURL: "https://i.ytimg.com/vi/_DHtREjG0Kc/mqdefault.jpg",
      category: ["Elektronik"],
    },
    {
      name: "JV Hasanah",
      title: "Gamis Lebaran nyaman seharian",
      videoId: "el3vuFVkZuk",
      linkVideo: "https://www.youtube.com/embed/el3vuFVkZuk",
      thumbnailURL: "https://i.ytimg.com/vi/el3vuFVkZuk/mqdefault.jpg",
      category: ["Fashion"],
    },
    {
      name: "Libby Baby",
      title: "REVIEW BAJU ANAK LIBBY BABY",
      videoId: "CW7AOyBk3Po",
      linkVideo:
        "https://www.youtube-nocookie.com/embed/CW7AOyBk3Po?controls=0&amp;start=12",
      thumbnailURL: "https://i.ytimg.com/vi/CW7AOyBk3Po/mqdefault.jpg",
      category: ["Fashion"],
    },
    {
      name: "Okechuku",
      title: "Review Produk Okechuku Official With paulinekharismaCTK",
      videoId: "b7GeMc-RvGg",
      linkVideo: "https://www.youtube.com/embed/b7GeMc-RvGg",
      thumbnailURL: "https://i.ytimg.com/vi/b7GeMc-RvGg/mq2.jpg",
      category: ["Fashion"],
    },
    {
      name: "Unilever",
      title: "Setiap U Berikan Kebaikan",
      videoId: "wn90Ot2YA78",
      linkVideo: "https://www.youtube.com/embed/wn90Ot2YA78",
      thumbnailURL: "https://i.ytimg.com/vi/wn90Ot2YA78/maxresdefault.jpg",
      category: ["Health & Care"],
    },
    {
      name: "Galaxy Camera",
      title:
        "Canon EOS R10 Review Indonesia | Hasil Foto Video & Spesifikasi Lengkap",
      videoId: "DLKjeBlykVY",
      linkVideo: "https://www.youtube.com/embed/DLKjeBlykVY",
      thumbnailURL: "https://i.ytimg.com/vi/DLKjeBlykVY/maxresdefault.jpg",
      category: ["Elektronik"],
    },
  ];

  return (
    <section className="mt-5">
      <div className="grid grid-cols-3 items-start gap-6">
        {data.map((d, i) => (
          <VideoCard key={i} video={d} index={i} />
        ))}
      </div>
    </section>
  );
};
