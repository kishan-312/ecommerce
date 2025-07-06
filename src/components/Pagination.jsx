import { useContext } from "react";
import { CrudContext } from "../store/crud/crudContext";
import Button from "./Button";

function Pagination() {
  const { currentPage, setCurrentPage, itemsPerPage, filteredLists } =
    useContext(CrudContext);

  const totalPages = Math.ceil(filteredLists.length / itemsPerPage);

  return (
    <>
      <div className=" d-flex justify-content-center gap-3 my-3">
        <Button
          classname={" btn btn-outline-primary"}
          disabled={currentPage === 1}
          onclick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          btnText={"Previous"}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            classname={`btn ${
              currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
            } `}
            btnText={i + 1}
            onclick={() => setCurrentPage(i + 1)}
          />
        ))}
        <Button
          classname={"btn btn-outline-primary"}
          disabled={currentPage === totalPages}
          onclick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          btnText={"Next"}
        />
      </div>
    </>
  );
}

export default Pagination;
