import { Route, Routes } from "react-router";
import DetailedList from "./pages/DetailedList/DetailedList";
import JobList from "./pages/JobList/JobList";

function App() {
  return (
    <Routes>
      <Route path="/job_page" element={<JobList />} />
      <Route path="/job_page/:id" element={<DetailedList />} />

      <Route path="*" element={<JobList />} />
    </Routes>
  );
}

export default App;
