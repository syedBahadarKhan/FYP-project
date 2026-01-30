import React from "react";

const cameras = [
  { id: "CAM_01", hall: "Hall A" },
  { id: "CAM_02", hall: "Hall B" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">VigilantAI – Exam Control Center</h1>
        <span className="text-sm opacity-70">
          Wednesday, Jan 28, 2026 • 14:32 PKT
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card title="Total Students" value="1240 / 1250" />
        <Card title="Exam Status" value="In Progress" green />
        <Card title="AI Alerts" value="17" red />
      </div>

      {/* Camera Section */}
      <h2 className="text-lg mb-3">Live Camera Feeds</h2>

      <div className="grid grid-cols-2 gap-6">
        {cameras.map((cam) => (
          <div key={cam.id} className="bg-[#121a2f] rounded-xl p-3">
            <p className="text-sm mb-2 opacity-80">
              {cam.id} — {cam.hall}
            </p>

            {/* LIVE CAMERA */}
            <video
              src="/sample.mp4"
              autoPlay
              muted
              loop
              className="rounded-lg w-full border border-gray-700"
            />

            {/* AI Detection Box */}
            <div className="mt-2 text-xs text-red-400">
              ⚠ Multiple Persons Detected
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ title, value, green, red }) {
  return (
    <div className="bg-[#121a2f] p-4 rounded-xl">
      <p className="text-sm opacity-70">{title}</p>
      <p
        className={`text-2xl font-bold ${
          green ? "text-green-400" : red ? "text-red-400" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
