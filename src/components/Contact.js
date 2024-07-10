import React, { useState } from "react";
import SectionHeading from "./Utility/SectionHeading";
import InputField from "./Contact/InputField";

function Contact() {
  const inputObject = [
    {
      iconSrc: "./img/icons/icon-user.svg",
      type: "text",
      placeholder: "IMIĘ",
    },
    {
      iconSrc: "./img/icons/icon-mail.svg",
      type: "email",
      placeholder: "EMAIL",
    },
    {
      iconSrc: "./img/icons/icon-phone.svg",
      type: "text",
      placeholder: "NR. TELEFONU",
    },
  ];

  const [message, setMessage] = useState("");

  const handleTextareaClick = () => {
    setMessage("");
  };

  return (
    <div
      className="bg-neutral-100 px-6 lg:px-8 py-8 pb-16 2xl:px-24"
      id="contact"
    >
      <SectionHeading title="KONTAKT" />
      <div className="flex flex-col gap-12 lg:flex-row md:justify-center 2xl:gap-0">
        <div className="flex flex-col justify-center gap-2 text-lg w-full md:w-3/3 xl:w-1/3 2xl:w-2/3">
          {inputObject.map((input, index) => (
            <InputField
              key={index}
              iconProp={input.iconSrc}
              typeProp={input.type}
              placeholderProp={input.placeholder}
            />
          ))}

          <textarea
            className="p-2 w-full min-h-[12rem] text-sm h-auto resize-none border border-gold font-raleway font-light focus:outline-0 relative shadow-custom 2xl:h-72 2xl:w-5/6"
            onClick={handleTextareaClick}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          >
            {message}
          </textarea>
          <div className="flex justify-end 2xl:w-5/6">
            <a
              href="#"
              className="bg-gold inline flex cursor-pointer items-center font-raleway text-xs text-white font-light text-center tracking-widest p-3 border-2 border-gold bg-gold transition-all duration-300 ease-in-out hover:bg-darkgold hover:border-darkgold sm:text-xl lg:p-4 lg:font-normal xl:text-base xl:px-6 2xl:text-base 2xl:py-3 2xl:px-8"
            >
              WYŚLIJ
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5011.230491740575!2d17.02037311429445!3d51.0971078143705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3afd17ac5e3%3A0x16a032b98494b544!2sGrip%20Barber%20Shop%20%26%20Academy!5e0!3m2!1spl!2spl!4v1708607846434!5m2!1spl!2spl"
          className="w-full aspect-auto aspect-video border border-gold lg:w-2/3 "
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map with location of saloon"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
