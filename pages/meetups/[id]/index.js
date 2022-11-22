import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import MeetupDetail from "../../../components/meetups/MeetupDetail";

import { prisma } from '../../../db';

export default function MeetupShowPage(props) {
  return <MeetupDetail meetup={props.meetup} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const meetup = await prisma.meetup.findUnique({
    where: {
      id: parseInt(id),
    }
  });

  return {
    props: {
      meetup: meetup
    }
  }
}