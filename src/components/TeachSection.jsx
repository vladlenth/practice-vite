import { ways } from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachSection() {
  return (
    <section>
      <h2>Hello React!!</h2>
      <h3>Наш... h3 заголовок</h3>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.description} {...way} />
        ))}
      </ul>
    </section>
  );
}
