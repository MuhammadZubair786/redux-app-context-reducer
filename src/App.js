import './App.css';
import React, { useContext } from 'react'
import Child from './Child'
import { GlobalProvider } from './Store/GlobalState'
import User_Render from './User_Render'
function App() {


  return (
    <GlobalProvider >
      <div className="App">

        <Child />
        <User_Render/>

      </div>
    </GlobalProvider >
  );
}

export default App;
