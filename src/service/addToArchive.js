import axios from "axios"

const addToArchive = async (_id, note, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, archives } } = await axios.post(`/api/notes/archives/${_id}`,
                { note },
                { headers: { authorization: token } })
        featureStateDispatch({ type: "ADD_TO_ARCHIVE", payload: { notes, archives } })

    } catch (error) {
        console.log(error)
    }
}

export { addToArchive }