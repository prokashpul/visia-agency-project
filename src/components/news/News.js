import React from "react";
import Button from "../../hooks/Button";
import TitleHeader from "../../hooks/TitleHeader";

const News = () => {
  return (
    <section className="">
      <TitleHeader name="news"></TitleHeader>
      <div className="grid md:grid-flow-col gap-10 w-[90%] mx-auto lg:w-[1080px] pt-20 pb-10">
        <article className="group">
          <figure className="w-full overflow-hidden">
            <img
              className="transform transition duration-500 group-hover:scale-110  cursor-pointer "
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
        <article className="group">
          <figure className="w-full overflow-hidden">
            <img
              className="transform transition duration-500 group-hover:scale-110  cursor-pointer "
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

        <article className="group">
          <figure className="w-full overflow-hidden">
            <img
              className="transform transition duration-500 group-hover:scale-110  cursor-pointer"
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
      </div>
      <div className="relative flex justify-center mb-10 md:mb-20">
        <button className=" hover:text-green-500  hover:text-xl h-10 duration-500 w-32 hover:w-40">
          More news
        </button>
      </div>
    </section>
  );
};

export default News;
