import Button from "../../hooks/Button";
import TitleHeader from "../../hooks/TitleHeader";

const About = () => {
  return (
    <div className="mb-24">
      <TitleHeader name="About"></TitleHeader>
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
          <Button title="Learn More"></Button>
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
