const Bath = ({ size }) => {
  return (
    <div className="bath">
      <h1>{size % 2 === 1 ? "Full Bath" : "Half Bath"}</h1>
    </div>
  );
};

export default Bath;
