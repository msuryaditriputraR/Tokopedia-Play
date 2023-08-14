import { useContext } from "react";
import { TabsContext } from "../context/TabsContext";
import VideoCard from "./cards/VideoCard";
import useFetch from "../hooks/useFetch";

export const Panel = () => {
  const [data] = useFetch(import.meta.env.VITE_ROOT_API + "videos");

  const { activeTab } = useContext(TabsContext);

  return (
    data && (
      <section className="mt-5">
        <div className="grid grid-cols-3 items-start gap-6">
          {activeTab === "Explore"
            ? data.map((d, i) => <VideoCard key={i} video={d} index={i} />)
            : data
                .filter((d) => d.category.includes(activeTab))
                .map((d, i) => <VideoCard key={i} video={d} index={i} />)}
        </div>
      </section>
    )
  );
};
