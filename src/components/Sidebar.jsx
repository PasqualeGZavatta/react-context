import ButtonOperation from "./ui/ButtonOperation";
import { useTemperatureContext } from "../contexts/TermostatContext";

export default function Sidebar() {
  // { handleReset }

  const { handleReset } = useTemperatureContext();

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
