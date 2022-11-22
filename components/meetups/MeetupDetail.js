import React from 'react';
import styles from './MeetupDetail.module.css';
import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import Image from 'next/image';

export default function MeetupDetail({ meetup }) {
  return (
    <Card className={styles.details}>
      {meetup ? (
        <>
          <div className={styles.imageContainer}>
            <Image
              loader={() => meetup.image}
              src={meetup.image}
              alt={meetup.title}
              layout="fill"
            />
          </div>
          <div className={styles.info}>
            <h1>{meetup.title}</h1>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
          </div>
        </>
      ) : (
        <>
          <LoadingSpinner />
        </>
      )
      }
    </Card>
  );
}
