const type = {
  primary: "bg-blue-600 text-white border-none",
  secondary: "bg-pink-100 text-white",
  danger: "bg-red-600 text-white border-none",
};

const Button = ({ children, variant }) => {
  return (
    <button
      className={`${type[variant]} leading-none px-3 py-3 border border-gray-300 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
