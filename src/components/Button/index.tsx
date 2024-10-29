import { ButtonProps } from "./types";
import "./index.scss";
import { Loading } from "../Loading";

export function Button({
  variant = "primary",
  isLoading = false,
  ...others
}: ButtonProps) {
  return (
    <button
      className={`button button_${variant} ${others.className}`}
      {...others}
    >
      <>
        {isLoading ? (
          <Loading />
        ) : (
          others.children
        )}
      </>
    </button>
  );
}