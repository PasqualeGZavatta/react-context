import { useContext } from "react";
import TemperatureContext from "../contexts/TermostatContext";

export default function Footer() {
// { temperature }
  const { temperature } = useContext(TemperatureContext);
  return (
    <footer className="text-center bg-secondary p-2 text-text-dark">
      <h4>Temperature:{temperature} </h4>
    </footer>
  );
}
