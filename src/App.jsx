import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./routes/homepage";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
