import axios from "axios"

const restoreFromTrash = async (_id, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, trash } } = await axios.post(`/api/trash/restore/${_id}`,
                {},
                { headers: { authorization: token } })
        featureStateDispatch({ type: "RESTORE_FROM_TRASH", payload: { notes, trash } })
    } catch (error) {
        console.log(error)
    }
}

export { restoreFromTrash }