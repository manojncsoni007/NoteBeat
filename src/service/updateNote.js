import axios from "axios"
import { showToast } from "../utils/toast";

const updateNote = async (id, noteObj, token, featureStateDispatch, setShowAddNote,setEditNote,setEditId) => {
    try {
        const { data:
            { notes } } = await axios.post(`/api/notes/${id}`,
                { note: noteObj },
                { headers: { authorization: token } })
        featureStateDispatch({ type: "UPDATE_NOTES", payload: notes });
        setShowAddNote(false);
        showToast("success", "Note updated!!")
        setEditNote(false);
        setEditId("");

    } catch (error) {
        console.log(error)
    }
}

export { updateNote }