import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import "../css/TableRow.css";
import { useContext } from "react";
import { CrudContext } from "../store/crud/crudContext";
import Figure from "./Figure";

function TableRow() {
  const {
    deleteHandler,
    updateHandler,
    eyeHandler,
    lists,
    searchTerm,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    filteredLists,
    sortedLists,
  } = useContext(CrudContext);
  console.log(lists);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLists = sortedLists.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {paginatedLists.length > 0 ? (
        paginatedLists.map((list) => (
          <tr key={list.id}>
            <td>
              <Figure
                classname="m-auto"
                style={{ width: "50px", height: "50px" }}
                imgSrc={list.file}
                imgAlt={"profile"}
                imgStyle={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </td>
            <td>{list.fname}</td>
            <td>{list.email}</td>
            <td>{list.mobile}</td>
            <td>{list.gender}</td>
            <td>
              <div className=" d-flex gap-2 align-items-center justify-content-center">
                <span>
                  <FaEye
                    className="fs-5"
                    style={{ cursor: "pointer" }}
                    onClick={() => eyeHandler(list.id)}
                  />
                </span>
                <span>
                  <FaEdit
                    className="fs-5"
                    onClick={() => updateHandler(list.id)}
                    style={{ cursor: "pointer" }}
                  />
                </span>
                <span>
                  <MdDelete
                    onClick={() => deleteHandler(list.id)}
                    className="fs-5"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <td colSpan="6" className="text-center mt-5">
          No matching users found.
        </td>
      )}
    </>
  );
}

export default TableRow;
