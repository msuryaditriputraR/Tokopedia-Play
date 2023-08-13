import Button from "./Button";
import Search from "./Search";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between rounded-b-2xl bg-green-200 bg-opacity-5 bg-clip-padding px-14 shadow backdrop-blur-xl backdrop-filter">
      <img src="/logo.png" alt="logo" className="w-[150px] drop-shadow-md" />
      <Search />
      <Button handleClick={() => {}} cls="px-4 py-2 rounded-md">
        Sign In
      </Button>
    </header>
  );
};

export default Header;
