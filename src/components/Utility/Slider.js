import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import PopupTeam from "./PopupTeam";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "reactjs-popup/dist/index.css";

import slide_image_1 from "./team/adam-full.jpg";
import slide_image_3 from "./team/michal-full.jpg";
import slide_image_4 from "./team/szymon-full.jpg";
import slide_image_5 from "./team/natalia-full.jpg";

function Slider() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 225,
          modifier: 1.25,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <div className="testowe absolute bg-white shadow dark:bg-gray-700">
            <h4>Adam Kania</h4>
            <PopupTeam
              moreAbout="Adamie"
              title="Adam Kania"
              content="Adam stoi za sukcesem czterech salonów i jest prawdziwym
              pasjonatem swojego zawodu. Jego pasja do zawodu została
              zaszczepiona, gdy mieszkał w Irlandii i już jako 22-latek
              pracował jako menadżer, ucząc się zarządzania i obsługi
              klienta. Po powrocie do Polski w 2012 otworzył pierwsze Barber
              Shopy we Wrocławiu. Po zdobyciu lojalnej grupy klientów,
              postanowił połączyć swoje dwie pasje - barbering i sporty
              motorowe - i stworzyć GRIP Barber Shop Nazwa salonu, Grip
              Barber Shop, nawiązuje do sportów motorowych, co nie jest
              przypadkiem. Adam jest dwukrotnym wicemistrzem Pucharu Polski
              w enduro i cross country🥈🥉.Jego determinacja i precyzja,
              które są niezbędne na torze, przenoszą się również do salonu,
              zapewniając wysoką jakość usług. Dzięki swojemu doświadczeniu
              i pasji w branży barberingowej, Adam stworzył Grip Barber
              Academy - miejsce, w którym pasja, profesjonalizm i wysoka
              jakość usług łączą się w doskonały sposób. Jeśli szukasz
              miejsca, gdzie będziesz mógł rozwijać swoje umiejętności
              barberingowe i zdobywać cenne doświadczenie, Grip Barber
              Academy jest idealnym miejscem dla Ciebie . Adam Kania przez
              lata tworzył nurt barberingu w Polsce i współpracował z
              wieloma salonami w kraju. Jego doświadczenie i umiejętności w
              zawodzie sprawiły, że szkolił wielu początkujących barberów,
              przekazując im swoją wiedzę i techniki. Miał przyjemność
              obsługiwać samego Roberta Lewandowskiego ⚽️. Adam to nie
              tylko barber, ale także sportowiec i pasjonat Formuły 1🏎️.
              Poza pracą w salonie, często spędza czas na siłowni, dbając o
              swoją kondycję fizyczną. Ponadto, podróżuje ze swoją
              narzeczoną, eksplorując nowe miejsca i czerpiąc inspirację z
              różnych kultur. Grip Barber Academy jest miejscem, w którym
              można zdobyć wysokiej jakości szkolenie i rozwijać się jako
              barber a przede wszystkim otrzymać odpowiednie wskazówki jak
              prowadzić tego typu biznes."
            ></PopupTeam>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <div className="testowe absolute bg-white shadow dark:bg-gray-700">
            <h4>Michał Jurewicz</h4>
            <PopupTeam
              moreAbout="Michale"
              title="Michał Jurewicz"
              content="Michał Jurewicz, członek kadry szkoleniowej Grip Barber Academy, specjalizuje się w dłuższych formach fryzur męskich z nowymi trendami cieniowania. Jest również instruktorem kursów uzupełniających oraz specjalistą od fryzur typu modern. Barber z wieloletnim doświadczeniem, Michał rozpoczął swoją przygodę w jednym z pierwszych barber shopów we Wrocławiu. Jego pasja do tego zawodu jest niezwykła - każdy klient może liczyć na indywidualne podejście i perfekcyjne wykonanie usługi. Poza tym, Michał jest również wielkim miłośnikiem muzyki, która stanowi dla niego nieodłączny element inspiracji i kreatywności."
            ></PopupTeam>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <div className="testowe absolute bg-white shadow dark:bg-gray-700">
            <h4>Szymon Lezuk</h4>
            <PopupTeam
              moreAbout="Szymonie"
              title="Szymon Lezuk"
              content="Szymon to doświadczony fryzjer z 20-letnim stażem, który pracował w wielu renomowanych salonach we Wrocławiu.  Prowadzący praktyki szkoleniowe w Grip Barber Academy .Jest prawdziwym indywidualistą, prezentuje niekonwencjonalny styl .  Jest pasjonatem muzyki i eksperymentalnych brzmień. Jego motto to „Biegnij przed siebie, a nie za siebie” - zawsze dąży do rozwoju i inspiruje innych do tego samego. Szymon chce pomagać ludziom, którzy pragną zmienić swoje życie poprzez zdobycie nowego zawodu i nowych umiejętności. Jest również zaangażowany w niesienie pomocy osobom uzależnionym. Oprócz swojej ogromnej pasji do fryzjerstwa, jest również oddanym biegaczem. To dla niego nie tylko forma aktywności fizycznej, ale także sposób na relaks i znalezienie inspiracji."
            ></PopupTeam>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <div className="testowe absolute bg-white shadow dark:bg-gray-700">
            <h4>Natalia Dub</h4>
            <PopupTeam
              moreAbout="Natalii"
              title="Natalia Dub"
              content="Prowadząca praktyki szkoleniowe w Grip Barber Academy.
              Jej pasja do strzyżeń łączy się z umiejętnością tworzenia modnych stylizacji, wykraczających poza przeciętność. Jest oddana swojemu zawodowi i zawsze śledzi nowe trendy w świecie mody fryzjerskiej.✂️ Natalia potrafi nie tylko stworzyć efektowne fryzury, ale także udzielać klientom indywidualnych porad w zakresie pielęgnacji i utrzymywania fryzury. Jej profesjonalne podejście i dbałość o szczegóły zapewniają wysoki stopień zadowolenia klientów. Dla Natalii fryzjerstwo to nie tylko praca, ale proces twórczy, w którym poprzez każdy ruch nożyczek może wyrazić swoją indywidualność i talent."
            ></PopupTeam>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <style>{`
        
        :root {
          --primary: #D7B56D;
          --white: #ffffff;
          --bg: #0D0F10;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-size: 1.6rem;
          background: var(--bg);
        }
        
        .container {
          max-width: 130.5rem;
          margin: 0 auto;
        }
        
        .testowe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 3rem;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
          color: var(--white);
          font-size: 2.4rem;
          font-weight: 700;
          
          text-transform: uppercase;
          z-index: 10;
        }

        .more-about {
          font-size: 1.3rem;
          font-weight: 300;
          text-decoration: underline;
        }
        .heading {
          padding: 1rem 0;
          font-size: 3.5rem;
          text-align: center;
        }
        
        .flex-container {

          display: flex;
          flex-direction: row;
         }

        .swiper_container {
          height: 52rem;
          padding: 2rem 0;
          position: relative;
        }
        

        .swiper-slide {
          width: 37rem;
          height: 42rem;
          position: relative;
        }
        
        @media (max-width: 500px) {
          .swiper_container {
            height: 47rem;
          }
          .swiper-slide {
            width: 28rem !important;
            height: 36rem !important;
          }
          .swiper-slide img {
            width: 28rem !important;
            height: 36rem !important;
          }
        }
        
        .swiper-slide img {
          width: 37rem;
          height: 42rem;
          object-fit: cover;
        }
      
        
        .slider-controler {
          position: relative;
          bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .slider-controler .swiper-button-next {
          left: 58% !important;
          transform: translateX(-58%) !important;
        }
        
        @media (max-width: 990px) {
          .slider-controler .swiper-button-next {
            left: 70% !important;
            transform: translateX(-70%) !important;
          }
        }
        
        @media (max-width: 450px) {
          .slider-controler .swiper-button-next {
            left: 80% !important;
            transform: translateX(-80%) !important;
          }
        }
        
        @media (max-width: 990px) {
          .slider-controler .swiper-button-prev {
            left: 30% !important;
            transform: translateX(-30%) !important;
          }
        }
        
        @media (max-width: 450px) {
          .slider-controler .swiper-button-prev {
            left: 20% !important;
            transform: translateX(-20%) !important;
          }
        }
        
        .slider-controler .slider-arrow {
          background: var(--white);
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          left: 42%;
          transform: translateX(-42%);
        }
        
        .slider-controler .slider-arrow ion-icon {
          font-size: 2rem;
          color: #222224;
        }
        
        .slider-controler .slider-arrow::after {
          content: '';
        }
        
        .swiper-pagination {
          position: relative;
          width: 15rem !important;
          bottom: 1rem;
        }
        
        .swiper-pagination .swiper-pagination-bullet {
          filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
        }
        
        .swiper-pagination .swiper-pagination-bullet-active {
          background: #D7B56D;
        }
      `}</style>
    </div>
  );
}

export default Slider;
