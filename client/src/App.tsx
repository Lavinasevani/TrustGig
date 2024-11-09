import { Route, Routes } from "react-router-dom";
import LandingPage1 from "./pages/Landing1";
import GigWorkerDashboard from "./pages/GigDashboard";
import ClientDashboard from "./pages/ClinetDashboard";
import JobExplore from "./pages/Explore";
import { GigWorkerProfile } from "./pages/GigWorkProfile";
import JobCreate from "./pages/Form";
import JobPreview from "./pages/JobPreview";
import AuthPage from "./pages/Login";
import { ClientProfile } from "./pages/ClientProfile";

const App = () => {
  return (
    <>
    {/* <div className='bg-[#0f0f28]'> */}
      <div className='text-black'>

      {/* <Navbar /> */}
      <Routes> 
        <Route path="/" element={<LandingPage1 />} />
        <Route path="/dashboard/gig/:id" element={<GigWorkerDashboard />} />
        <Route path="/dashboard/client/:id" element={<ClientDashboard />} />
        <Route path="/explore" element={<JobExplore />} />
        <Route path="/profile/gig/:id" element={<GigWorkerProfile />} />
        <Route path="/preview/:id" element={<JobPreview />} />
        <Route path="/profile/client/:id" element={<ClientProfile />} />
        <Route path="/login" element={<AuthPage />} />
        
        {/* <Route path="/settings" element={<SettingsPage />} /> */}
        <Route path="/post-jobs/:id" element={<JobCreate />} />
        {/* <Route path="/certificate-submission" element={<CertificateSubmissionComponent />} /> */}
        {/* <Route path="/register" element={<RegisterationPage />} /> */}
      </Routes>
      
    </div>
    </>
  );
}

export default App;