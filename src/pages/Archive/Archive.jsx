import React from 'react'
import { Note, Sidebar } from '../../components'
import { useFeature } from '../../context'
import "./Archive.css"

const Archive = () => {
  const { archive } = useFeature();
  return (
    <>
      <div className="main-section">
        <div className="grid-container">
          <aside>
            <Sidebar />
          </aside>
          <div className="main-page">
            <div className="archive-container">
              <h2>Archived Notes</h2>
              <div className="archive-note-container">
                { archive.length > 0 ? (
                  archive.map((item) => (
                    <Note key={item._id} note={item} />
                  ))
                ) : (
                  <div className="note-info">
                    <p>No Notes Found!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Archive }