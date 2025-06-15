import useOnlineStatus from "../hooks/useOnlineStatus";

const StatusBar = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>{isOnline ? "✅ Online" : "❌ Disconnected"}</h2>
    </div>
  );
};

export default StatusBar;
