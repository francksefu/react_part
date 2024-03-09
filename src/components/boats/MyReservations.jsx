import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplideCarousel from '../carousel/SplideCarousel';
import { fetchMyReservations } from '../../redux/slices/myReservationSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const { reservations, loading, error } = useSelector((state) => state.myReservations);

  useEffect(() => {
    dispatch(fetchMyReservations());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (!reservations || !Array.isArray(reservations) || reservations.length === 0) {
    return <div>No reservations found.</div>;
  }

  console.log('Reservations:', reservations);

  return (
    <div>
      <h2>My Reservations</h2>
      {reservations.map((reservation) => (
        <SplideCarousel key={reservation.id} boats={[reservation]} />
      ))}
    </div>
  );
};

export default MyReservations;
