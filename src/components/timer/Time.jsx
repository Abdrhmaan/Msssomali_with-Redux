
import React from 'react'
import styles from "./timer.module.scss"

const Time = ({days,hours,minutes,seconds}) => {
  return (
    <div className={styles.countdown}>
    <h1>Voting Ends iN</h1>
    <div className={styles.time}>
        <div className={styles.digit_txet}>
            <span className={styles.digit}>{days}</span>
            <span className={styles.text}>days</span>
            
        </div>
   


        <div className={styles.digit_txet}>
            <span className={styles.digit}>{hours}</span>
            <span className={styles.text}>HOURS</span>
            
        </div>

        <div className={styles.digit_txet}>
            <span className={styles.digit}>{minutes}</span>
            <span className={styles.text}>minutes</span>
            
        </div>
 
        <div className={styles.digit_txet}>
            <span className={styles.digit}>{seconds}</span>
            <span className={styles.text}>second</span>
            
        </div>

   </div>
    
    
    
    </div>
  
  )
}

export default Time