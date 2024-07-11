import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import BookingForm from './component/BookingForm';
import ConfirmationPopup from './component/ConfirmationPopup';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
        <ConfirmationPopup />
      </div>
    </Router>
  );
}

export default App;
