import { useState } from "react";

const useInput = (validationScheme) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const isValid = validationScheme(value) && touched;
  const isInvalid = !validationScheme(value) && touched;

  const onChange = (e) => {
    setTouched(true);
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return [
    { isValid, reset },
    { value, isInvalid, onChange, onBlur }
  ];
};

export default useInput;
