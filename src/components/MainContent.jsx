import Sidebar from "./Sidebar";
import ThermostatSection from "./ThermostatSection";

export default function MainContent() {
  //   {
  //   temperature,
  //   handleRemove,
  //   handleReset,
  //   handleAdd,
  // }
  return (
    <main className="flex-grow-1">
      <div className="container d-flex justify-content-between ">
        <Sidebar
        // handleReset={handleReset}
        />

        <ThermostatSection
        // temperature={temperature}
        // handleRemove={handleRemove}
        // handleReset={handleReset}
        // handleAdd={handleAdd}
        />
        <Sidebar
          // handleReset={handleReset}
          className="d-none"
        />
      </div>
    </main>
  );
}
