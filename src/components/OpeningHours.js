const OpeningHours = ({ dayProp, hoursProp }) => {
  return (
    <div className="flex justify-between mb-4 text-base tracking-widest text-white font-raleway sm:text-xl lg:text-base xl:text-sm 2xl:text-lg">
      {dayProp} <span className="text-gold">{hoursProp}</span>
    </div>
  );
};

export default OpeningHours;
