const Bath = ({ size }) => {
  return (
    <div className={`bath-${size}`}>
      <h1>{size[0].toUpperCase() + size.slice(1)} Bath</h1>
    </div>
  );
};

export default Bath;
