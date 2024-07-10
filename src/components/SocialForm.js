const SocialForm = ({ urlProp, imgProp, altProp }) => {
  const hrefProp = `//${urlProp}`;

  return (
    <a
      href={hrefProp}
      className="flex items-start text-sm gap-8 mb-4 font-light"
    >
      <img src={imgProp} alt={altProp}></img>
      <div className="tracking-wider text-white font-raleway sm:text-xl lg:text-base xl:text-sm 2xl:text-base">
        {urlProp}
      </div>
    </a>
  );
};

export default SocialForm;
