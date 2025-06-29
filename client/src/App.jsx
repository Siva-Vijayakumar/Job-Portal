import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import Applications from './pages/Applications.jsx'
import Footer from './components/Footer.jsx'
import RecruiterLogin from './components/RecruiterLogin.jsx'
import { AppContext } from './context/AppContext.jsx'
import ManageJobs from './pages/ManageJobs.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddJob from './pages/AddJob.jsx'
import ViewApplication from './pages/ViewApplication.jsx'
import 'quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const {showRecruiterLogin, companyToken} = useContext(AppContext);
   
  return (
    <div>
     { showRecruiterLogin && <RecruiterLogin />}
     <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/dashboard' element={<Dashboard />}>
        {companyToken ? <>
        <Route path='add-job' element={<AddJob />}/>
          <Route path='manage-job' element={<ManageJobs />} />
          <Route path='view-applications' element={<ViewApplication />}/>
        </> : null
        }
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
