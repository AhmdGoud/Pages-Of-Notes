import { useState } from 'react';

import { increaseNotesNumberRef } from './header';
import { decreaseNotesNumberRef } from './header';

export default function TheNotes(){

    // useState
    const [addNewNote, setAddNewNote] = useState([])
    const [showNotePage, setShowNotePage] = useState(false)
    const [noteInputValue, setNoteInputValue] = useState('')

    // function to handle click new note
    function CreateNewNote(){
        setAddNewNote([...addNewNote, {id: Date.now(), value: noteInputValue}]); // we should store data in the state not JSX

        increaseNotesNumberRef();
        setShowNotePage(false)
        setNoteInputValue('')
    }

    const theNotes = addNewNote.map((note) =>{
        return <NewNote 
            ID= {note.id}
            key= {note.id}
            deleteNote= {() =>DeleteNote(note.id)}
            noteValue= {note.value}
        />
    })

    // function to handle delete note
    function DeleteNote(Id){
        const arrToHandleState = [...addNewNote];
        const filteredArray = arrToHandleState.filter(note => note.id !== Id) // filter returns a new arr

        setAddNewNote(filteredArray)
        decreaseNotesNumberRef();
    }

    return(
        <div className='theNotePage'>

            {theNotes}

            <div className='notePage' style={{display: showNotePage? 'block' : 'none'}}>

                <textarea className='noteTextArea' value={noteInputValue} onChange={(e) =>{
                    setNoteInputValue(e.target.value)
                }}></textarea>

                <div className='notePageBtn' onClick={CreateNewNote}>
                    Craete Note
                </div>

            </div>

            <div className='newNoteBtn' onClick={() => setShowNotePage(true)}>New Note</div>
        </div>
    )
}

export function NewNote({deleteNote, ID, noteValue}){
    return(
        <div>
            {/* key is ONLY for React lists — never put it on a button. */}
            {noteValue}

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