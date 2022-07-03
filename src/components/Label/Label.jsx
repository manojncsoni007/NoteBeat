import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { useFeature } from '../../context';
import './Label.css'

const Label = ({ noteState, noteStateDispatch }) => {
    const [labelName, setLabelName] = useState("");
    const { labels, featureStateDispatch } = useFeature();;

    const addLabelHandler = () => {
        const newLabel = { _id: uuid(), label: labelName };
        const isLabelExist = labels.some((item) => item.label == labelName);
        if (!isLabelExist) {
            featureStateDispatch({ type: "ADD_LABELS", payload: newLabel });
            setLabelName("");
        } else {
            console.log('label already exist');
            setLabelName("");
        }

    }

    const tagHandler = (e, label) => {
        if (e.target.checked) {
            noteStateDispatch({ type: "ADD_LABELS", payload: label })
        } else {
            noteStateDispatch({ type: "DELETE_LABELS", payload: label })
        }

    }
    return (
        <>
            <div className='label'>
                {
                    labels.map((item) => (
                        <label key={item._id}>
                            <input
                                type='checkbox'
                                title={item.label}
                                checked={noteState?.tags?.includes(item.label)}
                                onChange={(e) => tagHandler(e, item.label)}
                            /> {item.label}</label>
                    ))
                }
                <div className="label-footer">
                    <input type="text" id='label-text' value={labelName} onChange={(e) => setLabelName(e.target.value)} />
                    <button className='label-footer' onClick={addLabelHandler}><span className='plus-icon'>+</span></button>
                </div>

            </div>
        </>
    )
}

export { Label }

