import { useState } from 'react'
import ArchLogo from '/ArchivistLogo.png'
//class="bg-gradient-to-br from-purple-500 to-green-400 h-screen w-screen"
import TaskBox from './components/TaskBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="grid grid-cols-[23vw,75vw]">
        Input Component
        <div class="grid grid-cols-[repeat(3,25vw)] grid-rows-auto">
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
        </div>

      </div>
    </>
  )
}

export default App
