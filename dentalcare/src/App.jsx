import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact/Contact";

import Appointment from "./pages/Appointment/Appointment";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import PatientDashboard from "./pages/PatientDashboard/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

import NotFound from "./pages/NotFound/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>

          {/* ================= Public Layout ================= */}

          <Route element={<DefaultLayout />}>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/doctors" element={<Doctors />} />

            <Route path="/contact" element={<Contact />} />

            {/* Patient Only */}

            <Route
              path="/appointment"
              element={
                <ProtectedRoute allowedRole="patient">
                  <Appointment />
                </ProtectedRoute>
              }
            />

          </Route>

          {/* ================= Authentication ================= */}

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          {/* ================= Patient Dashboard ================= */}

          <Route
            path="/patient-dashboard"
            element={
              <ProtectedRoute allowedRole="patient">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />

          {/* ================= Admin Dashboard ================= */}

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* ================= 404 ================= */}

          <Route path="*" element={<NotFound />} />

        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;