import useFetch from "../hooks/useFetch";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Frame from "../components/Frame";
import Comments from "../components/Comments";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
  const { videoId } = useParams();
  const [video] = useFetch(import.meta.env.VITE_ROOT_API + `video/${videoId}`);

  useEffect(() => {
    if (video) {
      document.title = video.title;
    }
  }, [video]);

  return (
    video && (
      <>
        <Header />
        <section className="mt-24 grid grid-cols-3 gap-5">
          <Frame
            linkVideo={video.linkVideo}
            title={video.title}
            youtubeId={video.youtubeId}
          />
          <Comments videoId={video.id} />
          <Products videoId={video.id} />
        </section>
        <Footer />
      </>
    )
  );
};

export default Detail;
