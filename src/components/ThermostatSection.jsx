// import { useState } from "react";
import ButtonOperation from "./ui/ButtonOperation";

export default function ThermostatSection({
  temperature,
  handleRemove,
  handleReset,
  handleAdd,
}) {
  //   const [temperature, setTemperature] = useState(20);

  //   function handleRemove() {
  //     if (temperature === 16) {
  //       return;
  //     }
  //     setTemperature(temperature - 1);
  //   }

  //   function handleReset() {
  //     setTemperature(20);
  //   }

  //   function handleAdd() {
  //     if (temperature === 28) {
  //       return;
  //     }
  //     setTemperature(temperature + 1);
  //   }

  return (
    <>
      <div className="container p-3 text-center">
        <h2>Termostat</h2>
        <h3 className="display-1">
          {temperature}
          <span className="display-5 align-top  ">°C</span>
        </h3>

        <ButtonOperation
          label={"-"}
          onClick={handleRemove}
          disabled={temperature <= 16}
          color="btn-danger"
        />
        <ButtonOperation
          label={"Reset"}
          onClick={handleReset}
          color="btn-warning"
        />
        <ButtonOperation
          label={"+"}
          onClick={handleAdd}
          disabled={temperature >= 28}
          color="btn-success"
        />
      </div>
    </>
  );
}
