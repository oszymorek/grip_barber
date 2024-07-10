import SectionHeading from "./Utility/SectionHeading";
import Person from "./Team/Person";
import Slider from "./Utility/Slider";

function Team() {
  return (
    <div className="bg-neutral-100 flex flex-col w-full py-8 px-4" id="team">
      <SectionHeading title="NASZ ZESPÓŁ"></SectionHeading>
      {/* <Persons></Persons> */}
      <div>
        <Slider></Slider>
      </div>
    </div>
  );
}

export default Team;
