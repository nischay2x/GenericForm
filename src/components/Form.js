import useInput from "../Hooks/use-input";
import Input from "./Input";


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
  const [nameInputStates, nameProps] = useInput({ validateAs: 'name' });
  const [emailInputStates, emailProps] = useInput({ validateAs: 'email' });
  const [phInputStates, phProps] = useInput();

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
