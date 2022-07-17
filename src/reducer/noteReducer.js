

const noteReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_TITLE":
            return { ...state, title: payload }
        case "SET_CONTENT":
            return { ...state, content: payload }
        case "SET_COLOR":
            return { ...state, color: payload }
        case "UPDATE_PIN":
            return { ...state, isPinnedNote: payload }
        case "ADD_LABELS":
            return { ...state, tags: [...state.tags, payload] }
        case "DELETE_LABELS":
            return { ...state, tags: state.tags.filter((tag) => tag !== payload) }
        case "SET_PRIORITY":
            return { ...state, priority: payload }
        case "UPDATE_NOTE":
            return {
                isPinnedNote: payload.isPinnedNote,
                title: payload.title,
                content: payload.content,
                color: payload.color,
                priority: payload.priority,
                tags: payload.tags
            }
        case "RESET":
            return {
                isPinnedNote: false,
                title: "",
                content: "",
                color: "",
                priority: "",
                tags: []
            }
        default:
            return state;
    }
}

export { noteReducer }