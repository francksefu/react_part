import React, { useEffect } from 'react';
import {
  Container, Row, Col, Card, ListGroup,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyReservations } from '../../redux/slices/myReservationSlice';
import { fetchBoats } from '../../redux/slices/boatSlice';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.myReservations.reservations);
  const isLoadingReservations = useSelector((state) => state.myReservations.loading);
  const boats = useSelector((state) => state.boats.data);
  const isLoadingBoats = useSelector((state) => state.boats.loading);

  useEffect(() => {
    if (!boats.length && !isLoadingBoats) {
      dispatch(fetchBoats());
    }
  }, [dispatch, boats, isLoadingBoats]);

  useEffect(() => {
    dispatch(fetchMyReservations());
  }, [dispatch]);

  if (isLoadingReservations || isLoadingBoats) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        {reservations && reservations.length > 0 ? (
          reservations.map((reservation) => (
            <Col key={reservation.id} md={4} style={{ marginBottom: '20px' }}>
              <Card>
                <Card.Body>
                  <Card.Title>{`Reservation ID: ${reservation.id}`}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Date:</strong> {reservation.date}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>City:</strong> {reservation.city}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Boat Name:</strong>{' '}
                      {boats.map((boat) => (
                        <span key={boat.id}>
                          {boat.id === reservation.boat_id ? boat.name : null}
                        </span>
                      ))}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No reservations found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default MyReservations;
