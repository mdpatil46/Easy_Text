import React, { useState } from 'react'


export default function TextForm(prop) {
  function Myupclick () {
    // console.log("Uppercase was click" + Text)
    let newtext = Text.toUpperCase();
    setText(newtext)
  }

  function Myloclick(event) {
    // console.log("Uppercase was click" + Text)
    let newtext = Text.toLowerCase();
    setText(newtext);
  }

  function MyClearclick(event) {
    // console.log("Uppercase was click" + Text)
    let newtext = "";
    setText(newtext);
  }
  function MyclickOnchange(event)  {
    console.log("clickOn change")
    setText(event.target.value)
  }

  function MyRemoveclick() {
    let newText = Text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const [Text, setText] = useState('');
  // setText("Hello");

  return (
    <>
    <div className="container"></div>
      <h1>{prop.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={MyclickOnchange} id="My Text Box" rows="3"></textarea><br />
        <button className="btn btn-primary mx-2" onClick={Myupclick}>click TO Convert Uppercase </button>
        <button className="btn btn-primary mx-2" onClick={Myloclick}>click TO Convert lowercase </button>
        <button className="btn btn-primary mx-2" onClick={MyRemoveclick}>Remove Extra Spaces </button>
        <button className="btn btn-primary mx-2" onClick={MyClearclick}>clear</button>

        

      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").length} Word {Text.length} Caracters</p>
        <h4>Preview</h4>
        <p>{Text}</p>
      </div>
    
    </>
  )
}
