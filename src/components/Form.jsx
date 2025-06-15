import useFormInput from "../hooks/useFormInput";

const Form = () => {
  const firstNameProps = useFormInput("Marry");
  const lastNameProps = useFormInput("Poppins");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
};

export default Form;
