import { createContext, useState } from "react";
const ShowModalContext = createContext();

export const ShowModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalValidation, setShowModalValidation] = useState(false);
  const [showModalPostuleTask, setShowModalPostuleTask] = useState(false);

  return (
    <ShowModalContext.Provider
      value={{
        showModalPostuleTask,
        setShowModalPostuleTask,
        showModal,
        setShowModal,
        showModalValidation,
        setShowModalValidation,
      }}
    >
      {children}
    </ShowModalContext.Provider>
  );
};

export default ShowModalContext;
