import React from 'react'
import styles from "./compatetar.module.scss"
import { AiTwotoneUsb } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux'
import { handlmodal } from '.././Feutares/model/Modelslice';
import { setCurrentCompetitor } from '../Feutares/compatetar/CompatetarSlice';



const Compatetar = ({compatr}) => {

	


	function vornow() {
		dispach(handlmodal())
		dispach(setCurrentCompetitor(compatr))
		console.log(compatr)
		
	}
	const dispach  = useDispatch()
	
	
    const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${compatr.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
 
    return (
		<div className={styles.competitor} style={backgroundStyle}>
			<div className={styles.info}>
				<span className={styles.name}>
					{compatr.FirstName + " " + compatr.LastName}
				</span>
				<span className={styles.state}>{compatr.RepresentingState}</span>
				<span className={styles.vote_count}>
				
				 {compatr.NumberofVotes}
				</span>
			</div>

			<div className={styles.vote} >
			<AiTwotoneUsb onClick={vornow} />


			</div>

			{/* <img src={competitor.Photo} alt={competitor.FirstName} /> */}
		</div>
	);
}

export default Compatetar