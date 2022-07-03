import axios from "axios"

const restoreFromArchive = async (_id, token, featureStateDispatch) => {
    try {
        const {
            data: { notes, archives } } = await axios.post(`/api/archives/restore/${_id}`,
                {},
                { headers: { authorization: token } })
        featureStateDispatch({ type: "RESTORE_FROM_ARCHIVE", payload: { notes, archives } })

    } catch (error) {
        console.log(error)
    }
}

export { restoreFromArchive }