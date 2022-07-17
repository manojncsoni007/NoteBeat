import axios from "axios"
import { showToast } from "../utils/toast";


const addNewNote = async (noteObj, token, featureStateDispatch, setShowAddNote,noteStateDispatch) => {
    try {
        const { data:
            { notes } } = await axios.post("/api/notes", { note: noteObj }, {
                headers: {
                    authorization: token,
                },
            })
        featureStateDispatch({ type: "ADD_NOTES", payload: notes });
        setShowAddNote(false);
        showToast("success", "New note added")
        noteStateDispatch({ type: "RESET" })

    } catch (error) {
        showToast("error", error)
    }

}

export { addNewNote }