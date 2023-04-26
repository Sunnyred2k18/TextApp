import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpperCase = () => {
        console.log("Upper case was clicked : " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success")
    }
    const handleLowerCase = () => {
        console.log("Lower case was clicked : " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "Success")
    }
    const handleClearCase = () => {
        console.log("Clear case was clicked : " + text)
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared", "Success")
    }

    const handleOnChange = (event) => {
        console.log("Onchange is triggered")
        setText(event.target.value)

    }
    return (
        <>
        <div className='container' style={{color : props.mode === 'dark'?'white':'black' }}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'light'?'white':'#2e3338', color : props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="6" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearCase}>Clear Text</button>

            </div>

        <div className='container' style={{color : props.mode === 'dark'?'white':'black' }}>
        <h1> Your text Summary</h1>
        <p> {text.split(" ").length} Words and {text.length} characters</p>
        </div>

        </>
    )
}

