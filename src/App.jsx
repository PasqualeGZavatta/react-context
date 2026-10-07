import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { useState } from "react";

function App() {
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
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <MainContent
          temperature={temperature}
          handleRemove={handleRemove}
          handleReset={handleReset}
          handleAdd={handleAdd}
        />
        <Footer temperature={temperature} />
      </div>
    </>
  );
}

export default App;
