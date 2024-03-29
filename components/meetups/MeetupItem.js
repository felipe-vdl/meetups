import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Image from 'next/image'

function MeetupItem(props) {
  const router = useRouter();

  const showDetailsHandler = evt => {
    router.push(`/meetups/${props.id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image loader={() => props.image} src={props.image} alt={props.title} layout="fill" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          {/* <Link href={`/meetups/${props.id}`}>Show Details</Link> */}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
