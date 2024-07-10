import Description from "./AboutUs/Description";
import SectionHeading from "./Utility/SectionHeading";

const AboutUs = () => {
  return (
    <div
      className="flex flex-col items-center w-full bg-white py-8 px-4 2xl:px-4 bg-fixed"
      id="about"
    >
      <SectionHeading title="O nas"></SectionHeading>
      <Description></Description>
    </div>
  );
};

export default AboutUs;
