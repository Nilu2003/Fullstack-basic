import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [Jokes,setJokes]=useState([]);

  useEffect(() => {
    axios.get('/api/jokes').then((response) => {setJokes(response.data)}).catch((error) => {console.log(error);})
  })

  return (
    <>
      <h1>welcome to frontend to coonect backend</h1>
      <p>jokes:{Jokes.length}</p>

      {
        Jokes.map((joke,index) => {
          return(
          <div key={joke.id}>
            <h3>{joke.tittle}</h3>
            <h2>{joke.content}</h2>
          </div>
        );
      })
      }


    </>
  )
}

export default App
