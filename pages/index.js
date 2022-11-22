import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import { prisma } from '../db';

export default function Home(props) {
  return <MeetupList meetups={props.meetups} />
}

export async function getServerSideProps(context) {
  const meetups = await prisma.meetup.findMany({
    orderBy: [
      {
        id: 'desc',
      }
    ]
  });

  return {
    props: {
      meetups: meetups
    }
  }
}