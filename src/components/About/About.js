const About = () => {
  return (
    <div className="mb-24">
      <div className="flex ">
        <div className="bg-green-500 w-40 md:w-60 h-24 flex justify-center items-center">
          <h2 className="font-semibold text-xl text-white uppercase">About</h2>
        </div>
        <div className="w-0 h-0 border-b-green-500 border-b-[96px] border-r-transparent border-r-[96px] border-l-transparent border-l-[96px] rotate-180 -ml-24 -z-5"></div>
      </div>
      <div className="w-[90%] mx-auto lg:w-[1080px] flex flex-col md:flex-row justify-around items-center gap-5">
        <div>
          <small className="uppercase tracking-widest "> WHO WE ARE</small>
          <h2 className="font-bold text-6xl my-3">
            Live up to your creative potential.
          </h2>
          <p>
            Code the energy hidden in matter citizens of distant epochs from
            which we spring drake equation perga inconspicuous motespatch clean
            designed code and energy matter.
          </p>
          <button className="bg-green-500 w-36 my-5  md:w-48 py-2 px-4 md:py-3 md:px-6 rounded-full text-white font-semibold hover:bg-transparent border-2 border-transparent duration-500 hover:text-green-500 hover:border-green-500">
            Learn More
          </button>
        </div>
        <div className="w-full sticky top-0">
          <img
            className=""
            src="https://demo.cocobasic.com/seppo-html/images/about_01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
