import TableRow from "./TableRow";
import "../css/Table.css";
import { TbArrowNarrowDown, TbArrowNarrowUp } from "react-icons/tb";
import { useContext } from "react";
import { CrudContext } from "../store/crud/crudContext";

function Table() {
  const { sortKey, setSortKey, sortOrder, setSortOrder } =
    useContext(CrudContext);

  return (
    <>
      <table className="table">
        <thead className="">
          <tr>
            <th>Profile</th>
            <th>
              <div className=" d-flex gap-2 justify-content-center">
                <span>Name </span>
                <div className="d-flex gap-0 align-items-center">
                  <TbArrowNarrowUp
                    className={`arrowSort ${
                      sortKey === "fname" && sortOrder === "asc"
                        ? "text-primary"
                        : ""
                    } `}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSortKey("fname");
                      setSortOrder("asc");
                    }}
                  />
                  <TbArrowNarrowDown
                    className={` arrowSort ${
                      sortKey === "fname" && sortOrder === "desc"
                        ? "text-primary"
                        : ""
                    } `}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSortKey("fname");
                      setSortOrder("desc");
                    }}
                  />
                </div>
              </div>{" "}
            </th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody style={{ marginTop: "40px" }}>
          <TableRow />
        </tbody>
      </table>
    </>
  );
}

export default Table;
