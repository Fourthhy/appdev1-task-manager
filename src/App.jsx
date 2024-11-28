import { useState } from 'react'
import ArchLogo from '/ArchivistLogoEdited-.png'
import TaskBox from './components/TaskBox'
import AddTask from './components/AddTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-500 to-green-400 h-screen w-screen">
      <div class="bg-[#ffffff5d] rounded-[10px] border-[1px] border-[#ffffff75] ">
        <div class="h-[97vh] w-[97vw] relative overflow-y-auto overflow-x-hidden ">
          <div class="flex justify-start items-center mt-[10px] absolute"> {/* NAV BAR */}
            <img src={ArchLogo} class="w-[40px] h-[40px] ml-[10px]"/>
          </div>
          <div class="grid grid-cols-[21vw,75vw]">
            <div>
              <div class="h-[500px] flex justify-center items-center sticky top-0">
                <AddTask />
              </div>
            </div>


            <div class="grid grid-cols-[repeat(3,25vw)] grid-rows-auto">
              <TaskBox />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
