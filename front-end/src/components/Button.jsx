const Button = ({ text, handleClick }) => {
  return (
    <button
      className="font-poppins rounded-md bg-green-500 px-4 py-2 font-semibold uppercase tracking-wide text-white shadow-md"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
