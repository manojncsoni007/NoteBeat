import React, { useContext, createContext, useReducer, useState } from 'react'
import { featureReducer } from '../reducer';

const FeatureContext = createContext();

const FeatureProvider = ({ children }) => {
    const [showAddNote, setShowAddNote] = useState(false);
    const [editNote, setEditNote] = useState(false)
    const [editId, setEditId] = useState();
    const [editNoteContent, setEditNoteContent] = useState();
    const [showColorPallete, setShowColorPallete] = useState(false);
    const [featureState, featureStateDispatch] = useReducer(featureReducer, {
        notes: [],
        trash: [],
        archive: [],
        labels: [],
        filters: {
            sortByDate: "",
            sortByPriority: "",
            label: []
        }
    })

    const { notes, trash, archive, labels, filters } = featureState;
    console.log({editNoteContent});
    return (
        <FeatureContext.Provider
            value={{
                filters,
                labels,
                notes,
                trash,
                archive,
                editNote,
                editId,
                showAddNote,
                showColorPallete,
                editNoteContent,
                setEditNoteContent,
                featureStateDispatch,
                setShowColorPallete,
                setShowAddNote,
                setEditNote,
                setEditId
            }}>
            {children}
        </FeatureContext.Provider>
    )
}

const useFeature = () => useContext(FeatureContext);

export { useFeature, FeatureProvider }