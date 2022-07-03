import React, { useContext, createContext, useReducer, useState } from 'react'
import { featureReducer } from '../reducer';

const FeatureContext = createContext();

const FeatureProvider = ({ children }) => {
    const [showAddNote, setShowAddNote] = useState(false);
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
    return (
        <FeatureContext.Provider
            value={{
                filters,
                labels,
                notes,
                trash,
                archive,
                showAddNote,
                showColorPallete,
                featureStateDispatch,
                setShowColorPallete,
                setShowAddNote
            }}>
            {children}
        </FeatureContext.Provider>
    )
}

const useFeature = () => useContext(FeatureContext);

export { useFeature, FeatureProvider }