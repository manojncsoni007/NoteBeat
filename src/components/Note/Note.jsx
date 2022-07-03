import React from 'react'
import { BsPin, BsFillPinFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { useAuth, useFeature } from '../../context';
import { addToArchive, addToTrash, deleteFromArchive, deleteFromTrash, restoreFromArchive, restoreFromTrash } from '../../service';
import './Note.css'

const Note = ({ note }) => {
  const { token } = useAuth();
  const { pathname } = useLocation();
  const { _id, title, content, isPinnedNote, color, priority, tags, created } = note;
  const { setShowAddNote, featureStateDispatch } = useFeature();

  const pinHandler = (_id) => {
    featureStateDispatch({ type: "TOGGLE_PIN_NOTES", payload: _id })
  }
  const addToArchiveHandler = () => {
    addToArchive(_id, note, token, featureStateDispatch)
  }
  const restoreArchiveHandler = () => {
    restoreFromArchive(_id, token, featureStateDispatch)
  }
  const deleteArchiveHandler = () => {
    deleteFromArchive(_id, token, featureStateDispatch);
  }
  const addToTrashHandler = () => {
    addToTrash(_id, note, token, featureStateDispatch)
  }
  const restoreTrashHandler = () => {
    restoreFromTrash(_id, token, featureStateDispatch);
  }
  const deleteTrashHandler = () => {
    deleteFromTrash(_id,token,featureStateDispatch);
  }

  return (
    <>
      <div className="note" style={{ backgroundColor: color }}>
        <div className="note-header">
          <h3>{title}</h3>
          {pathname == "/home" &&
            <div className='icon' onClick={() => pinHandler(_id)}>
              {isPinnedNote ? <BsFillPinFill size='20' color='blue' /> : <BsPin size='20' />}
            </div>
          }
        </div>
        <div className="note-body">
          <p>{parse(`${content}`)}</p>
        </div>
        <div className="note-tags">
          <div className='notes-label'>
            {tags.map((item) => (
              <span>{item}</span>
            ))}
          </div>
          {priority &&
            <div className="priority">
              <div><span>{priority}</span></div>
            </div>}

        </div>
        <div className="note-footer">
          <div className='time'>{created}</div>
          <div className="footer-icon">
            {pathname === "/home" &&
              <>
                {/* will do later <i className="fas fa-edit" onClick={() => updateNoteHandler()}></i> */}
                <i className="fas fa-archive" onClick={() => addToArchiveHandler()}></i>
                <i className="fas fa-trash" onClick={() => addToTrashHandler()}></i>
              </>
            }
            {pathname === "/archive" &&
              <>
                <i className="fas fa-folder-open" onClick={() => restoreArchiveHandler()}></i>
                <i className="fas fa-trash" onClick={() => deleteArchiveHandler()}></i>
              </>
            }
            {pathname === "/trash" &&
              <>
                <i className="fas fa-trash-restore" onClick={() => restoreTrashHandler()}></i>
                <i className="fas fa-trash" onClick={() => deleteTrashHandler()}></i>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export { Note }