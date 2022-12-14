import './App.css';
import CreateOrg from './CreateOrg';
import { Routes, Route } from 'react-router-dom';
import Report from './Report';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateOrg />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  )
}

export default App;
