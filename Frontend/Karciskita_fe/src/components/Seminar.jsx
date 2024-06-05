import React from 'react';
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from 'react-icons/ci';
import img from '../assets/img/seminar.png';

const Seminar = () => {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
      {Array.from({ length: 4 }).map((item) => {
        return (
          <li key={item}>
            <Card style={{ width: '18rem', height: '100%', borderColor: '#4f4cee', borderRadius: '20px', overflow: 'hidden' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#4f4cee' }}>Seminar</p>

                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ width: '3rem', textAlign: 'center', fontSize: '14px', fontWeight: 'border' }}>March 31</p>

                  <div>
                    <Card.Title style={{ fontSize: '14px' }}>Academi Career Talk </Card.Title>
                    <p style={{ fontSize: '13px' }}>Free Register</p>
                    <p style={{ fontSize: '13px', marginTop: '-7%' }}>
                      <CiLocationOn />
                      Zoom Meeting
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default Seminar;
