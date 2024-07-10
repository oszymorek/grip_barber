const RightPerson = ({ nameProp, lastNameProp, descProp, imgProp }) => {
  return (
    <div>
      <div className="w-full flex justify-between items-end sm:items-end">
        <img
          className="box-border border-b-4 border-dark w-16 sm:h-16"
          src={imgProp}
          alt="acct"
        ></img>
        <div className="font-juzek text-lg tracking-wide">
          <h4>
            <span className="text-white relative text-2xl inline-block bg-dark leading-4 pl-1 pt-1 mr-1 sm:pt-2 pb-1/2 mr-2">
              {nameProp}
            </span>
            <span className="text-2xl">{lastNameProp}</span>
          </h4>
        </div>
      </div>
      <div className="w-20 h-1 bg-dark mt-1 mb-2 ml-auto"></div>
      <div className="font-raleway text-lg font-light text-justify mb-6 sm:text-2xl sm:mb-20">
        {descProp}
      </div>
    </div>
  );
};

export default RightPerson;
