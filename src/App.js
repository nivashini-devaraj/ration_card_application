import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Help&Contact";
import About from "./pages/About";

import Apply from "./pages/Application";
import Status from "./pages/Status";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Address from "./pages/Address";
import Family from "./pages/Family";
import Upload from "./pages/Upload";
import Review from "./pages/Review";
import Download from "./pages/Download";
import Submitted from "./pages/Submitted";
import Acknowledge from "./pages/Acknowledgement";
import Edit from "./pages/Edit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/status" element={<Status />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/address" element={<Address />} />
          <Route path="/family" element={<Family />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/review" element={<Review />} />
          <Route path="/download" element={<Download />} />
          <Route path="/submitted" element={<Submitted />} />
          <Route path="/acknowledge" element={<Acknowledge />} />
          <Route path="/edit" element={<Edit />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
