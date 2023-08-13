const Tabs = () => {
  const tabsMenu = ["Explore", "Fashion", "Elektronik", "Health & Care"];
  return (
    <section className="mt-20">
      <ul className="flex gap-x-2">
        {tabsMenu.map((menu, index) => (
          <li
            key={index}
            className=" cursor-pointer  rounded-full border border-slate-300 px-4 py-2 capitalize shadow-sm transition hover:bg-green-500  hover:text-white hover:shadow-md"
          >
            {menu}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
