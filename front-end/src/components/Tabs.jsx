import { useContext } from "react";
import { TabsContext } from "../context/TabsContext";

const Tabs = () => {
  const tabsMenu = ["Explore", "Fashion", "Elektronik", "Health & Care"];

  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <section className="mt-28 xl:mt-20">
      <ul className="carousel no-scrollbar gap-x-2">
        {tabsMenu.map((menu, index) => (
          <li
            key={index}
            className={`cursor-pointer  rounded-full border border-slate-300 px-4 py-2 capitalize shadow-sm transition hover:bg-green-500  hover:text-white hover:shadow-md ${
              activeTab === menu
                ? "bg-green-500 text-white"
                : "bg-white text-current"
            }`}
            onClick={() => {
              localStorage.setItem("activeTab", menu);
              setActiveTab(menu);
            }}
          >
            {menu}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
