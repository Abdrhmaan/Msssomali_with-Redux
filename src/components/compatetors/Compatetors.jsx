import React from 'react'
import styles from "./tcompatetar.module.scss"
import comaptertar from "../competitors.json"
 import Compatetar from '../Compatetar'
 import { useSelector,useDispatch } from 'react-redux'


const Compatetors = () => {
  const {competitors
  } = useSelector((store) => store.competitor
	)
	console.log(competitors)
  return (
    <div className={styles.container}>
        <div className={styles.Compatetors_header}>
            <span>Mss somali</span>
            <p>KANI WAAA CODAYNA mss somali soomali adigo ku xlanay quruxda iyo wajoga </p>
        </div>
       
  <div className={styles.competitors}>

    {
        competitors.map((compatr) => (
          
            <Compatetar compatr={compatr} />
         
        ))
    }

  </div>


        </div>
  )
}

export default Compatetors