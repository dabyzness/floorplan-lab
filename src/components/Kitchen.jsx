import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <div className="kitchen">
      <h1>Kitchen</h1>
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
  );
};

export default Kitchen;
