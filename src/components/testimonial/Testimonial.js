import React from "react";
import Slider from "react-slick";
import TitleHeader from "../../hooks/TitleHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="p-5 md:p-20 uppercase "
      id="testimonial"
    >
      <div className=" overflow-hidden bg-black shadow-lg rounded-md text-white">
        <Slider {...settings}>
          <div className="md:h-[90%] h-[95%] md:p-20 p-5 ">
            <div className="grid text-center md:text-left md:grid-cols-1 items-center lg:w-[80%] w-[95%] mx-auto md:p-10 p-4">
              <div className="">
                <img
                  className="w-[60px] mb-5 h-[60px]  rounded-full border-2 border-green-500"
                  src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="font-bold text-primary  text-3xl text-5xl ">
                  Desito Lorem
                </h3>
                <p className="md:md:my-5 my-3">
                  Electricians will use an electric drill to help them install
                  new lighting fixtures or disassemble installed hardware to
                  access wiring and other electrical components.
                </p>
                <button className="btn btn-primary md:md:my-5 my-3">CEO</button>
              </div>
            </div>
          </div>
          <div className="md:h-[90%] h-[95%] md:p-20 p-5 ">
            <div className="grid text-center md:text-left md:grid-cols-1 items-center max-w-[1080px] w-[95%] mx-auto md:p-10 p-4">
              <div className="">
                <img
                  className="w-[60px] mb-5 h-[60px] rounded-full border-2 border-green-500"
                  src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="font-bold text-primary  text-3xl text-5xl ">
                  Lorinix Sumia
                </h3>
                <p className="md:md:my-5 my-3">
                  Electricians will use an electric drill to help them install
                  new lighting fixtures or disassemble installed hardware to
                  access wiring and other electrical components.
                </p>
                <button className="btn btn-primary md:md:my-5 my-3">
                  MANAGER
                </button>
              </div>
            </div>
          </div>
          <div className="md:h-[90%] h-[95%] md:p-20 p-5 ">
            <div className="grid text-center md:text-left md:grid-cols-1 items-center max-w-[1080px] w-[95%] mx-auto md:p-10 p-4">
              <div className="">
                <img
                  className="w-[60px] mb-5 h-[60px] rounded-full border-2 border-green-500"
                  src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="font-bold text-primary text-3xl text-5xl ">
                  Amla Ajx
                </h3>
                <p className="md:md:my-5 my-3">
                  Electricians will use an electric drill to help them install
                  new lighting fixtures or disassemble installed hardware to
                  access wiring and other electrical components.{" "}
                </p>
                <button className="btn btn-primary md:md:my-5 my-3">
                  Designer
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
