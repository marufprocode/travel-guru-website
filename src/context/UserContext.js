import React, { createContext, useState } from 'react';

export const sharedContext = createContext();

const UserContext = ({children}) => {
    const [activeCard, setActiveCard] = useState();
    const [loading, setLoading] = useState(true);

    const localData = JSON.parse(localStorage.getItem('data'));
    if(!activeCard) return setActiveCard(localData) 

    const contextInfo = {activeCard, setActiveCard, loading, setLoading}
    return (
        <sharedContext.Provider value={contextInfo}>
            {children}
        </sharedContext.Provider>
    );
};

export default UserContext;