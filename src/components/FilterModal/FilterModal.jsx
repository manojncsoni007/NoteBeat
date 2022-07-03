import React from 'react'
import { useFeature } from '../../context'
import './FilterModal.css'

const FilterModal = ({ setShowFilterModal }) => {
    const { filters, labels, featureStateDispatch } = useFeature();
    const { sortByDate, sortByPriority, label } = filters
    return (
        <>
            <div className="modal-wrapper">
                <div className="filter-model-container">
                    <div className="filter-header">
                        <p>Filter Notes</p>
                        <i className="fas fa-times" onClick={() => setShowFilterModal(false)}></i>
                    </div>
                    <div className="filter-body">
                        <div className="filter-group">
                            <h4>Sort By Date</h4>
                            <div className="filter-radio-container">
                                <label>
                                    <input
                                        type="radio"
                                        name="filter-date"
                                        id="filter-date"
                                        checked={sortByDate === "NEWEST" }
                                        onChange={() => featureStateDispatch({ type: "SORT_BY_DATES", payload: "NEWEST" })} />
                                    Newest first
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="filter-date"
                                        id="filter-date"
                                        checked={sortByDate === "OLDEST" }
                                        onChange={() => featureStateDispatch({ type: "SORT_BY_DATES", payload: "OLDEST" })} />
                                    Oldest first
                                </label>
                            </div>
                        </div>
                        <div className="filter-group">
                            <div className="filter-group">
                                <h4>Sort By Priority</h4>
                                <div className="filter-radio-container">
                                    <label>
                                        <input
                                            type="radio"
                                            name="filter-priority"
                                            id="filter-priority"
                                            checked={sortByPriority === "HIGH"}
                                            onChange={() => featureStateDispatch({ type: "SORT_BY_PRIORITY", payload: "HIGH" })} />
                                        High
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="filter-priority"
                                            id="filter-priority"
                                            checked={sortByPriority === "MEDIUM"}
                                            onChange={() => featureStateDispatch({ type: "SORT_BY_PRIORITY", payload: "MEDIUM" })} />
                                        Medium
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="filter-priority"
                                            id="filter-priority"
                                            checked={sortByPriority === "LOW"}
                                            onChange={() => featureStateDispatch({ type: "SORT_BY_PRIORITY", payload: "LOW" })} />
                                        Low
                                    </label>
                                </div>
                            </div>
                            <div className="filter-group">
                                <h4>Filter By Label</h4>
                                <div className="filter-checkbox-container">
                                    {
                                        labels.map((item) => (
                                            <div className="filter-checkbox" key={item._id}>
                                                <input
                                                    type='checkbox'
                                                    title={item.label}
                                                    checked={label.includes(item.label)}
                                                    onChange={() => featureStateDispatch({ type: "FILTER_BY_LABEL", payload: item.label })} />
                                                <label>{item.label}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="filter-group">

                        </div>
                    </div>
                    <div className="filter-footer">
                        <button onClick={() => {
                            featureStateDispatch({ type: "CLEAR_ALL_FILTERS", payload: 'clear' })
                            setShowFilterModal(false)
                        }}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { FilterModal }