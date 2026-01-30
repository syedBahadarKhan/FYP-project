const AlertCard = ({ message, time }) => {
  return (
    <div className="alert-card">
      <strong>{message}</strong>
      <small>{time}</small>
    </div>
  );
};

export default AlertCard;
