import { useState } from "react";
import { createContext } from "react";

const TemperatureContext = createContext();

export function TemperatureProvider({ children }) {
  const [temperature, setTemperature] = useState(20);

  function handleRemove() {
    if (temperature === 16) {
      return;
    }
    setTemperature(temperature - 1);
  }
  function handleReset() {
    setTemperature(20);
  }
  function handleAdd() {
    if (temperature === 28) {
      return;
    }
    setTemperature(temperature + 1);
  }

  return (
    <TemperatureContext.Provider
      value={{ temperature, handleRemove, handleReset, handleAdd }}>
      {children}
    </TemperatureContext.Provider>
  );
}

export default TemperatureContext;
