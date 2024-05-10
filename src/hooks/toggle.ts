import { useState } from "react";

type ToggleFuncType = () => void;
type UseToggleType = (initiallyOn: boolean) => [boolean, ToggleFuncType];

const useToggle:UseToggleType = (initiallyOn:boolean = false) => {
  const [isOn, setIsOn] = useState(initiallyOn);
  const toggle: ToggleFuncType = () => setIsOn(state => !state);

  return [ isOn, toggle ];
}

export default useToggle;
