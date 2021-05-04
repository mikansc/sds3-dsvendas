import DataTable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Olá mundo</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
