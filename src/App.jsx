import { useState } from 'react'
import './App.css'
import { Tags } from './components/Tags'

function App() {
  const [skills, setSkills] = useState([])
  const [favorites, setFavorites] = useState([])

  return (
    <div className='App'>
      <Tags tags={skills} setTags={setSkills}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Tags>
    </div>
  )
}

export default App
