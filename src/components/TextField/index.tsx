import { SearchIcon } from "../../icons/Icons";
import "./index.scss";
import { TextFieldProps } from "./types";

export default function TextField({
  className,
  value,
  onChange,
  icon,
  iconPosition,
  ...props
}: TextFieldProps) {
  return (
    <div className={`text-field ${className}`}>
      {(icon && iconPosition === 'left') && (
        icon
      )}
      <input 
        type={props.type || "text"}
        className="text-field-input"
        value={value}
        onChange={onChange}
        style={icon && iconPosition === 'left' ? { marginLeft: '5px' } : { marginRight: '5px' }}
        {...props}
      />
      {(icon && iconPosition === 'right') && (
        icon
      )}
    </div>
  );
}
