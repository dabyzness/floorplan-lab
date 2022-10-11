const Bedroom = ({ bedNum }) => {
  return (
    <div className={`bedroom${bedNum}`}>
      <h1>Bedroom {bedNum}</h1>
    </div>
  );
};

export default Bedroom;
