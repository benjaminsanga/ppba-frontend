import './App.css';
import CreateOrg from './CreateOrg';
import { Routes, Route } from 'react-router-dom';
import Report from './Report';
import Home from './dashboard/pages/Dashboard/Home';
import { HeatMap, Privacypolicy, Profile, Reports, Services, SharedLayout } from './dashboard/pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateOrg />} />
      <Route path="/report" element={<Report />} />
      <Route path="/dashboard" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="reports" element={<Reports/>}/>
        <Route path="heatmap" element={<HeatMap/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="privacy" element={<Privacypolicy/>}/>
      </Route>
    </Routes>
  )
}

export default App;
