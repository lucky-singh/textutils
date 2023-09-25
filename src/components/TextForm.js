import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here")
  return (
    <div className="my-3">
        <h1>{props.heading}</h1>
        <textarea type="text" className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Another input placeholder" />
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to upcase</button>
    </div>
  )
}
