import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllTask from "./Components/AllTask"
import SingleTask from "./Components/SingleTask"
import TaskAddedPage from "./Components/TaskAddedPage"



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="allViewTask" element={<AllTask />} />
          <Route path="singletask" element={<SingleTask />} />
          <Route path="taskadd" element={<TaskAddedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
