import React, { useState } from "react";

const InputField = ({ iconSrc, type, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex justify-start mb-6">
      <div
        className={`bg-${
          isFocused ? "gold" : "dark"
        } inline-block px-2 py-2 transition-all duration-300`}
      >
        <img
          className="w-6 h-auto"
          src={iconSrc}
          alt={`${placeholder} icon`}
        ></img>
      </div>
      <input
        className="w-2/3 font-light leading-4 text-center transition-all duration-300 bg-transparent border-b-2 border-dark font-juzek text-lightgray focus:outline-0 focus:border-gold"
        type={type}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
};

export default InputField;
