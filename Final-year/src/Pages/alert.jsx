import AlertCard from "../components/alertcard";

const Alerts = () => {
  return (
    <div>
      <h2>AI Alerts</h2>
      <AlertCard message="Suspicious head movement detected" time="10:32 AM" />
      <AlertCard message="Multiple faces detected" time="10:40 AM" />
    </div>
  );
};

export default Alerts;
