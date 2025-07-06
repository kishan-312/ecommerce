import { useContext } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Table from "../components/Table";
import { CrudContext } from "../store/crud/crudContext";
import Popup from "../components/popups/Popup";
import Popup2 from "../components/popups/popup2";
import Pagination from "../components/Pagination";

function Crud() {
  const {
    activeHandler,
    isActive,
    isUpdate,
    isEye,
    searchTerm,
    setSearchTerm,
  } = useContext(CrudContext);

  return (
    <>
      <div className="container-fluid w-100 mt-4 mx-0 px-0">
        <div className="w-100 bg-black p-2">
          <h1 className="text-white text-center fw-bold ">KING OF CRUD</h1>
        </div>
        <div className=" container px-5 my-5">
          <div className="d-flex gap-2 align-items-start mb-3">
            <div class="input-group mb-3 ">
              <Input
                type={"text"}
                placeholder={"Search"}
                classname={"form-control"}
                onchange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
              <Button
                btnText={"Search"}
                type="button"
                classname={"btn btn-secondary"}
              />
            </div>
            <Button
              btnText={"Add Data"}
              type="button"
              classname={"btn btn-primary"}
              style={{ height: "fit-content", whiteSpace: "nowrap" }}
              onclick={activeHandler}
            />
          </div>
          <div className=" table-responsive">
            <Table />
            <Pagination />
          </div>
        </div>
      </div>

      <Popup
        popupText={isActive ? "Add User" : isUpdate ? "Update User" : ""}
      />
      <Popup2 popupText={isEye ? "User Profile" : ""} />
    </>
  );
}

export default Crud;
