import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { DEL_POST, ADD_POST } from './store/postReducer'
import { getAllPosts } from './store/postReducer'
import './App.css'

function App() {
 const dispatch = useDispatch()
 const posts = useSelector(state => state.post.posts)
 const [inputaddPost, setInputAddPost] = useState("")


 const addPost = () =>{
  dispatch({
    type: ADD_POST,
    payload: [
      ...posts,
        {
            id: posts.length + 1,
            title: inputaddPost,
        },
    ],
});
setInputAddPost("");
 }

 const delPost = (id) => {
  dispatch({
      type: DEL_POST,
      payload: [...posts].filter((post) => post.id !== id),
  });
};

const getPost = () => {
  return function(dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => dispatch(getAllPosts(response.data)))
  }
}

  return(
  <>
    <div className='inputPost'>
      <input onChange={(event) => setInputAddPost(event.target.value)} value={inputaddPost} placeholder='Введите текст' />
      <button onClick={addPost}>Добавить пост</button>
      <button className='get-button' onClick={() => dispatch(getPost())}>Получить посты</button>
    </div>
    <div className="post">
    {posts.map(post => (
        <div className='post-title' key={post.id}>
            <p>{post.id}.{post.title}</p>
            <button onClick={() => delPost(post.id)}>Удалить</button>
        </div>
    ))}
    </div>
  </>
  )
  
}

export default App


