import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import TaskList from "./components/TaskList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[#000010] flex justify-center items-center"> {/* MAIN CONTAINER */}
        <div className="bg-[#ffffff20] rounded-[10px] border-[1px] border-[#ffffff75] ">
          <div className="h-[97vh] w-[98vw] overflow-y-auto overflow-x-hidden ">
            <Router>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/tasklist" element={<TaskList />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;