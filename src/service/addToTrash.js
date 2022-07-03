import axios from "axios"

const addToTrash = async (_id, note, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, trash } } = await axios.post(`/api/notes/trash/${_id}`,
                { note },
                { headers: { authorization: token } })
        featureStateDispatch({ type: "ADD_TO_TRASH", payload: { notes, trash } })
    } catch (error) {
        console.log(error)
    }

}

export { addToTrash }