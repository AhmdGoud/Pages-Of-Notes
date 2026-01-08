import { useState, useRef } from "react";

export let increaseNotesNumberRef ; 
export let decreaseNotesNumberRef ;

export default function Title() {

  // useState
  const [numberOfNotes, setNumberOfNotes]  = useState(0)

  // useRef
  increaseNotesNumberRef = useRef(null)
  decreaseNotesNumberRef = useRef(null)

  // function to update number of notes on click
  const increaseNumberOfNotes = function(){
    setNumberOfNotes(n => n + 1)
  }
  const decreaseNumberOfNotes = function(){
    setNumberOfNotes(n => n - 1)
  }

  // using useRef to link the function with the variable that will be exported
  increaseNotesNumberRef = increaseNumberOfNotes
  decreaseNotesNumberRef = decreaseNumberOfNotes


  return (
    <div>
      <h1>All Notes</h1>
      <p className="numberOfNotes">{numberOfNotes}</p>
    </div>
    
  );
}
