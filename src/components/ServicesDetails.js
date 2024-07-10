import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BoxDetails from "../components/OurServices/BoxDetailsAlt";
import BoxPrice from "../components/OurServices/BoxPrice";
import NavbarDetails from "./Utility/NavbarDetails";
import SectionHeading from "./Utility/SectionHeading";
import { Link } from "react-router-dom";

const ServicesDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-dark">
      <div className="animate-[fadeIn_0.5s_ease-in]">
        <NavbarDetails></NavbarDetails>

        <div className="bg-dark py-8 px-4 flex flex-col ">
          <SectionHeading title="KURSY" />
          <div className="text-white tracking-wide font-raleway md:px-16 md:text-xl flex flex-col gap-12 ">
            <div className="flex flex-col gap-6 bg-neutral-900 p-12 text-lg lg:text-xl ">
              <div>
                <BoxDetails desc="PODSTAWY FRYZJERSTWA MĘSKIEGO" index="1" />
                <ul className="lg:px-32 list-disc list-inside font-light ">
                  <li>Miesięczny kurs, dokładnie 100 godzin szkolenia.</li>
                  <li>
                    Godziny możesz dopasować indywidualnie, nie tracąc przy tym
                    obecnego zatrudnienia.
                  </li>
                  <li>Możliwość dofinansowania</li>
                  <li>
                    Ostatnie 25 godzin kursu to praktyki w oddziale Naszego
                    Barber Shopu (obsługa klienta za minimalną określoną stawkę)
                  </li>
                </ul>
              </div>
              <p className="text-gold ">
                Na powyższym kursie w Grip Barber Academy możesz zdobyć szereg
                praktycznych umiejętności związanych z barberingiem. Oto
                niektóre z nich:
              </p>
              <ol className="lg:px-32 flex flex-col  gap-4 list-decimal list-inside font-light mb-2 ">
                <li>
                  Strzyżenie męskie: Nauczymy Cię różnych technik strzyżenia
                  męskiehgo, takich jak strzyżenie maszynką, nożyczkami, czy
                  trymerem. Nauczysz się również kształtowania zarostu i brody.
                </li>
                <li>
                  Golenie tradycyjne: Nauczymy Cię sztuki golenia tradycyjnego,
                  włączając w to przygotowanie skóry, stosowanie gorących
                  ręczników, użycie brzytwy i odpowiednich produktów
                  pielęgnacyjnych.
                </li>
                <li>
                  Stylizacja włosów: Nauczymy Cię różnych technik stylizacji
                  włosów męskich, włączając w to użycie produktów do stylizacji,
                  formowanie fryzur i tworzenie modnych i nowoczesnych stylów.
                </li>
                <li>
                  Obsługa klienta: zadbamy o to by umiejętności obsługi klienta,
                  takich jak komunikacja, doradztwo w doborze fryzury i
                  pielęgnacji włosów, oraz budowanie trwałych relacji z
                  klientami.
                </li>
                <li>
                  Higiena i bezpieczeństwo: Nauczymy Cię również zasad higieny i
                  bezpieczeństwa w pracy, takich jak odpowiednie dezynfekowanie
                  narzędzi i utrzymanie czystości w salonie.
                </li>
                <li>
                  Biznes barberingowy: Na kursie omówimy również podstawy
                  prowadzenia własnego biznesu barberingowego, włączając w to
                  marketing, zarządzanie finansami i budowanie marki.
                </li>
              </ol>
              <p className=" text-gold ">
                To tylko kilka z umiejętności, które możesz zdobyć na kursie w
                Grip Barber Academy. Nasze szkolenie jest intensywne i
                praktyczne, dając Ci niezbędne umiejętności do rozpoczęcia
                kariery w barberingiem.
              </p>
              <BoxPrice price="8800 zł"></BoxPrice>
            </div>
            <div className="bg-neutral-900 p-12">
              <BoxDetails
                desc="Jednodniowy Kurs Modern Długie włosy - Warsztaty"
                index="2"
              />
              <ul className="flex flex-col gap-4 font-light text-lg lg:text-xl">
                <li>
                  Podczas szkolenia będziesz mieć okazję obserwować i
                  praktykować różne techniki, które są popularne w dzisiejszych
                  trendach fryzjerskich. Będziesz również uczyć się, jak
                  dobierać odpowiednie narzędzia i produkty do długich włosów,
                  aby osiągnąć pożądane efekty.
                </li>
                <li>
                  Szkolenie Modern look&learn - długie włosy jest skierowane
                  zarówno do fryzjerów początkujących, jak i do bardziej
                  doświadczonych profesjonalistów, którzy chcą poszerzyć swoją
                  wiedzę i umiejętności w zakresie fryzjerstwa dla długich
                  włosów. Nie są wymagane żadne wcześniejsze doświadczenia ani
                  umiejętności, ponieważ szkolenie jest oparte na praktyce i
                  umożliwia uczestnikom naukę poprzez obserwację i praktykę.
                </li>

                <li>
                  Całe szkolenie trwa jeden dzień i odbywa się w grupie.
                  Uczestnicy mają możliwość zadawania pytań, uzyskiwania
                  informacji zwrotnych od instruktora i wymiany doświadczeń z
                  innymi uczestnikami. Po ukończeniu szkolenia otrzymasz
                  certyfikat potwierdzający udział w kursie Modern look&learn -
                  długie włosy.
                </li>

                <li>
                  Jeśli jesteś zainteresowany szkoleniem i chcesz poszerzyć
                  swoje umiejętności fryzjerskie w zakresie długich włosów, to
                  kurs Modern look&learn - długie włosy może być idealnym
                  wyborem dla Ciebie.
                </li>
              </ul>
              <BoxPrice price="850 zł"></BoxPrice>
            </div>
            <div className="bg-neutral-900 p-12 text-lg lg:text-xl">
              <BoxDetails
                desc="Jednodniowy Kurs Modern - Krótkie Fryzury -  Warsztaty "
                index="3"
              />
              <p className="font-light ">
                Przeżyj intensywny dzień kreatywnego szkolenia z nowymi trendami
                w świecie krótkich fryzur męskich. Nasz jednodniowy kurs
                uzupełniający to idealna okazja, by nauczyć się zaawansowanych
                technik nowoczesnego męskiego fryzjerstwa. Będziesz obserwować,
                uczyć się i praktykować na główkach fryzjerskich, zgłębiając
                tajniki połączenia użytkowych, krótkich form z finezyjnym
                cieniowaniem. Zostań mistrzem w kreowaniu krótkich, stylowych
                cięć!
              </p>
              <BoxPrice price="850 zł"></BoxPrice>
            </div>
            <div className="bg-neutral-900 p-12">
              <BoxDetails desc="Kurs podstawy koloryzacji męskiej " index="4" />
              <div className="flex flex-col gap-6 text-lg lg:text-xl">
                <p>
                  Przeznaczony dla osób chcących poszerzyć swoje umiejętności w
                  dziedzinie koloryzacji włosów u mężczyzn.
                </p>
                <ol className="lg:px-32 flex flex-col gap-4 list-decimal list-inside font-light mb-2">
                  <li>
                    Prezentacja narzędzi i produktów - na początku kursu zostaną
                    omówione wszystkie niezbędne narzędzia i produkty niezbędne
                    do wykonania koloryzacji męskiej, w tym farby, utleniacze,
                    pędzle, miski do mieszania farb oraz ochraniacze na ramiona.
                  </li>

                  <li>
                    Budowa włosa i przygotowanie go do koloryzacji . Następnie
                    uczestnicy kursu dowiedzą się, jak odpowiednio przygotować
                    włosy przed koloryzacją, w tym jak prawidłowo umyć i
                    wysuszyć włosy oraz jak zabezpieczyć skórę przed farbą.
                  </li>

                  <li>
                    Wybór koloru i techniki - uczestnicy kursu będą uczyć się,
                    jak dobierać odpowiedni kolor farby do klienta oraz jakie
                    techniki koloryzacji są najlepsze do uzyskania pożądanego
                    efektu.
                  </li>

                  <li>
                    Aplikacja farby - kursanci będą krok po kroku instruowani,
                    jak aplikować farbę na włosy męskie, w tym jak równomiernie
                    rozprowadzić farbę oraz jak unikać plam i przebarwień.
                  </li>

                  <li>
                    Czas oczekiwania i płukanie - po nałożeniu farby na włosy,
                    uczestnicy kursu dowiedzą się, jak ustalić czas oczekiwania
                    i jak prawidłowo płukać farbę z włosów.
                  </li>

                  <li>
                    Kształtowanie fryzury - na koniec kursu uczestnicy będą
                    uczyć się, jak odpowiednio wykończyć koloryzację, w tym jak
                    dobrze dopasować fryzurę do nowego koloru włosów.
                  </li>

                  <li>
                    Podsumowanie - na zakończenie kursu uczestnicy będą mieli
                    możliwość podsumowania zdobytej wiedzy i zadawania pytań
                    prowadzącemu.
                  </li>
                </ol>
                <BoxPrice price="2499 zł"></BoxPrice>
              </div>
            </div>
            <div className="bg-neutral-900 p-12">
              <BoxDetails
                desc='3 dniowy Kurs doszkalający "Barber"'
                index="5"
              />
              <div className="flex flex-col gap-6 font-light text-lg lg:text-xl">
                <p>
                  Nasz kurs doszkalający z cięcia i stylizacji brody, golenia
                  tradycyjnego oraz technik fryzjerskich męskich to idealna
                  opcja dla tych, którzy chcą poszerzyć swoje umiejętności w
                  dziedzinie barberingu. Podczas tego kursu skupiamy się na
                  doskonaleniu technik cięcia i stylizacji brody, aby uczestnicy
                  mogli stworzyć idealne kształty i linie. Ponadto, uczymy
                  również tradycyjnego golenia, który jest jednym z najbardziej
                  wymagających zabiegów w barberingu.
                </p>
                <p>
                  Nasi instruktorzy podzielą się swoją wiedzą na temat różnych
                  narzędzi i technik, aby uczestnicy mogli opanować różne style
                  fryzur męskich. Ten kurs to doskonała okazja dla fryzjerów,
                  którzy chcą rozwinąć swoje umiejętności w barberingu i
                  zaoferować swoim klientom kompleksowe usługi związane z
                  pielęgnacją brody i włosów męskich. Dołącz do nas i zdobądź
                  niezbędną wiedzę i umiejętności, aby odnieść sukces w świecie
                  barberingu!
                </p>
              </div>
              <BoxPrice price="1700 zł"></BoxPrice>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link
              to={-1}
              className="flex items-center justify-center py-4 px-12 text-xl font-light leading-5 tracking-widest text-center text-white font-raleway bg-gold"
            >
              Powrót
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
