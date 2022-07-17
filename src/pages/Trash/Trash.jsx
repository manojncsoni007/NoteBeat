import React from 'react'
import { Note, Sidebar } from '../../components'
import { useFeature } from '../../context'
import './Trash.css'

const Trash = () => {
    const { trash } = useFeature();
    return (
        <>
            <div className="main-section">
                <div className="grid-container">
                    <aside>
                        <Sidebar />
                    </aside>
                    <div className="main-page">
                        <div className="trash-container">
                            <h2>Trash</h2>
                            <div className="trash-note-container">
                                {
                                    trash.length > 0 ? (trash.map((item) => (
                                        <Note key={item._id} note={item} />
                                    ))) : (
                                        <div className="note-info">
                                            <p>No Notes Found!</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Trash }

