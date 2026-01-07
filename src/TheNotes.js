import { useState } from 'react';

import { increaseNotesNumber } from './header';
import { decreaseNotesNumber } from './header';

export default function TheNotes(){

    // useState
    const [addNewNote, setAddNewNote] = useState([])

    // function to handle click new note
    function handleCreateNewNote(){
        setAddNewNote([...addNewNote, {id: Date.now()}]); // we should store data in the state not JSX

        increaseNotesNumber();
        decreaseNotesNumber();
    }

    const theNotes = addNewNote.map((note) =>{
        return <NewNote ID={note.id} key={note.id} deleteNote={() =>handleDeleteNote(note.id)}/>
    })

    // function to handle delete note
    function handleDeleteNote(Id){
        const arrToHandleState = [...addNewNote];
        const filteredArray = arrToHandleState.filter(note => note.id !== Id) // filter returns a new arr

        setAddNewNote(filteredArray)
    }

    return(
        <div className='newNotePage'>

            {theNotes}

            <div className='newNoteBtn' onClick={handleCreateNewNote}>New Note</div>
        </div>
    )
}

export function NewNote({deleteNote, ID}){
    return(
        <div>
            {/* key is ONLY for React lists — never put it on a button. */}
            new note is created {ID}

            <button style={{marginLeft: '10px'}} onClick={() => deleteNote(ID)}>delete</button>
        </div>
    )
}



// useEffect to handle false state
    // useEffect(() =>{
    //     let againToFalse;

    //     if (addNewNote){
    //         againToFalse = setTimeout(() =>{
    //             setAddNewNote(false)
    //         }, 1000)
    //     }

    //     return () => clearTimeout(againToFalse)
    // }, [addNewNote])