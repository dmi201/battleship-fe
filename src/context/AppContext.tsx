import React, { createContext, useState, ReactNode } from "react";

type AppContextType = {
  modalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
  currentNotification: string | null;
  setNotification: (message: string) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<string | null>(
    null
  );

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const setNotification = (message: string) => setCurrentNotification(message);

  return (
    <AppContext.Provider
      value={{
        modalVisible,
        showModal,
        hideModal,
        currentNotification,
        setNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
