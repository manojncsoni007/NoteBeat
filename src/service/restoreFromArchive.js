import axios from "axios"
import { showToast } from "../utils/toast"

const restoreFromArchive = async (_id, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, archives } } = await axios.post(`/api/archives/restore/${_id}`,
                {},
                { headers: { authorization: token } })
        featureStateDispatch({ type: "RESTORE_FROM_ARCHIVE", payload: { notes, archives } })
        showToast("success", "Restored from archive")

    } catch (error) {
        showToast("error", error)
    }
}

export { restoreFromArchive }