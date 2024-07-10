function BoxDetails({ desc, index }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-10 md:mb-4 xl:gap-20">
      <div className="md:flex flex-col items-start">
        <div className="hidden text-white text-4xl bg-gold px-2 mb-4 md:inline-block">
          {index}
        </div>
        <p className="md:text-justify text-gold font-juzek text-xl  lg:text-2xl leading-12 tracking-wider uppercase mb-10 md:mb-0 md:text-xl lg:text-2xl">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default BoxDetails;
