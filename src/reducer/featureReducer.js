const featureReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_LABELS":
            return { ...state, labels: [...state.labels, { ...payload }] }
        case "ADD_NOTES":
            return { ...state, notes: payload }
        case "UPDATE_NOTES":
            return {
                ...state, notes: payload
            }
        case "ADD_TO_ARCHIVE":
            return {
                ...state,
                notes: payload.notes,
                archive: payload.archives
            }
        case "RESTORE_FROM_ARCHIVE":
            return {
                ...state,
                notes: payload.notes,
                archive: payload.archives
            }
        case "DELETE_FROM_ARCHIVE":
            return {
                ...state,
                archive: payload
            }
        case "ADD_TO_TRASH":
            return {
                ...state,
                notes: payload.notes,
                trash: payload.trash
            }
        case "RESTORE_FROM_TRASH":
            return {
                ...state,
                notes: payload.notes,
                trash: payload.trash
            }
        case "DELETE_FROM_TRASH":
            return {
                ...state,
                trash: payload
            }
        case "TOGGLE_PIN_NOTES":
            return {
                ...state, notes: state.notes.map((item) =>
                    item._id === payload ? { ...item, isPinnedNote: !item.isPinnedNote } : { ...item })
            }
        case "SORT_BY_DATES":
            return {
                ...state, filters: {
                    ...state.filters, sortByDate: payload
                }
            }
        case "SORT_BY_PRIORITY":
            return {
                ...state, filters: {
                    ...state.filters, sortByPriority: payload
                }
            }
        case "FILTER_BY_LABEL":
            return state.filters.label.includes(payload) ?
                {
                    ...state, filters: {
                        ...state.filters,
                        label: [...state.filters.label].filter(item => item !== payload)
                    }
                }
                : {
                    ...state, filters: {
                        ...state.filters,
                        label: [...state.filters.label].concat(payload)
                    }
                };

        case "CLEAR_ALL_FILTERS":
            return {
                ...state, filters: {
                    sortByDate: "",
                    sortByPriority: "",
                    label: []
                }
            }
        default:
            return state;
    }
}

export { featureReducer }