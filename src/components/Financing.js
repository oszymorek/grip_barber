import { Link } from "react-router-dom";

function Financing() {
  return (
    <>
      <div className="relative ">
        <div
          className="absolute inset-0 bg-scroll bg-cover bg-no-repeat bg-center z-0 "
          style={{
            backgroundImage: `url('./img/photos/photo-4.jpg')`,
          }}
        />
        <div className="flex flex-col justify-evenly gap-8 items-center w-full bg-dark bg-opacity-80 py-16 px-4 2xl:px-20 relative z-10">
          <h3 className="text-gold font-raleway lg:text-xl 2xl:text-2xl text-justify sm:text-lg md:w-5/6 md:text-xl lg:w-7/8">
            Czy słyszałeś, że jako osoba bezrobotna masz możliwość skorzystania
            z <span className="font-bold">dofinansowania</span> na kursy
            zawodowe, w tym barberskie? To świetna okazja, aby rozwinąć swoje
            umiejętności.
          </h3>
          <div>
            <Link
              to="/financing"
              className="flex items-center px-10 py-3 text-sm font-light leading-5 tracking-widest text-center text-white font-raleway bg-gold transition-all duration-300 ease-in-out hover:bg-darkgold lg:p-4 lg:font-normal 2xl:px-14"
            >
              DOWIEDZ SIĘ WIĘCEJ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Financing;
