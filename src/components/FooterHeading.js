const FooterHeading = ({ title }) => {
  return (
    <div className="flex justify-center mb-6">
      <span className="px-6 text-xl font-light text-white uppercase border-b font-raleway border-gold sm:text-3xl lg:text-xl">
        {title}
      </span>
    </div>
  );
};

export default FooterHeading;
