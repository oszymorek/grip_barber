const Description = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:px-12 lg:mt-4 lg:mb-12 xl:mb-24 xl:flex-row 2xl:gap-14 2xl:mt-12 2xl:mb-32">
      <img
        src="../../../img/aboutUs/team-1.jpg"
        alt="Pose showing our team"
        className="shadow-custom border-2 border-gold w-full md:w-7/8 xl:w-5/12 2xl:w-2/5"
      ></img>
      <div className="sm:mb-6 lg:flex-col w-full 2xl:w-3/6 2xl:px-6">
        <h4 className="text-justify	font-raleway font-medium mb-4 text-xl leading-5 tracking-wide sm:text-3xl sm:leading-7 sm:mb-5 lg:mb-4 md:text-xl lg:text-2xl 2xl:text-3xl 2xl:mb-4 2xl:tracking-wide">
          Witamy w{" "}
          <span className="text-gold font-bold">GRIP Barber Academy</span>{" "}
          salonie fryzjerskim, który oferuje profesjonalne szkolenia i otwiera
          drzwi do fascynującego świata sztuki fryzjerskiej.
        </h4>

        <p className="text-justify text-black font-raleway font-light text-base leading-5 tracking-wide gap-12 sm:text-2xl sm:leading-6 md:text-xl lg:flex lg:text-lg xl:text-xl 2xl:text-2xl 2xl:mt-12 2xl:tracking-tight">
          Wrocław Barber Academy oferuje szkolenia dla tych, którzy dopiero
          zaczynają swoją przygodę z fryzjerstwem, jak i do doświadczonych
          stylistów pragnących poszerzyć umiejętności.
          <p className="inline lg:block">
            {" "}
            Nasi instruktorzy to eksperci w dziedzinie fryzjerstwa, posiadający
            zarówno wiedzę teoretyczną, jak i praktyczne umiejętności, które
            przekładają na inspirujące szkolenia.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Description;
