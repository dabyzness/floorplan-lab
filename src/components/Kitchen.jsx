import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <div className="kitchen">
      <h1>Kitchen</h1>
      <div className="appliances">
        <Oven />
        <Oven />
        <Oven />
        <Oven />
        <Sink />
        <Oven />
        <Oven />
        <Oven />
        <Oven />
      </div>
    </div>
  );
};

export default Kitchen;
