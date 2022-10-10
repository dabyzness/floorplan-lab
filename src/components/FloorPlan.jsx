import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = ({ numBeds, numBaths }) => {
  const bedArr = [],
    bathArr = [];

  for (let i = 1; i <= numBeds; i += 1) {
    bedArr.push(<Bedroom key={`bed-${i}`} bedNum={i} />);
  }

  for (let i = 1; i <= numBaths; i += 1) {
    bathArr.push(<Bath key={`bath-${i}`} size={i} />);
  }

  return (
    <div className="floor-plan">
      <LivingRoom />
      <Kitchen />
      {bedArr}
      {bathArr}
    </div>
  );
};

export default FloorPlan;
