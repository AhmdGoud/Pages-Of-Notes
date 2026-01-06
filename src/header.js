import { useState, useRef } from "react";

export let funckToUpdateNotesNumber ;

export default function Title() {

  // useState
  const [numberOfNotes, setNumberOfNotes]  =useState(0)

  // useRef
  let funckNotesNumberRef = useRef(null)

  // function to update number of notes on click
  const updateNumberOfNotes = function(){
    setNumberOfNotes(n => n + 1)
  }

  // using useRef to link the function with the variable that will be exported
  funckNotesNumberRef.current = updateNumberOfNotes

  funckToUpdateNotesNumber = () =>{
    funckNotesNumberRef.current?.()
  }

  return (
    <div>
      <h1>All Notes</h1>
      <p className="numberOfNotes">{numberOfNotes}</p>
    </div>
    
  );
}
