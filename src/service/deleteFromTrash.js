import axios from "axios"

const deleteFromTrash = async (_id, token, featureStateDispatch) => {
    try {
        const {
            data: { trash } } = await axios.delete(`/api/trash/delete/${_id}`, {
                headers: { authorization: token }
            })
        featureStateDispatch({ type: "DELETE_FROM_TRASH", payload: trash })
    } catch (error) {
        console.log(error)
    }
}

export { deleteFromTrash }