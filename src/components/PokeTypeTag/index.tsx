import "./index.scss";

interface Props {
  type: string;
}

export default function PokeTypeTag(props: Props) {
  const backgroundText: string = `var(--color-pokemon-type-${props.type})`;

  return (
    <div className="content-tag" style={{ backgroundColor: backgroundText }}>
      <span>{props.type}</span>
    </div>
  );
}
