import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import { TheList } from "./TheList";
import { AllNotes } from "./AllNotes";
import { Done } from "./Don";
import { Notyet } from "./NotYet";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  let notesList;
  if (notes.length !== 0) {
    notesList = notes.map((note) => {
      return (
        <div className="thenote" key={note.id}>
          <p>{note.val}</p>
          <ul>
            <li>
              <DeleteIcon />
            </li>
            <li>
              <EditIcon />
            </li>
            <li>
              <DoneIcon />
            </li>
          </ul>
        </div>
      );
    });
  }

  function addNewNote() {
    setNotes([...notes, { id: Date.now(), val: inputValue }]);
    setInputValue("");
  }

  return (
    <div className="todolist">
      <h1>TodoList</h1>

      <ul className="navbar">
        <Link className="nav-link" to={"/lists/allnotes"}>
          <li>All notes</li>
        </Link>

        <Link className="nav-link" to={"/lists/done"}>
          <li>Done</li>
        </Link>

        <Link className="nav-link" to={"/lists/notyet"}>
          <li>Not yet</li>
        </Link>
      </ul>

      <Routes>
        <Route path="/lists" element={<TheList />}>
          <Route path="allnotes" element={<AllNotes />} />
          <Route path="done" element={<Done />} />
          <Route path="notyet" element={<Notyet />} />
        </Route>
      </Routes>

      <div>{notesList}</div>

      <div className="addFeature">
        <div className="addBtn" onClick={() => addNewNote()}>
          Add new one
        </div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}
