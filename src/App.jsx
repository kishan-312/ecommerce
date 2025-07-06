import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CrudProvider from "./store/crud/crudContext";

function App() {
  return (
    <>
      <CrudProvider>
        <Header />
        <div className="d-flex w-100">
          <Sidebar />
          <div
            className=" d-flex flex-column w-100"
            style={{
              marginTop: "70px",
              marginLeft: "280px",
              width: "100%",
              minHeight: "100vh",
              backgroundColor: "#f8f9fa",
            }}
          >
            <Outlet />
            <Footer />
          </div>
        </div>
      </CrudProvider>
    </>
  );
}

export default App;
