import { Link } from "react-router-dom";

const BoxServices = ({ imgProp, descProp, altProp }) => {
  return (
    <div className="flex flex gap-6 justify-center sm:gap-8 lg:w-3/3 2xl:gap-10">
      <img
        src={imgProp}
        alt={altProp}
        className="shadow-custom object-cover border-2 border-gold w-full md:w-7/8 xl:w-7/8 2xl:w-4/6"
      ></img>
      <div className="font-raleway flex flex-col gap-24 justify-between text-base font-light text-justify text-white sm:text-2xl md:w-7/8 md:text-xl lg:text-xl lg:tracking-wide 2xl:text-xl 2xl:w-5/6 ">
        {descProp}
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-xs font-light tracking-widest text-white font-raleway 2xl:text-base">
            Zobacz pełny zakres i opis naszej oferty.
          </h6>
          <Link
            to="/services"
            className="flex items-center px-10 py-3 text-sm font-light leading-5 tracking-widest text-center text-white font-raleway bg-gold transition-all duration-300 ease-in-out hover:bg-darkgold lg:p-4 lg:font-normal 2xl:mb-12 2xl:px-14"
          >
            WIĘCEJ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxServices;
