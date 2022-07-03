import axios from "axios"

const addNewNote = async (noteObj, token, featureStateDispatch,setShowAddNote) => {
    try {
        const { data:
            { notes } } = await axios.post("/api/notes", { note: noteObj }, {
                headers: {
                    authorization: token,
                },
            })
        featureStateDispatch({ type: "ADD_NOTES", payload: notes });
        setShowAddNote(false);

    } catch (error) {
        console.log(error)
    }

}

export { addNewNote }