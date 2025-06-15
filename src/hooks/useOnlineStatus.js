import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setOnline] = useState(true);

  const handleOnline = () => {
    setOnline(true);
  };

  const handleOffline = () => {
    setOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
