import axios from "axios"
import { showToast } from "../utils/toast"

const deleteFromArchive = async (_id, token, featureStateDispatch) => {
    try {
        const {
            data: { archives } } = await axios.delete(`/api/archives/delete/${_id}`, {
                headers: { authorization: token }
            })
        featureStateDispatch({ type: "DELETE_FROM_ARCHIVE", payload: archives })
        showToast("success", "Deleted from archive");
    } catch (error) {
        showToast("error", error);
    }
}

export { deleteFromArchive }