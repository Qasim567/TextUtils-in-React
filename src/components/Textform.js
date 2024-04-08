import React ,{useState} from "react";

export default function Textform(props) {
    const[text,setText]=useState('Enter Your text')

    const hnandleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert('Converted to uppercase','success')
    }

    const handleLowerClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext)
      props.showalert('Converted to lowercase','success')
   }

   const handleClearClick=()=>{
    let newtext='';
    setText(newtext)
    props.showalert('Clear text','success')
 }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>      
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white' ,
        color: props.mode==='dark'?'white':'black'}} 
        id="Box" rows="8" value={text} onChange={hnandleOnChange} 
        ></textarea>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowerClick}>Convert to Lower Case</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{(text.trim()).length === 0 ? 0 : (text.trim()).split(' ').length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(' ').length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  );
}
