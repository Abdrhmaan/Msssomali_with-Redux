import React from 'react'
import styles from "./timer.module.scss"

const Timer = () => {
  return (
    <div className={styles.countdown}>
        <h1>Voting Ends iN</h1>
        <div className={styles.time}>
            <div className={styles.digit_txet}>
                <span className={styles.digit}>08</span>
                <span className={styles.text}>days</span>
                
            </div>
       

   
            <div className={styles.digit_txet}>
                <span className={styles.digit}>08</span>
                <span className={styles.text}>hours</span>
                
            </div>
   
            <div className={styles.digit_txet}>
                <span className={styles.digit}>08</span>
                <span className={styles.text}>minutes</span>
                
            </div>
     
            <div className={styles.digit_txet}>
                <span className={styles.digit}>08</span>
                <span className={styles.text}>second</span>
                
            </div>
  
       </div>
        
        
        
        </div>
  )
}

export default Timer