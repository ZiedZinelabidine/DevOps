import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useHandleSubmit = (
  selectedElement,
  setSelectedElement,
  setConfirmShow,
  openModalRegister,
  setOpenModalRegister,
  isEditing
) => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    if (openModalRegister) {
      setOpenModalRegister(false);
      return;
    }

    if (selectedElement === 6) {
      setConfirmShow(true);
      return;
    }

    if (isEditing) {
      navigate("/training");
      return;
    }

    setSelectedElement(selectedElement + 1);
  }, [
    selectedElement,
    openModalRegister,
    isEditing,
    navigate,
    setSelectedElement,
    setConfirmShow,
    setOpenModalRegister,
  ]);

  return { handleSubmit };
};

export default useHandleSubmit;
