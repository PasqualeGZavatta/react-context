import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { TemperatureProvider } from "./contexts/TermostatContext";

function App() {
  return (
    <>
      <TemperatureProvider>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <MainContent />

          <Footer />
        </div>
      </TemperatureProvider>
    </>
  );
}

export default App;
