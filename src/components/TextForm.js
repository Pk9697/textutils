import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("btn clicked");
        // console.log(text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick=()=>{
        // console.log("btn clicked");
        // console.log(text);
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        // console.log("changed");
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter text here");
    return (
        <>
        <div className="container">
            <h1>{props.header}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lower case</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
