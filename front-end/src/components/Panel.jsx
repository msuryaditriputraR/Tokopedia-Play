import { useContext, useEffect, useState } from "react";
import { TabsContext } from "../context/TabsContext";
import VideoCard from "./cards/VideoCard";
import useFetch from "../hooks/useFetch";
import useFilter from "../hooks/useFilter";
import handleFilterCategory from "../utils/handlerFilterCategory";
import { SearchContext } from "../context/SearchContext";
import searchVideo from "../api/searchVideo";

export const Panel = () => {
  const [data] = useFetch(import.meta.env.VITE_ROOT_API + "videos");

  const { activeTab } = useContext(TabsContext);
  const { keyword } = useContext(SearchContext);

  const [videoSearch, setVideoSearch] = useState();

  const [filteredData] = useFilter(data, activeTab, handleFilterCategory);

  useEffect(() => {
    if (keyword) {
      searchVideo(keyword)
        .then((res) => res.json())
        .then((data) => setVideoSearch(data));
    }
  }, [keyword]);

  return (
    data && (
      <section className="mt-5">
        {keyword ? (
          videoSearch && videoSearch.message ? (
            <p className="py-5 text-center text-xl font-medium text-red-600">
              {videoSearch.message}
            </p>
          ) : (
            <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
              {videoSearch?.map((v, i) => (
                <VideoCard key={v.id} video={v} index={i} />
              ))}
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
            {activeTab === "Explore"
              ? data.map((d, i) => <VideoCard key={d.id} video={d} index={i} />)
              : filteredData?.map((d, i) => (
                  <VideoCard key={d.id} video={d} index={i} />
                ))}
          </div>
        )}
      </section>
    )
  );
};
