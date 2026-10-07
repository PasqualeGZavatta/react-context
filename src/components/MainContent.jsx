import Sidebar from "./Sidebar";
import ThermostatSection from "./ThermostatSection";

export default function MainContent({
  temperature,
  handleRemove,
  handleReset,
  handleAdd,
}) {
  return (
    <main className="flex-grow-1">
      <Sidebar />
      <ThermostatSection
        temperature={temperature}
        handleRemove={handleRemove}
        handleReset={handleReset}
        handleAdd={handleAdd}
      />
    </main>
  );
}
