import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "./Utility/SectionHeading";
import NavbarDetails from "./Utility/NavbarDetails";
import { Link } from "react-router-dom";

const FinancingDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white ">
      <div className="animate-[fadeIn_0.5s_ease-in]">
        <NavbarDetails></NavbarDetails>
        <div className="bg-dark min-h-screen py-8 px-4 md:px-16 text-white flex flex-col items-center gap-6 font-raleway ">
          <SectionHeading title="DOFINANSOWANIA" />
          <p className="text-lg lg:text-2xl  text-gold ">
            Czy słyszałeś, że jako osoba bezrobotna masz możliwość skorzystania
            z dofinansowania na kursy zawodowe, w tym barberskie? To świetna
            okazja, aby rozwinąć swoje umiejętności.
          </p>
          <div className="flex flex-col gap-8 text-base lg:text-xl text-justify bg-neutral-900 px-4 py-6 lg:p-12">
            <p>
              Najpierw musisz udać się do urzędu pracy odpowiadającego za Twój
              rejon zamieszkania i zasięgnąć informacji o programach
              szkoleniowych. Kiedy już otrzymasz wniosek, wpisz nazwę kursu,
              którego szukasz, i określ ośrodek, który chcesz, aby przeprowadził
              szkolenie. Pamiętaj, że istnieje limit finansowy na takie kursy,
              który wynosi maksymalnie 300% średniego wynagrodzenia.
            </p>
            <p>
              Dofinansowanie jest dostępne dla osób zarejestrowanych jako
              bezrobotne, które planują założyć własny biznes lub mają
              zagwarantowane zatrudnienie po zakończeniu kursu.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-gold font-bold">
                Masz prawo do szkolenia, zwłaszcza jeśli:
              </p>
              <ul className="list-disc list-inside ml-8 font-normal text-white">
                <li>Nie posiadasz zawodowych kwalifikacji</li>
                <li>
                  Musisz zmienić lub rozszerzyć swoje kwalifikacje zawodowe
                </li>
                <li>
                  Nie jesteś już w stanie pracować w dotychczasowym zawodzie
                </li>
                <li>Masz trudności z akyytywnym poszukiwaniem pracy.</li>
              </ul>
            </div>
            <p className="text-sm lg:text-lg">
              Urząd pracy ma do 30 dni na podjęcie decyzji o przyznaniu
              dofinansowania, więc warto poszukać odpowiedniego kursu i
              zarezerwować jego termin możliwie szybko, aby zdążyć na czas i
              ewentualnie móc odwołać się od decyzji, jeśli będzie taka
              potrzeba.{" "}
            </p>
          </div>
          <div className="flex justify-center mt-16">
            <Link
              to={-1}
              spy={true}
              smooth={true}
              offset={120}
              duration={500}
              className="cursor-pointer bg-gold flex items-center font-raleway text-xs text-white font-light text-center tracking-widest p-3 border-2 border-gold transition-all duration-300 ease-in-out hover:bg-darkgold hover:border-darkgold sm:text-xl lg:p-4 lg:font-normal xl:text-base xl:px-6 2xl:text-base 2xl:py-3 2xl:px-8 2xl:h-1/2"
            >
              Powrót
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingDetails;
