import React from 'react'
import { useFeature } from '../../context'
import { colorData } from '../../static-data'
import './ColorPalette.css'

const ColorPalette = ({ noteStateDispatch }) => {
  const { setShowColorPallete } = useFeature();

  const colorHandler = (color) => {
    noteStateDispatch({ type: "SET_COLOR", payload: color })
    setShowColorPallete(false);
  }

  return (
    <>
      <div className="color-palette">
        {colorData.map((color) => (
          <span
            key={color}
            style={{ backgroundColor: color }}
            onClick={()=>colorHandler(color)}></span>
        ))}
      </div>
    </>
  )
}

export { ColorPalette }