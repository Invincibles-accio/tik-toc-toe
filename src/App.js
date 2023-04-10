import { useState } from "react";
import Icon from "./Components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "./App.css";

const tikArray = new Array(9).fill("")

const App = () => {
      // ["cross" , "circle" , "" , "" , "" , "" , "" , "" , ""]
     const [isCross , setIsCross] = useState(true)
     const [winMessage , setWinMessage] = useState("")


     //playAgain

     function playAgain(){
          tikArray.fill("")
          setIsCross(true)
          setWinMessage("")
     }


     // find winner:

     function findWinner(){
          //row1: 0,1,2
          if(tikArray[0] == tikArray[1] && tikArray[0] == tikArray[2]  && tikArray[0] != ""){
                setWinMessage(`winner is ${tikArray[0]}`)
          }
          //row2: 3,4,5
          else if(tikArray[3] == tikArray[4] && tikArray[3] == tikArray[5]  && tikArray[3] != ""){
                setWinMessage(`winner is ${tikArray[3]}`)
          }
          //row3: 6,7,8
          else if(tikArray[6] == tikArray[7] && tikArray[6] == tikArray[8]  && tikArray[6] != ""){
                setWinMessage(`winner is ${tikArray[6]}`)
          }

          // col1: `0,3,6`
          else if(tikArray[0] == tikArray[3] && tikArray[0] == tikArray[6]  && tikArray[0] != ""){
                setWinMessage(`winner is ${tikArray[0]}`)
          }
          // col2: `1,4,7`
          else if(tikArray[1] == tikArray[4] && tikArray[1] == tikArray[7]  && tikArray[1] != ""){
                setWinMessage(`winner is ${tikArray[1]}`)
          }
          // col3: `2,5,8`  
          else if(tikArray[2] == tikArray[5] && tikArray[2] == tikArray[8]  && tikArray[2] != ""){
                setWinMessage(`winner is ${tikArray[2]}`)
          }
          // diagonal1: `0,4,8`
          else if(tikArray[0] == tikArray[4] && tikArray[0] == tikArray[8]  && tikArray[0] != ""){
                setWinMessage(`winner is ${tikArray[0]}`)
          }
          // diagonal2: `2,4,6`
          else if(tikArray[2] == tikArray[4] && tikArray[2] == tikArray[6]  && tikArray[2] != ""){
                setWinMessage(`winner is ${tikArray[2]}`)
          }

          // draw condition:
          else if(tikArray.indexOf("") == -1){
            setWinMessage(`Its a draw`)
          }
     }


     //change item:
     function noImposters(index){
      //  console.log("I am clicked")
      // need some changes
            if(winMessage){
              return toast("nope, Not allowed, Game is Over")
              
            }

            if(tikArray[index] != ""){
                  return toast("nope, Not allowed, dont even try it, dangerous to health")
            }
            else if(tikArray[index] == ""){
              tikArray[index] =  isCross == true ? "cross" : "circle"
              setIsCross(!isCross)
              findWinner()
            }
            // console.log(tikArray)
     }

  return (
    <div>   
          <ToastContainer position="bottom-center" />
          {
             winMessage ? 
             (
              <div>
                        <h1>{winMessage}</h1>
                        <button onClick={playAgain}>Play Again</button>
              </div>
             ) 
             : 
             (
                <div>  
                      <h1>  {isCross == true ? "Cross Chance" : "Circle Chance" }    </h1>     
                </div>

             )


          }
             
            <div className="grid">
                {   
                    tikArray.map((value, index)=>(
                         
                    <div onClick={() => noImposters(index)}> 
                          <Icon user_icon={value}/>
                    </div>

                    ))
                }
            </div>





    </div>
  );
}


export default App;