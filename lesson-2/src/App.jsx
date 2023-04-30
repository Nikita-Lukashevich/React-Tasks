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
  const [inputSearch, setInputSearch] = useState('');
  const [elements, setelements] = useState([]);
  const [elementsSearch, setelementsSearch] = useState([]);

  const reset = () =>{
    setInputOne('');
    setInputTwo('');
  }

  const addToDo = () =>{
    setelements(prevState => ([{
      task: inputTask,
      detail: inputDecoding
    }, ...prevState]))
    setInputTask('');
    setInputDecoding('');
  }

  const searchTodo = (event) =>{ 
    setInputSearch(event.target.value)

    if(elements.length) {
      setelementsSearch(elements.filter(element => (Object.values(element)[0].toLowerCase()).includes(event.target.value) || (Object.values(element)[1].toLowerCase()).includes(event.target.value)))
    }
  }

  return (
    <>
     <Header/>
     <Paragraf/>
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
      <Input 
      value={inputSearch} 
      onChange={searchTodo} 
      placeholder='  Поиск'/>
     </div>
     <BtnTodo onClick = {addToDo}/>
      {
        inputSearch ?  elementsSearch.map((element) => (
          <div key={element.task} className='task'>
          <ToDo>
            {element.task}
            {` : `}
            {element.detail}
          </ToDo>
          </div>
        )) : elements.map((element) => (
          <div key={element.task} className='task'>
          <ToDo>
            {element.task}
            {` : `}
            {element.detail}
          </ToDo>
          </div>
        ))
      }
     </div>
    </>
  )
}

export default App
