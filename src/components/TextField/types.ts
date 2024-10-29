export type TextFieldProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
} & React.InputHTMLAttributes<HTMLInputElement>