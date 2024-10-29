export type ButtonProps = {
  variant?: "primary" | "outline";
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;