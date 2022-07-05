import React from 'react'
import { Note, Sidebar } from '../../components'
import { useFeature } from '../../context'
import "./Label.css"

const Label = () => {
    const { notes, labels } = useFeature();
    return (
        <>
            <div className="main-section">
                <div className="grid-container">
                    <aside>
                        <Sidebar />
                    </aside>
                    <div className="main-page">
                        <div className="label-page">
                            <h2>Labels</h2>
                            {labels.map((item) => {
                                return <div>
                                    <div className="title"> <h3 key={item._id}>{item.label}</h3></div>
                                    <div className="note-container">
                                        {notes.filter((note) => note.tags.includes(item.label))
                                            .map((note) => (
                                                <Note key={note._id} note={note} />
                                            ))}
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export { Label }