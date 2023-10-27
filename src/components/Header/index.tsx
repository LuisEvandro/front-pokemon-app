import { PokeballIcon } from "../../icons/Icons";
import "./index.scss";

export default function Header() {
  return (
    <div id="header">
      <div className="container content">
        <div className="title">
          <div className="icon">
            <PokeballIcon color="var(--color-grayscale-white)" />
          </div>

          <p>Pokédex</p>
        </div>

        <div>
          <h1>Seach Bar</h1>
        </div>
      </div>
    </div>
  );
}
