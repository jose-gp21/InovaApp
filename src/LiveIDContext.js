import React, { useState } from 'react';

export const LiveIDContext = React.createContext({
  activeLiveIDs: [],
  addLiveID: () => {},
  removeLiveID: () => {}
});

export const LiveIDProvider = (props) => {
    const [activeLiveIDs, setActiveLiveIDs] = useState([]);

    const addLiveID = (id) => {
        console.log("Adicionando liveID:", id); // Log para depuração
        setActiveLiveIDs(prevIDs => [...prevIDs, id]);
    };

    const removeLiveID = (id) => {
        setActiveLiveIDs(prevIDs => prevIDs.filter(liveID => liveID !== id));
    };

    return (
        <LiveIDContext.Provider value={{ activeLiveIDs, addLiveID, removeLiveID }}>
            {props.children}
        </LiveIDContext.Provider>
    );
};