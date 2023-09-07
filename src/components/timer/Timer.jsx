import React from 'react'
import styles from "./timer.module.scss"
import Countdown from 'react-countdown';
import Time from './Time';

const Timer = () => {



    const Completion = () => <span>You are good to go!</span>;



    const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state

			return <Completion />;
		} else {
			// Render a countdown
			return (
				<Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
			);
		}
	};
  return (
    <div>
  <Countdown date={Date.now() + 6739200000} renderer={renderer} />,
  
  </div>
  )
}

export default Timer