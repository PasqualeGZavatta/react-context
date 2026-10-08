import { useContext } from "react";
import ButtonOperation from "./ui/ButtonOperation";
import TemperatureContext from "../contexts/TermostatContext";

export default function Sidebar() {
  // { handleReset }

  const { handleReset } = useContext(TemperatureContext);

  {
    return (
      <div className=" pt-3 bg-">
        <h3>Sidebar</h3>

        <ButtonOperation
          label={"Reset"}
          onClick={handleReset}
          color="btn-warning"
        />
      </div>
    );
  }
}
