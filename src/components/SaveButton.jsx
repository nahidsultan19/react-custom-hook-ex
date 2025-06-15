import useOnlineStatus from "../hooks/useOnlineStatus";

const SaveButton = () => {
  const isOnline = useOnlineStatus();

  const handleClick = () => {
    console.log("clicking...");
  };

  return (
    <div>
      <button
        disabled={!isOnline}
        onClick={handleClick}
        style={{ backgroundColor: "red", color: "white", fontWeight: "bold" }}
      >
        {" "}
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
    </div>
  );
};

export default SaveButton;
