import React from "react";
import TitleHeader from "../../hooks/TitleHeader";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubLine,
  RiEarthFill,
} from "react-icons/ri";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { yes_i_understand: false },
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t76az3a",
        "template_f5mnbtc",
        e.target,
        "1J5K-uIYzMdeqtSOq"
      )
      .then(
        (result) => {
          Swal.fire(
            "Email Send Successfully",
            "You clicked the ok button!",
            "success"
          );
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="" id="contact">
      <TitleHeader name="Contact"></TitleHeader>
      <div className="grid md:grid-cols-2 gap-5 w-[90%] mx-auto lg:w-[1080px] my-10 ">
        <div className="flex flex-col gap-5 p-5" data-aos="fade-right">
          <small>CONTACT US</small>
          <h2 className="text-3xl md:text-5xl font-bold">Lets start Working</h2>
          <p className="font-semibold text-xl text-gray-500">
            Because they are hard, because that goal will serve to organize and
            measure the best of our energies and skills, because that challenge
            is one that we are willing to accept one we are.
          </p>
          <div className="4" data-aos="fade-up">
            <ul className="flex justify-start items-center gap-2  h-20 w-full md:w-72 ">
              <li className="hover:text-green-500 text-black duration-500 font-bold text-3xl">
                <a href="/">
                  <RiFacebookFill />
                </a>
              </li>
              <li className="hover:text-green-500 text-black duration-500 font-bold text-3xl">
                <a href="/">
                  <RiTwitterFill />
                </a>
              </li>
              <li className="hover:text-green-500 text-black duration-500 font-bold text-3xl">
                <a href="/">
                  <RiLinkedinBoxFill />
                </a>
              </li>
              <li className="hover:text-green-500 text-black duration-500 font-bold text-3xl">
                <a href="/">
                  <RiGithubLine />
                </a>
              </li>
              <li className="hover:text-green-500 text-black duration-500 font-bold text-3xl">
                <a href="/">
                  <RiEarthFill />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" " data-aos="fade-left">
          <div className="flex items-center gap-5">
            <div className="w-full">
              <form onSubmit={sendEmail}>
                <input
                  placeholder="Name"
                  required
                  className="border-b-2 pl-2 pt-2   placeholder-black   border-black
 outline-0 w-full mb-5 focus:border-green-500"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                  })}
                />

                <input
                  required
                  placeholder="Email"
                  className="border-b-2 pl-2 pt-2   placeholder-black   border-black
 outline-0 w-full mb-5 focus:border-green-500"
                  {...register("email", {
                    required: true,
                    maxLength: 30,
                  })}
                />

                <input
                  required
                  placeholder="Subject"
                  className="border-b-2 pl-2 pt-2   placeholder-black   border-black
 outline-0 w-full mb-5 focus:border-green-500"
                  {...register("subject", {
                    required: true,
                    maxLength: 50,
                  })}
                />

                <textarea
                  required
                  placeholder="Message"
                  {...register("message", {
                    required: true,
                    maxLength: 150,
                  })}
                  className="border-b-2 pl-2 pt-2   placeholder-black   border-black
 outline-0 h-36 w-full mb-5 focus:border-green-500"
                ></textarea>

                <input
                  type="submit"
                  value="Send"
                  className="bg-green-500 w-full py-2 px-4 md:py-2 md:px-6 rounded-full text-white font-semibold hover:bg-transparent border-2 border-transparent duration-500 hover:text-green-500 hover:border-green-500  my-5 uppercase cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
