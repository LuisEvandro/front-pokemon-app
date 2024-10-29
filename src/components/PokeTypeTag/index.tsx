import "./index.scss";
import { PokeTypeTagProps } from "./types";

export default function PokeTypeTag({ type }: PokeTypeTagProps) {
  const backgroundText: string = `var(--color-pokemon-type-${type})`;

  return (
    <div className="content-tag" style={{ backgroundColor: backgroundText }}>
      <span>{type}</span>
    </div>
  );
}
