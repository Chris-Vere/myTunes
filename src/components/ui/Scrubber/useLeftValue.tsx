import { Dispatch, SetStateAction, useEffect } from "react";

const useLeftValue = (setLeftValue: Dispatch<SetStateAction<number>>, percentage: number) => {
  useEffect(() => {
    setLeftValue(percentage * 100);
  }, [percentage, setLeftValue]);
}

export default useLeftValue;
