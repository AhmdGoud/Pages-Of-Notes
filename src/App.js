// import logo from './logo.svg';
import './App.css';

import Title from './header'
import NavBar from './navbar'

function App() {
  return (
    <div className="App" style={{
      width: '600px',
      margin: 'auto'
    }}>
      <Title />
      <NavBar />
    </div>
  );
}

export default App;
