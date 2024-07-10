import Navbar from "./Navbar";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <Navbar />
      <div
        className="bg-scroll bg-cover bg-no-repeat bg-dark bg-top px-4 min-h-screen flex items-center justify-center flex-col "
        style={{
          backgroundImage: `url('./img/header-background.webp')`,
        }}
        id="header"
      >
        <h1 className="font-raleway text-4xl text-gold font-bold text-center mb-3 animate-[fadeIn_1s_ease-in]">
          <span className="font-raleway text-4xl text-white font-normal text-center sm:text-6xl 2xl:text-6xl animate-[fadeLIn_1s_ease-in]">
            Witaj w
          </span>
          <br />
          <span className="text-5xl 2xl:text-6xl animate-[fadeIn_1s_ease-in]">
            GRIP Barber Academy
          </span>
        </h1>
        <div className="font-raleway  text-white text-center leading-6 tracking-widest mb-12 sm:text-2xl sm:leading-7 lg:text-lg xl:w-7/8 xl:text-xl 2xl:w-4/6 animate-[fadeIn_1s_ease-in]">
          W miejscu, gdzie sztuka fryzjerska spotyka się z pasją do kreowania
          unikalnego stylu. Nasza akademia dedykowana jest wszystkim, którzy
          pragną zgłębić tajniki profesjonalnego barberingu i podążać ścieżką
          kreatywności w świecie fryzjerstwa.
        </div>
        <div className="flex gap-6 sm:gap-20 xl:gap-12 2xl:gap-16 animate-[fadeIn_1s_ease-in]">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="cursor-pointer flex items-center font-raleway text-xs text-white font-light text-center tracking-widest p-3 border-2 border-gold bg-gold transition-all duration-300 ease-in-out hover:bg-darkgold hover:border-darkgold sm:text-xl lg:p-4 lg:font-normal xl:text-base xl:px-6 2xl:text-base 2xl:py-3 2xl:px-8 2xl:h-1/2"
          >
            WIĘCEJ O NAS
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="cursor-pointer flex items-center font-raleway text-xs text-white font-light text-center tracking-widest p-3 border-2 border-gold transition-all duration-300 ease-in-out hover:bg-darkgold hover:border-darkgold sm:text-xl lg:p-4 lg:font-normal xl:text-base xl:px-6 2xl:text-base 2xl:py-3 2xl:px-8 2xl:h-1/2"
          >
            NASZE USŁUGI
          </Link>
        </div>
        <div className="hidden 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-8 2xl:absolute 2xl:right-8 animate-[fadeIn_1s_ease-in]">
          <div className="w-1 h-32 bg-gold"></div>
          <a href="//www.facebook.com/gripbarber">
            <img
              src="./img/icon-fb.svg"
              className="cursor-pointer hover:scale-125 transition-all"
              alt="Barber Shop Facebook icon"
            />
          </a>
          <a href="//www.instagram.com/gripbarber">
            <img
              src="./img/icon-ig.svg"
              className="cursor-pointer hover:scale-125 transition-all"
              alt="Barber Shop Instagram icon"
            />
          </a>
          <a href="//www.tiktok.com/gripbarber">
            <img
              src="./img/icon-tt.svg"
              className="cursor-pointer hover:scale-125 transition-all"
              alt="Barber Shop TikTok icon"
            />
          </a>
          <div className="w-1 h-32 bg-gold"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
