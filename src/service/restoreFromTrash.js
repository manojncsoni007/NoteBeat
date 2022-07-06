import axios from "axios"
import { showToast } from "../utils/toast"

const restoreFromTrash = async (_id, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, trash } } = await axios.post(`/api/trash/restore/${_id}`,
                {},
                { headers: { authorization: token } })
        featureStateDispatch({ type: "RESTORE_FROM_TRASH", payload: { notes, trash } })
        showToast("success","Restored from trash")
    } catch (error) {
        showToast("error",error)
    }
}

export { restoreFromTrash }