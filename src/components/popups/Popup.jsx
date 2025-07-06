import { IoMdClose } from "react-icons/io";
import "../../css/Popup.css";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
import { useContext, useEffect } from "react";
import { CrudContext } from "../../store/crud/crudContext";
import Figure from "../Figure";
// import previewImage from "../../assets/images/harsh.jpeg";

function Popup({ popupText }) {
  //
  const {
    isActive,
    closeHandler,
    isUpdate,
    submitHandler,
    fnameRef,
    emailRef,
    mnoRef,
    passRef,
    maleRef,
    femaleRef,
    otherRef,
    fileRef,
    editId,
    lists,
    handleFileChange,
    previewImg,
    setPreviewImg,
  } = useContext(CrudContext);

  const data = lists.find((list) => list.id === editId);
  console.log(data);

  useEffect(() => {
    if (isUpdate && data) {
      fnameRef.current.value = data.fname || "";
      emailRef.current.value = data.email || "";
      mnoRef.current.value = data.mobile || "";
      passRef.current.value = data.pass || "";
      maleRef.current.checked = data.gender === "Male";
      femaleRef.current.checked = data.gender === "Female";
      otherRef.current.checked = data.gender === "Other";
      setPreviewImg(data?.file || null);
    }

    if (!isUpdate && isActive) {
      fnameRef.current.value = "";
      emailRef.current.value = "";
      mnoRef.current.value = "";
      passRef.current.value = "";
      fileRef.current.value = "";
      maleRef.current.checked = false;
      femaleRef.current.checked = false;
      otherRef.current.checked = false;
      setPreviewImg(null);
    }
  }, [isUpdate, isActive, data]);

  return (
    <>
      <div
        className={`popup-overlays ${isActive || isUpdate ? "active" : ""}  `}
      >
        <form
          className={`form-container ${isActive || isUpdate ? "active" : ""} `}
          onSubmit={submitHandler}
        >
          <div className="form-title">
            <h4>{popupText}</h4>
            <IoMdClose
              className=" fs-5"
              onClick={closeHandler}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="input-box-container">
            <div className="input-box">
              <Input
                type={"text"}
                ref={fnameRef}
                placeholder={"Enter Your Full Name"}
              />
            </div>
            <div className="input-box">
              <Input
                type={"email"}
                placeholder={"Enter Your Email"}
                ref={emailRef}
              />
            </div>
            <div className="input-box">
              <Input
                type={"tel"}
                placeholder={"Enter Your Mobile No"}
                ref={mnoRef}
              />
            </div>
            <div className="input-box">
              <Input
                type={"password"}
                placeholder={"Enter Your Password"}
                ref={passRef}
              />
            </div>
            <div className="input-box">
              <div className="input-box">
                <Label labelText={"Male"} htmlfor={"male"} />
                <Input
                  type={"radio"}
                  name={"gender"}
                  id={"male"}
                  ref={maleRef}
                />
              </div>
              <div className="input-box">
                <Label labelText={"Female"} htmlfor={"female"} />
                <Input
                  type={"radio"}
                  name={"gender"}
                  id={"female"}
                  ref={femaleRef}
                />
              </div>
              <div className="input-box">
                <Label labelText={"Other"} htmlfor={"other"} />
                <Input
                  type={"radio"}
                  name={"gender"}
                  id={"other"}
                  ref={otherRef}
                />
              </div>
            </div>
            {isUpdate && (previewImg || data?.file) && (
              <Figure
                style={{ width: "130px", height: "100px" }}
                imgSrc={previewImg || data?.file}
                imgStyle={{ width: "100%", height: "100%" }}
                imgAlt={"Preview"}
              />
            )}
            <div className="input-box">
              <Input type={"file"} ref={fileRef} onchange={handleFileChange} />
            </div>
          </div>
          <div className=" d-flex gap-2">
            <Button
              btnText={"Submit"}
              type={"submit"}
              classname={"btn btn-primary"}
            />
            <Button
              btnText={"Close"}
              onclick={closeHandler}
              classname={"btn btn-primary"}
              type={"button"}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Popup;
