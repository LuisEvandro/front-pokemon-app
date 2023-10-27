import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const { name } = useParams();

  return (
    <div>
      <h2>Dashboard Index {name}</h2>
    </div>
  );
}
