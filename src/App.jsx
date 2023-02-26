import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleTaskPage from "./Components/SingleTaskPage"
import TaskAddedPage from "./Components/TaskAddedPage"
import ViewAllTaskPage from "./Components/ViewAllTaskPage"


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="viewtaskpage" element={<ViewAllTaskPage />} />
          <Route path="singletask" element={<SingleTaskPage />} />
          <Route path="taskadded" element={<TaskAddedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
