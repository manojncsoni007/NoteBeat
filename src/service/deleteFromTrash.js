import axios from "axios"
import { showToast } from "../utils/toast"

const deleteFromTrash = async (_id, token, featureStateDispatch) => {
    try {
        const {
            data: { trash } } = await axios.delete(`/api/trash/delete/${_id}`, {
                headers: { authorization: token }
            })
        featureStateDispatch({ type: "DELETE_FROM_TRASH", payload: trash })
        showToast("success","Deleted from trash")
    } catch (error) {
        showToast("error",error)
    }
}

export { deleteFromTrash }