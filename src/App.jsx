import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import TaskList from "./components/TaskList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return unsubscribe
  }, [])
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
                <Route path="/tasklist" element={user ? <TaskList /> : <SignIn />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;