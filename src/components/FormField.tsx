import type { FormFieldProps } from "../types/types";

const FormField: React.FC<FormFieldProps> = ({ type, placeholder, name, register, error }) => (
  <div className="field_wrapper">
    <div className="input_wrapper">
      <input type={type} placeholder={placeholder} className="input" {...register(name, { required: true })} />
      {name === "password" && <div className="show_btn">show</div>}
    </div>

    {error && <p className="error_message">{error.message}</p>}
  </div>
);
export default FormField;
