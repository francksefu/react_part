import React from 'react';
import Reservations from '../components/boats/Reservations';
import '../styles/boats/boats.css';

function ReservationPage() {
  return (
    <div className="boats_list_page">
      <h1>Add reservation</h1>
      <Reservations />
    </div>
  );
}

export default ReservationPage;
