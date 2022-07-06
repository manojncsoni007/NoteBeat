import axios from "axios"
import { showToast } from "../utils/toast"

const addToArchive = async (_id, note, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, archives } } = await axios.post(`/api/notes/archives/${_id}`,
                { note },
                { headers: { authorization: token } })
        featureStateDispatch({ type: "ADD_TO_ARCHIVE", payload: { notes, archives } })
        showToast("success", "Moved to archive")

    } catch (error) {
        showToast("error",error)
    }
}

export { addToArchive }