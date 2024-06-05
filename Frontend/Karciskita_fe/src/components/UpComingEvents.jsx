import React from 'react';
import Card from 'react-bootstrap/Card';
import { upComingEvents } from '../constants';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const UpComingEvents = () => {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
      {upComingEvents.map((item) => {
        return (
          <li key={item.id}>
            <Link to="/ticketinfo">
              <Card style={{ width: '18rem', height: '100%', borderColor: '#4f4cee', borderRadius: '20px', overflow: 'hidden' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#4f4cee' }}>Concert Music</p>

                  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ width: '2.5rem', textAlign: 'center', fontSize: '14px', fontWeight: 'border' }}>{item.date}</p>

                    <div>
                      <Card.Title style={{ fontSize: '14px' }}>{item.singer}</Card.Title>
                      <p style={{ fontSize: '13px' }}>
                        Rp. {item.minPrice} - {item.maxPrice}
                      </p>

                      <p style={{ fontSize: '13px', marginTop: '-7%' }}>
                        <CiLocationOn />
                        {item.location}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UpComingEvents;
