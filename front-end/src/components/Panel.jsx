import { useContext } from "react";
import { TabsContext } from "../context/TabsContext";
import VideoCard from "./cards/VideoCard";
import useFetch from "../hooks/useFetch";
import useFilter from "../hooks/useFilter";
import handleFilterCategory from "../utils/handlerFilterCategory";

export const Panel = () => {
  const [data] = useFetch(import.meta.env.VITE_ROOT_API + "videos");

  const { activeTab } = useContext(TabsContext);

  const [filteredData] = useFilter(data, activeTab, handleFilterCategory);

  return (
    data && (
      <section className="mt-5">
        <div className="grid grid-cols-3 items-start gap-6">
          {activeTab === "Explore"
            ? data.map((d, i) => <VideoCard key={d.id} video={d} index={i} />)
            : filteredData?.map((d, i) => (
                <VideoCard key={d.id} video={d} index={i} />
              ))}
        </div>
      </section>
    )
  );
};
