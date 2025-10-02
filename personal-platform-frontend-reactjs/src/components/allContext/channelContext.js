// ProjectContext.js
import { createContext, useContext, useState } from "react";

const ChannelContext = createContext();

export const useChannelContext = () => useContext(ChannelContext);

export const ChannelProvider = ({ children }) => {
  const [selectedTargetId, setSelectedTargetId] = useState();
  const [channelsList, setChannelsList] = useState([]);

  return (
    <ChannelContext.Provider
      value={{
        selectedTargetId,
        setSelectedTargetId,
        channelsList,
        setChannelsList,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
