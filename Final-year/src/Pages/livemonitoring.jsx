import CameraCard from "../components/cameracard";

const LiveMonitoring = () => {
  return (
    <div>
      <h2>Live Monitoring</h2>
      <div className="grid">
        <CameraCard title="Hall Camera 1" />
        <CameraCard title="Hall Camera 2" />
        <CameraCard title="Hall Camera 3" />
      </div>
    </div>
  );
};

export default LiveMonitoring;
