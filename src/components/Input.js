const Input = ({ id, type, labelText, errMsg, isInvalid, ...props }) => {
    return (
      <div className="form-control">
        <label htmlFor={id}>{labelText}</label>
        <input type={type} id={id} {...props} />
        {isInvalid && <p className="error-text">{errMsg}</p>}
      </div>
    );
  };
  
  export default Input;
  //Formik --form docs