import { Link } from "react-scroll";

const PersonCard = ({ imgProp, nameProp, lastNameProp, descProp }) => {
  return (
    <div className="flex bg-dark ">
      <img src={imgProp} className="w-1/2  object-cover h-stretch "></img>
      <div className="bg-dark px-4 py-4  flex flex-col justify-between gap-6">
        <h4 className="font-raleway flex justify-start items-center font-bold text-2xl tracking-wider lg:text-3xl">
          <p className="text-white inline-block relative bg-gold text-base leading-4 pl-1 py-1 mr-2 2xl:text-xl">
            {nameProp}
          </p>
          <p className="inline-block text-base 2xl:text-xl text-white">
            {lastNameProp}
          </p>
        </h4>
        <p className="text-white font-raleway text-xs text-justify font-light 2xl:text-base">
          {descProp}
        </p>
        <div className="flex justify-center ">
          <Link
            to={-1}
            spy={true}
            smooth={true}
            offset={120}
            duration={500}
            className="cursor-pointer bg-gold flex items-center font-raleway text-xs text-white font-light text-center tracking-widest p-3 border-2 border-gold transition-all duration-300 ease-in-out hover:bg-darkgold hover:border-darkgold sm:text-xl md:text-xs lg:p-4 lg:font-normal xl:text-base xl:px-6 2xl:text-base 2xl:py-4 2xl:px-8 2xl:h-1/2"
          >
            WIĘCEJ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
