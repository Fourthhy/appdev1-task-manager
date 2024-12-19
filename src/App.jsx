import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import TaskList from "./components/TaskList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/tasklist" element={<TaskList />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;