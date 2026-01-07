// import logo from './logo.svg';
import './App.css';

import Title from './header'
import NavBar from './navbar'
import TheNotes from './TheNotes'



function App() {

  return (
    <div className="App">

      <Title />
      <NavBar />
      <TheNotes />

      
    </div>
  );
}

export default App;

// Important Note => // React only re-renders when state or props change

// The Problem:
// affecting is a regular variable, not React state
// Changing it with toggleAffect() doesn't notify React
// React only re-renders when state or props change
// The style object is created once with the initial affecting value (false)

// The syntax forfunckRef.current?.() is using optional chaining with function calls.