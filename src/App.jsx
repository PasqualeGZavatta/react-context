import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
