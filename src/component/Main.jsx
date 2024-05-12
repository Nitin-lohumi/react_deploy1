import { useState } from "react";
import Button from "./Button";
import Rules from "./Rules";
function Main(){
  const [score,setScore]=useState(0);
  const[currentDice,SetCurrentDice]=useState(1);
  const [selectednumber,setSelectNumber]=useState();
  const [error,setError] =useState('');
  const[reset,setReset]=useState(false);
  const [ShowRule, SetShowRule]= useState(false);
  const genrateNumber =  (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  };
  const roleDice=()=>{
    if(!selectednumber) {
      setError(alert("please select any number "));
      return 
    }
   setError();
   const randomNumber= genrateNumber(1,7);
   SetCurrentDice((prev)=>randomNumber);
   if(selectednumber===randomNumber){
      setScore(prev=> prev+randomNumber);
   }
   else{
    setScore(prev=>prev-2)
   }
   if(score>29){
    alert("you win the game");
    ScoreReset();
   }
   else if(score<-40){
    alert("you lose the game");
    ScoreReset();
   }
  }
  const ScoreReset=()=>{
    setReset(()=>{
      setScore(0);
      SetCurrentDice(1);
      setSelectNumber();
    })
  }
    return (
     <>
       <div className="note_div">
       < h2 className="note1"><b>Note</b> - you can win when points will be greater then 30</h2> 
        <h2 className="note2">you will lose the game when points will be greater then -40. </h2>
       </div>
      <div className="Main_1">
        <div className="score_div">
              <h1>{score}</h1>
            <h2>score</h2>
        </div>
        <div className="Main1_2">

         <Button selectednumber={selectednumber} 
                   setSelectNumber={setSelectNumber}
         />
          </div>
      </div>
      <div className="Main_2">
       <img  onClick={roleDice}
       src={`./src/dice_${currentDice}.png`} alt="dice" />
            <h2>click to dice</h2>
          <button onClick={ScoreReset}>reset</button>
          <button onClick={()=>SetShowRule((prev)=>!prev)}>{ShowRule?"scroll Down⬇️":" Rules"}</button>
      </div>
      {ShowRule && <Rules/>}
     </>
    )
}
export default Main;