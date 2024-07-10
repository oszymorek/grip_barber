const RightPersonFull = ({ imgProp, nameProp, lastNameProp, descProp }) => {
  return (
    <div className="flex items-start justify-center gap-8 max-h mb-24 px-4 2xl:gap-24">
      <div className="w-1/2 flex flex-col items-end gap-4">
        <h4 className="font-raleway font-bold tracking-wider 2xl:text-4xl">
          <p className="text-white inline-block relative bg-dark leading-4 pl-1 py-1 mr-2 2xl:text-4xl">
            {nameProp}
          </p>
          <p className="inline-block 2xl:text-4xl">{lastNameProp}</p>
        </h4>
        <div className="w-32 h-1 bg-dark"></div>
        <div className="font-raleway text-lg font-light text-justify mb-6 lg:text-2xl xl:text-xl 2xl:text-2xl 2xl:tracking-wider">
          {descProp}
        </div>
      </div>
      <img
        className="w-2/5 h-auto scale-x-[-1] v shadow-custom4 2xl:w-3/12"
        src={imgProp}
        alt="test"
      ></img>
    </div>
  );
};

export default RightPersonFull;
