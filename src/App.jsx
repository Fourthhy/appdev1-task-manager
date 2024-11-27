import { useState } from 'react'
import ArchLogo from '/ArchivistLogo.png'
import TaskBox from './components/TaskBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-500 to-green-400 h-screen w-screen"> 
    <div class="bg-[#ffffff5d] rounded-[10px] border-[1px] border-[#ffffff75] ">
      <div class="h-[97vh] w-[97vw] relative overflow-y-auto overflow-x-hidden ">
        <div class="grid grid-cols-[21vw,75vw]">
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
      </div>
    </div>


    </div>
  )
}

export default App
