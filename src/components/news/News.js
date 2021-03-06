import React from "react";
import Button from "../../hooks/Button";
import TitleHeader from "../../hooks/TitleHeader";

const News = () => {
  return (
    <section className="" id="news">
      <TitleHeader name="news"></TitleHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto lg:w-[1080px] pt-20 pb-10">
        <article data-aos="zoom-in" className="group">
          <figure className="w-full overflow-hidden">
            <img
              className="transform transition duration-500 group-hover:scale-110  cursor-pointer  lg:h-[400px]  h-[350px] w-full object-cover"
              src="https://demo.cocobasic.com/seppo-html/images/blog_img_01.jpg"
              alt=""
            />
          </figure>
          <div className="mt-5">
            <a href="/" className="text-3xl font-bold">
              How to write rogue mote of dust love
            </a>
            <p className="mt-5 text-xl">
              Bearable only through love hydrogen atoms bits of moving fluff
              culture shores of the cosmic ocean paroxysm of global death...
            </p>
            <Button title="Read More"></Button>
          </div>
        </article>
        <article data-aos="zoom-in" className="group">
          <figure className="w-full overflow-hidden">
            <img
              className="transform transition duration-500 group-hover:scale-110  cursor-pointer  lg:h-[400px]  h-[350px] w-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
              alt=""
            />
          </figure>
          <div className="mt-5">
            <a href="/" className="text-3xl font-bold">
              How to write rogue mote of dust love
            </a>
            <p className="mt-5 text-xl">
              Bearable only through love hydrogen atoms bits of moving fluff
              culture shores of the cosmic ocean paroxysm of global death...
            </p>
            <Button title="Read More"></Button>
          </div>
        </article>

        <article data-aos="zoom-in" className="group">
          <figure className="w-full overflow-hidden">
            <img
              className="transform transition duration-500 group-hover:scale-110  cursor-pointer lg:h-[400px]  h-[350px] w-full object-cover"
              src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg"
              alt=""
            />
          </figure>
          <div className="mt-5">
            <a href="/" className="text-3xl font-bold">
              How to write rogue mote of dust love
            </a>
            <p className="mt-5 text-xl">
              Bearable only through love hydrogen atoms bits of moving fluff
              culture shores of the cosmic ocean paroxysm of global death...
            </p>
            <Button title="Read More"></Button>
          </div>
        </article>
      </div>
      <div className="relative flex justify-center mb-10 lg:mb-20">
        <button className=" hover:text-green-500  hover:text-xl h-10 duration-500 w-32 hover:w-40">
          More news
        </button>
      </div>
    </section>
  );
};

export default News;
