const Button = ({ title }) => {
  return (
    <button className="bg-green-500 w-36  lg:w-48 py-2 px-4  lg:px-6 rounded-full text-white font-semibold hover:bg-transparent border-2 border-transparent duration-500 hover:text-green-500 hover:border-green-500  my-5 uppercase">
      {title}
    </button>
  );
};

export default Button;
