import React, { useReducer, useState } from 'react'
import { v4 as uuid } from 'uuid';
import JoditEditor from "jodit-react";
import { BsPin, BsFillPinFill } from "react-icons/bs";
import { useAuth, useFeature } from '../../context';
import { noteReducer } from '../../reducer';
import { addNewNote, updateNote } from '../../service';
import { ColorPalette } from '../ColorPalette/ColorPalette';
import { Label } from '../Label/Label';
import { showToast } from '../../utils/toast';

import "./AddNote.css"

const AddNote = () => {
    const [showLabel, setShowLabel] = useState(false);
    const { editId, editNote, editNoteContent, setEditNote, setEditId, setShowAddNote, showColorPallete, setShowColorPallete, featureStateDispatch } = useFeature();
    const { token } = useAuth();
    const [noteState, noteStateDispatch] = useReducer(noteReducer, {
        isPinnedNote: false,
        title: "",
        content: "",
        color: "",
        priority: "",
        tags: [],
    })

    const noteObj = {
        _id: uuid(),
        isPinnedNote: noteState.isPinnedNote,
        title: noteState.title,
        content: noteState.content,
        color: noteState.color,
        priority: noteState.priority,
        tags: noteState.tags,
        created: new Date().toLocaleString()
    }

   
    const addNoteHandler = async () => {
        if (noteState?.title?.trim() !== "" && noteState?.content?.trim() !== "") {
            addNewNote(noteObj, token, featureStateDispatch, setShowAddNote)
        } else {
            showToast("error", "Note can not be empty")
        }
    }
    const updateNoteHandler = async () => {
        updateNote(editId, noteObj, token, featureStateDispatch, setShowAddNote, setEditNote, setEditId);

    }

    const cancelAddNote = () => {
        setShowAddNote(false);
        setEditNote(false)
    }

    return (
        <>
            <div className="add-note" style={{ backgroundColor: noteState.color }}>
                <div className="note-header">
                    <input
                        type="text"
                        placeholder='Title'
                        value={noteState.title}
                        style={{ backgroundColor: noteState.color }}
                        onChange={(e) => noteStateDispatch({ type: "SET_TITLE", payload: e.target.value })} />
                    <span onClick={() => noteStateDispatch({ type: "UPDATE_PIN", payload: !noteState.isPinnedNote })}>
                        {noteState.isPinnedNote ? <BsFillPinFill size='25' color='blue' /> : <BsPin size='25' />}
                    </span>

                </div>
                <div className="note-text">
                    <JoditEditor
                        value={noteState.content}
                        onChange={(event) => noteStateDispatch({ type: "SET_CONTENT", payload: event })} />
                </div>
                <div className="labels-container">
                    {noteState.tags?.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>

                <div className="note-footer">
                    <div className='icon-group'>
                        <div className="priority-container">
                            <select
                                name="sort-by"
                                className="dropdown"
                                value={noteState.priority}
                                onChange={(e) => noteStateDispatch({ type: "SET_PRIORITY", payload: e.target.value })}>
                                <option value="">-- Select Priority --</option>
                                <option value="HIGH">High Priority</option>
                                <option value="MEDIUM">Medium Priority</option>
                                <option value="LOW">Low Priority</option>
                            </select>
                        </div>
                        <i
                            className="fas fa-tags"
                            onClick={() => setShowLabel(!showLabel)}></i>
                        {showLabel && <Label noteState={noteState} noteStateDispatch={noteStateDispatch} />}

                        <i
                            className="fas fa-palette"
                            onClick={() => setShowColorPallete(!showColorPallete)}></i>
                        {showColorPallete && <ColorPalette noteStateDispatch={noteStateDispatch} />}
                    </div>

                    <div className="btn-group">
                        <button className='cancel-btn' onClick={cancelAddNote}>Cancel</button>
                        {
                            editNote ? <button className='add-btn' onClick={updateNoteHandler}>Update</button> :
                                <button className='add-btn' onClick={addNoteHandler}>Add</button>
                        }

                    </div>
                </div>
            </div >

        </>
    )
}

export { AddNote }