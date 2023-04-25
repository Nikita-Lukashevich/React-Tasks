import { useState } from 'react'
import {Header} from './components/Header/Header'
import {Section} from './components/Section/Section'
import {Input} from './components/Input/Input'
import {Paragraf} from './components/Paragraf/Paragraf'
import {Btn} from './components/Btn/Btn'
import {BtnTodo} from './components/BtnTodo/BtnTodo'
import {ToDo} from './components/ToDo/ToDo'
import './App.css'

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputTask, setInputTask] = useState('');
  const [inputDecoding, setInputDecoding] = useState('');
  const [elements, setelements] = useState([]);

  const reset = () =>{
    setInputOne('');
    setInputTwo('');
  }

  const addToDo = () =>{
    setelements(prevState => ([`${inputTask} : ${inputDecoding}`,...prevState]))
    setInputTask('');
    setInputDecoding('');
  }

  return (
    <>
     <Header/>
     <Paragraf>
    </Paragraf>
     <Section/>
     <div className='inVal'>
     <Input value={inputOne} 
      onChange={(event) => setInputOne(event.target.value)} placeholder='Name'/>
     <Input value={inputTwo} 
      onChange={(event) => setInputTwo(event.target.value)} placeholder='LastName'/>
     </div>
     <Btn onClick = {reset}/>
     <div className='todo'>
     <div className='inValue'>
     <Input value={inputTask} 
      onChange={(event) => setInputTask(event.target.value)} placeholder='  Задача'/>
     <Input value={inputDecoding} 
      onChange={(event) => setInputDecoding(event.target.value)} placeholder='  Расшифровка задачи'/>
     </div>
     <BtnTodo onClick = {addToDo}/>
      {
        elements.map((text) => (
          <div className='task'>
          <ToDo key={text}>
            {text}
          </ToDo>
          </div>
        ))
      }
     </div>
    </>
  )
}

export default App
