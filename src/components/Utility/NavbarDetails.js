import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-row items-center gap-12 justify-between bg-dark p-12 border-b border-gold">
      <img
        src="./img/logo.svg"
        className="w-1/3 md:w-1/6 lg:w-1/8 xl:w-1/12"
        alt="Grip Barber Logo"
      ></img>
      <Link
        to={-1}
        className="px-4 font-raleway tracking-wider py-2 text-white cursor-pointer text-xl sm:text-3xl md:text-xl lg:text-2xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-50 after:transition after:duration-300 after:origin-left"
      >
        Powrót
      </Link>
    </div>
  );
}

export default Footer;
