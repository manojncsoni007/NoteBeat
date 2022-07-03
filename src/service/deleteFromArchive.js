import axios from "axios"

const deleteFromArchive = async(_id, token, featureStateDispatch) => {
    try {
        const {
            data: { archives } } = await axios.delete(`/api/archives/delete/${_id}`, {
                headers: { authorization: token }
            })
        featureStateDispatch({ type: "DELETE_FROM_ARCHIVE", payload:  archives })
    } catch (error) {
        console.log(error)
    }
}

export { deleteFromArchive }