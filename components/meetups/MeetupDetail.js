import React from 'react';
import styles from './MeetupDetail.module.css';
import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function MeetupDetail({meetup}) {
  return (
    <Card className={styles.details}>
      { meetup ? ( 
          <>
            <img
              className={styles.coverImage}
              src={meetup.image}
              alt={meetup.title}
            />
            <div className={styles.info}>
              <h1>{meetup.title}</h1>
              <address>{meetup.address}</address>
              <p>{meetup.description}</p>
            </div>
          </>
        ): (
          <>
            <LoadingSpinner />
          </>
        )
      }
    </Card>
  );
}
