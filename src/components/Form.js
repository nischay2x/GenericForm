import useInput from "../Hooks/use-input";
import Input from "./Input";

const nameValidation = (val) => {
  return val.trim() !== "";
};
const phValidation = (val) => {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(+val);
};
const emailValidation = (val) => {
  return /.{3,}@.{3,}\.com/.test(val);
};

const getForm = (...inputStates) => {
  const formIsValid = inputStates.reduce(
    (prev, curr) => prev && curr.isValid,
    true
  );
  const formReset = () => {
    for (let inputState of inputStates) {
      inputState.reset();
    }
  };
  return { formIsValid, formReset };
};

const SimpleInput = (props) => {
  const [nameInputStates, nameProps] = useInput(nameValidation);
  const [emailInputStates, emailProps] = useInput(emailValidation);
  const [phInputStates, phProps] = useInput(phValidation);

  const { formIsValid, formReset } = getForm(nameInputStates, emailInputStates,phInputStates);

  const handleSubmit = (e) => {
    e.preventDefault();
    formReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        type="text"
        labelText="Name"
        errMsg="Name cannot be empty!"
        {...nameProps}
      />
      <Input
        id="ph"
        type="tel"
        labelText="Phone"
        errMsg="Phone number format is wrong!"
        {...phProps}
      />
      <Input
        id="email"
        type="text"
        labelText="Email"
        errMsg="Email format is wrong!"
        {...emailProps}
      />
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
