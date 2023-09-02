import React, { useState } from 'react'
import styles from "./modale.module.scss"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux'
import Modal from 'react-modal';
import { handlmodal } from '../../Feutares/model/Modelslice';
import { increaseVont ,decreasVont, addvotedtocompatetar, reseatestte} from '../../Feutares/compatetar/CompatetarSlice';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
const VoteModel = () => {
    const dispach  = useDispatch()
	
    

    const {isOpen} = useSelector((state) => state.model)
	const {currentCompetitor , voteCount
	} = useSelector((state) => state.competitor)
    console.log(currentCompetitor)
      


	if ( !currentCompetitor) return 
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
 
  }

  function handlesubmit(e) {
	e.preventDefault()

	dispach(addvotedtocompatetar(currentCompetitor.Id))
	dispach(reseatestte())
	dispach(handlmodal())
  }



  const backgroundStyle = {
    width: "100%",
    // height: "500px",
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${currentCompetitor.Photo
	})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

    return (
        
        <div>
            
         /// <button onClick={()=> dispach(handlmodal())}>Open Modal</button>







          
        



                    <Modal
				  isOpen={isOpen}
					onRequestClose={()=> dispach(handlmodal())}
					style={customStyles}
					className={styles.modal}
					overlayClassName={styles.overlay}>
					<div className={styles.modal_container}>
						<div className={styles.competitor_info}>





                        <div style={backgroundStyle}></div>
							<div className={styles.bio}>
								<div className={styles.divider}>
									//<label>name</label>
									<span>
									<span>
										{currentCompetitor.FirstName +
											" " +
											currentCompetitor.MiddleName +
											" " +
											currentCompetitor.LastName}
									</span>
									</span>
								</div>

                                <div className={styles.divider}>
									<label>state</label>
									<span>
									<span> {currentCompetitor.RepresentingState}</span>
									</span>
								</div>

                                <div className={styles.divider}>
									<label>backround</label>
									<span>
									{currentCompetitor && currentCompetitor.PersonalBackground}
									</span>
								</div>
								
                              




                       

                        </div>
                    </div>




                    <div className={styles.vote_container}>
							<div className={styles.vote_count}>
								<span>Purchase Votes</span>
								<div className={styles.vote_controls}>
									<button onClick={()=> dispach(increaseVont())}> 
										<AiOutlineMinus className={styles.icon} />
									</button>

									<span>{voteCount}</span>
									<button onClick={()=> dispach(decreasVont())}>
										<AiOutlinePlus onClick={()=> increaseVont()} className={styles.icon} />
									</button>
								</div>
							</div>
                            </div>

                            <form onSubmit={handlesubmit}> 
								<span>Pay with Evc , Sahal or Zaad</span>
								<input
									placeholder="enter your phone number start with"
									type="number"
									className={styles.form_control}
									
									
								/>
								<button type="submit">Vote Now</button>
							</form>
                </div>
                


            
          
            
          </Modal>
        </div>
      );
}

export default VoteModel