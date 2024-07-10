import LeftPerson from "./LeftPerson";
import LeftPersonFull from "./LeftPersonFull";
import RightPerson from "./RightPerson";
import RightPersonFull from "./RightPersonFull";

const personData = [
  {
    id: 1,
    nameProp: "Adam",
    lastNameProp: "Kania",
    imgProp: "./img/team/adam.jpg",
    descProp: (
      <div>
        <p>
          Adam jest pasjonatem zawodu fryzjera oraz sportów motorowych. Po
          powrocie do Polski otworzył Grip Barber Shop, łącząc swoje dwie pasje.
          Jego doświadczenie i determinacja przenoszą się na salon, zapewniając
          wysoką jakość usług. Stworzył także Grip Barber Academy, gdzie można
          rozwijać umiejętności w branży fryzjerskiej. Adam jest również
          dwukrotnym wicemistrzem Pucharu Polski w enduro i cross country, co
          wpływa na jego precyzję i determinację w pracy. Oprócz tego, jest
          także sportowcem i pasjonatem Formuły 1, dbającym o kondycję fizyczną
          i podróżującym po świecie z narzeczoną. Jego doświadczenie i
          umiejętności sprawiają, że szkolił wielu początkujących fryzjerów, w
          tym samego Roberta Lewandowskiego.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    nameProp: "Anna",
    lastNameProp: "Odziomek",
    imgProp: "./img/team/anna.jpg",
    descProp: (
      <div>
        <p>
          Anna Odziomek to doświadczona fryzjerka z pasją, posiadająca 17-letnie
          doświadczenie w branży. Pracowała w renomowanych salonach w Polsce,
          zdobywając cenne umiejętności w koloryzacji i pielęgnacji włosów. Jej
          przekonanie o znaczeniu pięknych i zdrowych włosów oraz perfekcyjnego
          strzyżenia męskiego sprawia, że jej praca przynosi jej ogromną
          satysfakcję. Anna interesuje się również psychologią człowieka i
          ciągle poszerza swoją wiedzę w tych dziedzinach. Jest zdeterminowaną
          sportowczynią, która nie boi się wyzwań i dąży do osiągnięcia
          najlepszych wyników. Jej odwaga i determinacja sprawiają, że jest
          wzorem do naśladowania dla wielu kobiet, które szukają inspiracji i
          wsparcia. Anna jest także cenionym członkiem szkoleniowej kadry Grip
          Barber Akademii, gdzie pragnie przekazać swoją wiedzę i doświadczenie
          innym, pomagając w ich rozwoju w branży fryzjerskiej.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    nameProp: "Michał",
    lastNameProp: "Jurewicz",
    imgProp: "./img/team/michal.jpg",
    descProp: (
      <div>
        <p>
          Michał Jurewicz, członek kadry szkoleniowej Grip Barber Academy,
          specjalizuje się w dłuższych formach fryzur męskich z nowymi trendami
          cieniowania. Jest również instruktorem kursów uzupełniających oraz
          specjalistą od fryzur typu modern. Barber z wieloletnim
          doświadczeniem, Michał rozpoczął swoją przygodę w jednym z pierwszych
          barber shopów we Wrocławiu. Jego pasja do tego zawodu jest niezwykła -
          każdy klient może liczyć na indywidualne podejście i perfekcyjne
          wykonanie usługi. Poza tym, Michał jest również wielkim miłośnikiem
          muzyki, która stanowi dla niego nieodłączny element inspiracji i
          kreatywności.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    nameProp: "Szymon",
    lastNameProp: "Lewończuk",
    imgProp: "./img/team/szymon.jpg",
    descProp: (
      <div>
        <p>
          Szymon to doświadczony fryzjer z 20-letnim stażem, który pracował w
          wielu renomowanych salonach we Wrocławiu. Prowadzący praktyki
          szkoleniowe w Grip Barber Academy .Jest prawdziwym indywidualistą,
          prezentuje niekonwencjonalny styl . Jest pasjonatem muzyki i
          eksperymentalnych brzmień. Jego motto to „Biegnij przed siebie, a nie
          za siebie” - zawsze dąży do rozwoju i inspiruje innych do tego samego.
          Szymon chce pomagać ludziom, którzy pragną zmienić swoje życie poprzez
          zdobycie nowego zawodu i nowych umiejętności. Jest również
          zaangażowany w niesienie pomocy osobom uzależnionym. Oprócz swojej
          ogromnej pasji do fryzjerstwa, jest również oddanym biegaczem. To dla
          niego nie tylko forma aktywności fizycznej, ale także sposób na relaks
          i znalezienie inspiracji.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    nameProp: "Natalia",
    lastNameProp: "Dub",
    imgProp: "./img/team/natalia.jpg",
    descProp: (
      <div>
        <p>
          Natalia to utalentowana 21-letnia fryzjerka z imponującym dwuletnim
          stażem pracy prowadząca praktyki szkoleniowe w Grip Barber Academy.
          Jej pasja do strzyżeń łączy się z umiejętnością tworzenia modnych
          stylizacji, wykraczających poza przeciętność. Jest oddana swojemu
          zawodowi i zawsze śledzi nowe trendy w świecie mody fryzjerskiej.
          Natalia potrafi nie tylko stworzyć efektowne fryzury, ale także
          udzielać klientom indywidualnych porad w zakresie pielęgnacji i
          utrzymywania fryzury. Jej profesjonalne podejście i dbałość o
          szczegóły zapewniają wysoki stopień zadowolenia klientów. Dla Natalii
          fryzjerstwo to nie tylko praca, ale proces twórczy, w którym poprzez
          każdy ruch nożyczek może wyrazić swoją indywidualność i talent.
        </p>
      </div>
    ),
  },
];

function Persons() {
  const personComponents = personData.map((person, index) => {
    if (index % 2 === 0) {
      return <LeftPerson key={person.id} {...person} />;
    } else {
      return <RightPerson key={person.id} {...person} />;
    }
  });

  const personFullComponents = personData.map((person, index) => {
    const imgProp = `${person.imgProp.slice(0, -4)}-full.jpg`;

    if (index % 2 === 0) {
      return <LeftPersonFull key={person.id} {...person} imgProp={imgProp} />;
    } else {
      return <RightPersonFull key={person.id} {...person} imgProp={imgProp} />;
    }
  });
  return (
    <div>
      <div className="flex flex-col items-center sm:gap-12 md:hidden">
        {personComponents}
      </div>

      <div className="hidden md:block mt-24">{personFullComponents}</div>
    </div>
  );
}

export default Persons;
