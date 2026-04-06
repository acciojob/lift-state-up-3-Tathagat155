
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div className="parent">
         <h1>Parent Component</h1>
      <ChildComponent1 setOption={setOption }/>
      <ChildComponent2 setOption={setOption}/>
      <p>Selected Option:{option}</p>
    </div>
  )
}

export default App
