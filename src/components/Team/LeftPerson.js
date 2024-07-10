import React from "react";

const LeftPerson = ({ nameProp, lastNameProp, imgProp, descProp }) => {
  return (
    <div>
      <div className="w-full flex justify-between items-end sm:mt-6 sm:items-end">
        <div className="font-juzek text-lg tracking-wide">
          <h4>
            <span className="text-white relative text-2xl inline-block bg-gold leading-4 pl-1 pt-1 mr-1 sm:pt-2 pb-1/2 mr-2">
              {nameProp}
            </span>
            <span className="text-2xl">{lastNameProp}</span>
          </h4>
        </div>
        <img
          className="box-border border-b-4 border-gold w-16 sm:h-16"
          src={imgProp}
          alt="acct"
        />
      </div>
      <div className="w-20 h-1 bg-gold mt-1 mb-2"></div>
      <div className="font-raleway text-lg font-light text-justify mb-6 sm:text-2xl">
        {descProp}
      </div>
    </div>
  );
};

export default LeftPerson;
