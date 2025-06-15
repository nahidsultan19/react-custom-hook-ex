import { useEffect, useState } from "react";

const SaveButton = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleClick = () => {
    console.log("clicking..");
  };

  return (
    <div>
      <button disabled={!isOnline} onClick={handleClick}>
        {" "}
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
    </div>
  );
};

export default SaveButton;
