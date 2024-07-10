import React, { useState } from "react";

const InputField = ({ iconProp, typeProp, placeholderProp }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex mb-6">
      <div
        className={`bg-${
          isFocused ? "gold" : "dark"
        } inline-block px-2 py-2 transition-all duration-300`}
      >
        <img
          className="w-6 h-auto"
          src={iconProp}
          alt={`${placeholderProp} icon`}
        ></img>
      </div>
      <input
        className="w-full bg-transparent border-b-2 border-dark font-raleway font-light text-center text-lightgray leading-4 transition-all duration-300 focus:outline-0 focus:border-gold lg:w-100% 2xl:w-1/2"
        type={typeProp}
        placeholder={placeholderProp}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
};

export default InputField;
