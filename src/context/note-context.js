import React, { createContext, useContext,useReducer } from "react";
import { noteReducer } from "../reducer";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [noteState, noteStateDispatch] = useReducer(noteReducer, {
        isPinnedNote: false,
        title: "",
        content: "",
        color: "",
        priority: "",
        tags: [],
      })
    
    return (
        <NoteContext.Provider value={{noteState,noteStateDispatch}} >
            {children}
        </NoteContext.Provider>
    )
}

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote }
