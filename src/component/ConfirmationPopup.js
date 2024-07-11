import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { sendCalendarInvite } from '../utils';
import './ConfirmationPopup.css';

function ConfirmationPopup() {
  const booking = useSelector(state => state.booking);

  React.useEffect(() => {
    if (booking) {
      sendCalendarInvite(booking);
    }
  }, [booking]);

  if (!booking) return null;

  return (
    <motion.div className="confirmation-popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking {booking.horse}.</p>
      <button onClick={() => window.location.reload()}>Close</button>
    </motion.div>
  );
}

export default ConfirmationPopup;