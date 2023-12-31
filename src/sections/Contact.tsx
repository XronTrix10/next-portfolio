"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { toast } from "../components/ui/ReactToast";

function Contact() {
  const [fname, setFirstname] = useState("");
  const [lname, setLasttname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.3, // Percentage of element visible to trigger the animation
  });

  function validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (fname === "") {
      toast.warn("Please Enter First Name");
    } else if (lname === "") {
      toast.warn("Please Enter Last Name");
    } else if (email === "") {
      toast.warn("Please Enter Email Address");
    } else if (!validateEmail(email)) {
      toast.warn("Enter A Valid Email Address");
    } else if (text === "") {
      toast.warn("Please Enter A Message");
    } else {
      try {
        const data = {
          FirstName: fname,
          LastName: lname,
          Email: email,
          Message: text,
        };

        const id = toast.loading("Sending Email...");

        const res = await fetch("/api/formSub", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (res.status !== 200) {
          toast.update(id, {
            render: "Couldn't Send Email !",
            type: "error",
            isLoading: false,
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true,
          });
        } else {
          toast.update(id, {
            render: "Email Sent Successfully",
            type: "success",
            isLoading: false,
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true,
          });
          setFirstname("");
          setLasttname("");
          setEmail("");
          setText("");
        }
      } catch (error) {
        console.log("Got Error:", error);
      }
    }
  };

  return (
    <section
      className="w-full bg-transparent text-white p-[3.4em] md:p-[10em] grid place-content-center relative z-10"
      id="contact"
      ref={ref}
    >
      <div className="text-center mb-4 md:mb-8">
        <h2>Contact Me</h2>
        <h3>Email Me</h3>
      </div>

      <motion.form
        initial={{ opacity: 0, scale: 0.6 }} // Initial animation values
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.6,
        }} // Target animation values
        transition={{ duration: 0.7 }} // Animation duration
        className="w-full max-w-lg"
      >
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="first-name"
              type="text"
              value={fname}
              onChange={({ target }) => setFirstname(target.value)}
              placeholder="Xron"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="last-name"
              type="text"
              value={lname}
              onChange={({ target }) => setLasttname(target.value)}
              placeholder="Trix"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Your Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-600 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="username"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Email ID"
              required
            />
          </div>
          <div className="md:mb-6 w-full">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Your Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-600 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="txtmessage"
              value={text}
              onChange={({ target }) => setText(target.value)}
              placeholder="Your message here"
              rows={5}
              required
            />
          </div>
        </div>

        <div className="mt-8 md:mt-0 text-center w-auto">
          <button onClick={handleSubmit} className={"text-center"} id="btn">
            Send <i className="uil uil-message"></i>
          </button>
        </div>
      </motion.form>
    </section>
  );
}

export default Contact;
