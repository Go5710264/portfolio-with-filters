import React from 'react';
import './App.css'
import Portfolio from './components/Portfolio';
import ProjectList from './components/ProjectList';

function App() {
  return ( // Передача объекта state (list) в class-based компонент (Portfolio)
    <div className='App'>
      <Portfolio list={ProjectList}/>  
    </div>
  )
}

export default App
