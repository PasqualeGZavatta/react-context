// import { useState } from "react";

import ButtonOperation from "./ui/ButtonOperation";

export default function ThermostatSection({
  temperature,
  handleRemove,
  handleReset,
  handleAdd,
}) {
  function temperaturaPercepita() {
    if (temperature >= 16 && temperature <= 19) {
      return <h4>freddo</h4>;
    } else if (temperature >= 24 && temperature <= 28) {
      return <h4>caldo</h4>;
    } else {
      return <h4>confort</h4>;
    }
  }

  return (
    <>
      <div>
        <div className="container p-3 text-center">
          <h2>Temperatura </h2>
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
          />{" "}
        </div>
        <div className="text-center">{temperaturaPercepita()}</div>
      </div>
    </>
  );
}
