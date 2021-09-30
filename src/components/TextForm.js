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
    const handleClearClick=()=>{
        // console.log("btn clicked");
        // console.log(text);
        
        setText('');
    }
    const handleOnChange=(event)=>{
        // console.log("changed");
        setText(event.target.value);
        document.querySelector('#copy-btn').innerText = 'Copy Text';

    }

    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // document.getElementById("copy-btn").value="Copied";
        document.querySelector('#copy-btn').innerText = 'Copied';
    }

    const toggleStyle=()=>{
        console.log("clicked");
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText('Disable Dark Mode');
        }else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText('Enable Dark Mode');
        }
    }

    const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })

    const [btn,setBtnText]=useState('Enable Dark Mode');


    const [text,setText] = useState("Enter text here");
    return (
        <>
        <div className="container form-check form-switch">
            <input className="form-check-input" onClick={toggleStyle} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btn}</label>
        </div>

        <div className="container" style={myStyle}>
            <h1>{props.header}</h1>
            <div className="mb-3" style={myStyle}>
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea style={myStyle} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-2 mb-2" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-primary me-2 mb-2" onClick={handleLoClick}>Convert to Lower case</button>
            <button className="btn btn-primary me-2 mb-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary me-2 mb-2" id="copy-btn" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={myStyle}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
