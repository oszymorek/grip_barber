import React from "react";
import SectionHeading from "./Utility/SectionHeading";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div
      className="flex flex-col items-center w-full bg-dark py-8 px-4 2xl:px-4"
      id="services"
    >
      <SectionHeading title="Kursy" />
      <div className="flex flex-col gap-6 justify-center items-center sm:gap-8 lg:flex-row lg:px-12 lg:items-stretch 2xl:gap-12">
        <img
          src="../../../img/ourServices/services_img_2.svg"
          alt="Barbershop at work"
          className="shadow-custom object-cover border-2 border-gold w-full md:w-3/4 lg:w-1/2 2xl:w-4/6"
        />
        <div className="font-raleway flex flex-col gap-12 justify-between text-base font-light text-justify text-white sm:text-2xl md:w-7/8 md:text-lg lg:gap-24 lg:justify-evenly lg:w-2/4 lg:tracking-wide 2xl:text-3xl 2xl:w-5/6">
          <p className="font-raleway flex flex-col gap-12 justify-between text-base font-light text-justify text-white sm:text-2xl md:w-7/8 md:text-lg lg:gap-24 lg:justify-around lg:tracking-wide 2xl:text-3xl 2xl:tracking-wider 2xl:w-6/6">
            Nasza kadra instruktorska składa się z wyjątkowych profesjonalistów
            z wieloletnim doświadczeniem w branży barberingu. To osoby, które
            nie tylko doskonale opanowały techniki fryzjerskie, ale również
            miały ogromny wpływ na rozwój i budowanie trendów barberingu w
            Polsce. Dzięki ich wiedzy i umiejętnościom, jesteśmy w stanie
            zapewnić naszym uczniom najwyższy poziom szkolenia oraz wprowadzić
            ich w świat najnowszych trendów i technik. Każdy instruktor jest
            pasjonatem swojej pracy i chętnie dzieli się swoją wiedzą oraz
            doświadczeniem z naszymi uczniami. To dzięki nim nasza szkoła stała
            się znana jako miejsce, w którym można zdobyć kompleksowe i
            profesjonalne wykształcenie z zakresu barberingu.
          </p>
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-xs font-light tracking-widest text-white mb-4 font-raleway 2xl:text-base">
              Zobacz pełny zakres i opis naszej oferty.
            </h6>
            <Link
              to="/services"
              className="flex items-center px-10 py-3 text-sm font-light leading-5 tracking-widest text-center text-white font-raleway bg-gold transition-all duration-300 ease-in-out hover:bg-darkgold lg:p-4 lg:font-normal 2xl:px-14"
            >
              WIĘCEJ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
