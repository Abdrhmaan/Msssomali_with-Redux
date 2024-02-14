
import styles from "./App.scss";
import VoteModel from "./components/Model/VoteModel";
import Timerr from "./components/Timerr ";
import Compatetors from "./components/compatetors/Compatetors";
 import Header from "./components/header/Header";


import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className={styles.xaan}>

      <Header/>
      <Timer/>
      <Compatetors/>
      <VoteModel/>
      
   
    
    </div>
  );
}

export default App;
