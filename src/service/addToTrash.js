import axios from "axios"
import { showToast } from "../utils/toast"

const addToTrash = async (_id, note, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, trash } } = await axios.post(`/api/notes/trash/${_id}`,
                { note },
                { headers: { authorization: token } })
        featureStateDispatch({ type: "ADD_TO_TRASH", payload: { notes, trash } })
        showToast("success", "Added to trash")
    } catch (error) {
        showToast("error", error)
    }

}

export { addToTrash }