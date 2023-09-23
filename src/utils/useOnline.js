import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setisOnline] = useState(true);
  const onlineHandeler = () => {
    setisOnline(true);
  };
  const offlineeHandeler = () => {
    setisOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", onlineHandeler);
    window.addEventListener("offline", offlineeHandeler);

    return () => {
      window.removeEventListener("online", onlineHandeler);
      window.removeEventListener("offline", offlineeHandeler);
    };
  }, []);

  return isOnline;
};

export default useOnline;
