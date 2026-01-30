const CameraCard = ({ title }) => {
  return (
    <div className="camera-card">
      <h4>{title}</h4>
      <div className="camera-feed">
        <span>Live Camera Feed</span>
      </div>
    </div>
  );
};

export default CameraCard;
