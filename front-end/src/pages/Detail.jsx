import useFetch from "../hooks/useFetch";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Frame from "../components/Frame";
import Comments from "../components/Comments";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PageContext } from "../context/PageContext";

const Detail = () => {
  const { videoId } = useParams();
  const [video] = useFetch(import.meta.env.VITE_ROOT_API + `video/${videoId}`);

  const { setIsDetailPage } = useContext(PageContext);

  useEffect(() => {
    if (video) {
      document.title = video.title;
      setIsDetailPage(true);
    }
  }, [setIsDetailPage, video]);

  return (
    video && (
      <>
        <Header />
        <section className="mt-24 grid grid-cols-1 gap-5 lg:grid-cols-3">
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
