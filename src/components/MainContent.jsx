import Sidebar from "./Sidebar";
import ThermostatSection from "./ThermostatSection";

export default function MainContent() {
  return (
    <main className="flex-grow-1">
      <Sidebar />
      <ThermostatSection />
    </main>
  );
}
