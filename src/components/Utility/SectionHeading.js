const SectionHeading = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-8">
      <h3 className="text-gold font-raleway font-semibold text-xl tracking-wider uppercase sm:text-3xl sm:mb-2">
        {title}
      </h3>
      <div className="w-20 h-0.5 bg-gold"></div>
    </div>
  );
};

export default SectionHeading;
