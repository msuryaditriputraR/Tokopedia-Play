const Button = ({ children, handleClick, cls }) => {
  return (
    <button
      className={`bg-green-500 font-poppins font-semibold uppercase tracking-wide text-white shadow-md ${cls}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
