import React, { useState } from 'react'
export default function Textform(props) {
   const handleUpClick = () => {
      // console.log("Uppercase was Clicked")
      let newText = text.toUpperCase()
      setText(newText)
   }
   const handleLowClick = () => {
      console.log("low click button was clicked")
      let newText = text.toLowerCase()
      setText(newText)
   }
   const clearText = () => {
      let newText = ''
      setText(newText)
   }

   const copyText = () => {
      //console.log('working')
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
   }
   const handleOnChange = (event) => {
      console.log("On change")
      setText(event.target.value)
   }
   const [text, setText] = useState('');
   return (
      <div>
         <div className="container">
            <h3>{props.heading} </h3>
            <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert toLowerCase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={copyText}> Copy Text</button>
         </div>
         <div className="container my-3">
            <h4> Youe text summary</h4>
            <p> {text.split(" ").length} Words and {text.length} characters</p>
            <p>  {0.008 * text.split(" ").length} Minutes Read</p>
            <p> Preview : {text}</p>
         </div>
      </div>


   )
}
