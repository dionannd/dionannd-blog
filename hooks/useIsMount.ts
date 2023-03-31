import { useEffect, useRef } from "react";

const useIsMount = () => {
  const isMountRef = useRef<boolean>(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);

  return isMountRef.current;
};

export default useIsMount;
