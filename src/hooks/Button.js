const Button = (children) => {
  return (
    <button className="bg-green-500 w-36  md:w-48 py-2 px-4 md:py-3 md:px-6 rounded-full text-white font-semibold hover:bg-transparent border-2 border-transparent duration-500 hover:text-green-500 hover:border-green-500">
      {children}
    </button>
  );
};

export default Button;
