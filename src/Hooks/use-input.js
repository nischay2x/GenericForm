import { useState } from "react";


function validate(validateAs, value) {
  switch(validateAs) {
    case 'name': return value.trim() !== "";
    case 'phone': return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value);
    case 'email': return /.{3,}@.{3,}\.com/.test(value);
    default: return new RegExp(validateAs).test(value);
  }
}

const useInput = ({ validateAs }) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const isValid = !Boolean(validateAs) || (validate(validateAs, value) && touched);
  const isInvalid = Boolean(validateAs) && (!isValid && touched);

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
