import { ChangeEvent } from "react";
type Props = {
  type: string,
  name:string,
  id?:string,
  label:string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?:string
  }


const TextInput:React.FC<Props> = ( {type, name, id, label, value, onChange}) => {
  return (
    <label htmlFor={id} className="form-title">
        {label}
        <input type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="form-input" />
      </label>
  )
}

export default TextInput

