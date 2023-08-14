import useFetch from "../hooks/useFetch";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Frame from "../components/Frame";
import Comments from "../components/Comments";
import Products from "../components/Products";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { videoId } = useParams();
  const [video] = useFetch(import.meta.env.VITE_ROOT_API + `video/${videoId}`);

  return (
    video && (
      <>
        <Header />
        <section className="mt-24 grid grid-cols-3 gap-5">
          <Frame linkVideo={video.linkVideo} title={video.title} />
          <Comments videoId={video.id} />
          <Products videoId={video.id} />
        </section>
        <Footer />
      </>
    )
  );
};

export default Detail;
