import React, { useState } from 'react'
import { AddNote, FilterModal, Note, Sidebar } from '../../components'
import { useFeature } from '../../context'
import { getFilterByLabels, getSortedByDate, getSortedByPriority } from '../../utils'
import './Homepage.css'

const Homepage = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const { notes, filters, showAddNote} = useFeature();
  const { sortByDate, sortByPriority, label } = filters;
  

  const dateFilter = getSortedByDate(notes, sortByDate);
  const priorityFilter = getSortedByPriority(dateFilter, sortByPriority);
  const labelFilter = getFilterByLabels(priorityFilter, label);
  const pinnedNotes = labelFilter.filter((item) => item.isPinnedNote);
  const unPinnedNotes = labelFilter.filter((item) => !item.isPinnedNote);

  return (
    <>
      {
        showFilterModal && <FilterModal setShowFilterModal={setShowFilterModal} />
      }
      <div className="main-section">
        <div className="grid-container">
          <aside>
            <Sidebar />
          </aside>
          <section className="main-page">
            <div className='home_header'>
              {showAddNote && <AddNote/>}
              <button className='filter-btn' onClick={() => setShowFilterModal(true)}>
                <i className="fas fa-filter"></i>
                Filter Notes
              </button>
            </div>
            <div className="pinned-note-container">
              {pinnedNotes.length > 0 &&
                <>
                  <h3>PINNED</h3>
                  <div className="note-container">
                    {pinnedNotes.map((item, index) => (
                      <Note key={index} note={item} />
                    ))}
                  </div>
                </>
              }
            </div>
            <div className="other-note-container">
              {unPinnedNotes.length > 0 &&
                <>
                  <h3>OTHERS</h3>
                  <div className="note-container">
                    {unPinnedNotes.map((item, index) => (
                      <Note key={index} note={item} />
                    ))}
                  </div>
                </>
              }
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export { Homepage }