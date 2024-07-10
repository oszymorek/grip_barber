import { Link } from "react-router-dom";

function NoFoundPage() {
  return (
    <div className="bg-cover bg-center bg-hero px-4 min-h-screen flex items-center justify-center flex-col gap-6">
      <img
        src="./img/header-background.jpg"
        alt="Background"
        className="absolute top-0 left-0 inset-0 w-full h-full object-cover z-[-10] filter brightness-25	"
      />
      <img
        src="./img/logo.svg"
        alt="Grip Barber Logo"
        className="w-3/4 md:w-1/5"
      />
      <p className="font-raleway text-white text-2xl">Nie znaleziono strony</p>
      <p className="font-raleway text-white text-xs">(404 Not Found)</p>
      <Link to="/">
        <div className="bg-gold inline flex cursor-pointer items-center font-raleway text-xs text-white font-light text-center tracking-widest p-3 border-2 border-gold bg-gold sm:text-xl lg:p-4 lg:font-normal xl:text-base xl:px-6 2xl:text-base 2xl:py-3 2xl:px-8">
          Strona główna
        </div>
      </Link>
    </div>
  );
}

export default NoFoundPage;
