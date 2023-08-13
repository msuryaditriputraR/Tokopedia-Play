import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Frame from "../components/Frame";
import Comments from "../components/Comments";
import Products from "../components/Products";

const Detail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const data = [
      {
        name: "Pasar Ponsel Surabaya",
        title: "Oppo Reno 5",
        videoId: "_DHtREjG0Kc",
        linkVideo: "https://www.youtube-nocookie.com/embed/_DHtREjG0Kc",
        comments: [],
      },
      {
        name: "JV Hasanah",
        title: "Gamis Lebaran nyaman seharian",
        videoId: "el3vuFVkZuk",
        linkVideo: "https://www.youtube-nocookie.com/embed/el3vuFVkZuk",
        comments: [],
      },
      {
        name: "Libby Baby",
        title: "REVIEW BAJU ANAK LIBBY BABY",
        videoId: "CW7AOyBk3Po",
        linkVideo: "https://www.youtube-nocookie.com/embed/CW7AOyBk3Po",
        comments: [],
      },
      {
        name: "Okechuku",
        title: "Review Produk Okechuku Official With paulinekharismaCTK",
        videoId: "b7GeMc-RvGg",
        linkVideo: "https://www.youtube-nocookie.com/embed/b7GeMc-RvGg",
        comments: [],
      },
      {
        name: "Unilever",
        title: "Setiap U Berikan Kebaikan",
        videoId: "wn90Ot2YA78",
        linkVideo: "https://www.youtube-nocookie.com/embed/wn90Ot2YA78",
        comments: [],
      },
      {
        name: "Galaxy Camera",
        title:
          "Canon EOS R10 Review Indonesia | Hasil Foto Video & Spesifikasi Lengkap",
        videoId: "DLKjeBlykVY",
        linkVideo: "https://www.youtube-nocookie.com/embed/DLKjeBlykVY",
        comments: [],
      },
    ];

    setVideo(data.filter((d) => d.videoId === videoId)[0]);
  }, [videoId]);
  return (
    <>
      <Header />
      <section className="mt-24 grid grid-cols-3 gap-5">
        <Frame
          videoId={video.videoId}
          linkVideo={video.linkVideo}
          title={video.title}
        />
        <Comments />
        <Products videoId={video.videoId} />
      </section>
      <Footer />
    </>
  );
};

export default Detail;
