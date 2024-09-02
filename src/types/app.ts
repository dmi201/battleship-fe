export type AppContextType = {
  modalVisible: boolean;
  currentNotification: string | null;
  soundEnabled: boolean;
  showModal: () => void;
  hideModal: () => void;
  setNotification: (message: string) => void;
  playSound: (sound: string) => void;
  toggleSound: () => void;
};
