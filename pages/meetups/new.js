import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

export default function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredData) => {
    try {
      const res = await fetch('/api/meetups', {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(enteredData),
      });
  
      if (res.ok) {
        const meetupId = await res.json();
        router.push(`/meetups/${meetupId}`);
      }

    } catch (error) {
      console.log(error);
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
