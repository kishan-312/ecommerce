import { IoMdClose } from "react-icons/io";
import Figure from "../Figure";
import { useContext } from "react";
import { CrudContext } from "../../store/crud/crudContext";
import { FaPhoneAlt } from "react-icons/fa";

function Popup2({ popupText }) {
  const { isEye, closeHandler, selectedUser } = useContext(CrudContext);

  if (!selectedUser) return null;

  return (
    <>
      <div className={`popup-overlays ${isEye ? "active" : ""}`}>
        <div className={`form-container ${isEye ? "active" : ""} `}>
          <div className="form-title">
            <h4>{popupText}</h4>
            <IoMdClose
              className=" fs-5"
              onClick={closeHandler}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div
            className={
              " d-flex gap-2 justify-content-evenly align-items-center"
            }
          >
            <Figure
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              imgAlt={"userProfile"}
              imgSrc={selectedUser.file}
              imgStyle={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
            <div>
              <p>{selectedUser.fname}</p>
              <p>{selectedUser.email}</p>
              <p>
                {" "}
                <FaPhoneAlt /> {selectedUser.mobile}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup2;
