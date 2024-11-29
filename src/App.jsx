import { useState } from 'react'
import ArchLogo from '/ArchivistLogoEdited-.png'
import TaskLists from './components/TaskLists'
import AddTask from './components/AddTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-500 to-green-400 h-screen w-screen">

      <div className="bg-[#ffffff5d] rounded-[10px] border-[1px] border-[#ffffff75] ">

        <div className="h-[97vh] w-[97vw] relative overflow-y-auto overflow-x-hidden ">

          <div className="flex justify-start items-center mt-[10px]"> {/* NAV BAR */}

            <img src={ArchLogo} className="w-[40px] h-[40px] ml-[10px]" />
          </div>

          <div className="grid grid-cols-[21vw,75vw]">
            <div>
              <div className="h-[500px] flex justify-center items-center sticky top-0">
                 <AddTask />
               </div>
            </div>
            <div>
              <TaskLists />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
