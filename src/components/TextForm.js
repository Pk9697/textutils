import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("btn clicked");
        // console.log(text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        // console.log("changed");
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter text here");
    return (
        <div className="container">
            <h1>{props.header}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Click</button>
        </div>
    )
}
