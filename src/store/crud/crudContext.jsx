import { createContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isEye, setIsEye] = useState(false);
  const [lists, setLists] = useState(() => {
    const storedData = localStorage.getItem("listsCrud");
    return JSON.parse(storedData) || [];
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [editId, setEditid] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("fname");
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 5;
  const fnameRef = useRef("");
  const emailRef = useRef("");
  const mnoRef = useRef("");
  const passRef = useRef("");
  const maleRef = useRef(false);
  const femaleRef = useRef(false);
  const otherRef = useRef(false);
  const fileRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("listsCrud", JSON.stringify(lists));
  }, [lists]);

  function activeHandler() {
    setIsActive(true);
  }

  function updateHandler(id) {
    setEditid(id);
    setIsUpdate(true);
  }

  function eyeHandler(id) {
    const data = lists.find((list) => list.id === id);
    setSelectedUser(data);
    setIsEye(true);
  }

  function closeHandler(e) {
    e.preventDefault();
    isActive && setIsActive(false);
    isUpdate && setIsUpdate(false);
    isEye && setIsEye(false);
    setPreviewImg(null);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const fname = fnameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mnoRef.current.value;
    const pass = passRef.current.value;
    const file = fileRef.current.files[0];

    let gender = "";
    if (maleRef.current.checked) gender = "Male";
    else if (femaleRef.current.checked) gender = "Female";
    else if (otherRef.current.checked) gender = "Other";
    console.log(file);

    const handleSubmit = (base64Img = "") => {
      if (editId && isUpdate) {
        const updateList = lists.map((list) =>
          list.id === editId
            ? {
                ...list,
                fname,
                email,
                mobile,
                pass,
                gender,
                file: base64Img || list.file,
              }
            : list
        );
        setLists(updateList);
      } else {
        const id = uuidv4();
        setLists([
          ...lists,
          { id, fname, email, mobile, pass, gender, file: base64Img },
        ]);
      }

      fnameRef.current.value = "";
      emailRef.current.value = "";
      mnoRef.current.value = "";
      passRef.current.value = "";
      fileRef.current.value = "";
      maleRef.current.checked = "";
      femaleRef.current.checked = "";
      otherRef.current.checked = "";
      setPreviewImg(null);
      closeHandler(e);
    };

    if (file) {
      const fileObj = new FileReader();
      fileObj.onloadend = () => {
        handleSubmit(fileObj.result);
      };
      fileObj.readAsDataURL(file);
    } else {
      handleSubmit(previewImg);
    }
  }

  function deleteHandler(id) {
    const confirmDelete = confirm("Are you sure you want to delete ?");

    if (confirmDelete) {
      const otherData = lists.filter((list) => list.id !== id);
      setLists(otherData);
    } else {
      return;
    }
  }

  const filteredLists = lists.filter(
    (list) =>
      list.fname.toLowerCase().includes(searchTerm) ||
      list.email.toLowerCase().includes(searchTerm) ||
      list.mobile.toLowerCase().includes(searchTerm)
  );

  const sortedLists = [...filteredLists].sort((a, b) => {
    const valueA = a[sortKey].toLowerCase?.() || a[sortKey];
    const valueB = b[sortKey].toLowerCase?.() || b[sortKey];

    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <CrudContext.Provider
      value={{
        lists,
        setLists,
        isActive,
        setIsActive,
        activeHandler,
        closeHandler,
        deleteHandler,
        isUpdate,
        setIsUpdate,
        updateHandler,
        isEye,
        setIsEye,
        eyeHandler,
        submitHandler,
        fnameRef,
        emailRef,
        mnoRef,
        passRef,
        maleRef,
        femaleRef,
        otherRef,
        fileRef,
        selectedUser,
        setSelectedUser,
        editId,
        setEditid,
        previewImg,
        setPreviewImg,
        handleFileChange,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        filteredLists,
        sortKey,
        setSortKey,
        sortOrder,
        setSortOrder,
        sortedLists,
      }}
    >
      {" "}
      {children}{" "}
    </CrudContext.Provider>
  );
};

export default CrudProvider;
