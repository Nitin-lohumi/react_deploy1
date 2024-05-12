// import Main from "./Main";
function Front({toggle}){
    return(
        <>
        <div className="Front_page">
             <div className="img_Box">
                {/* <img src="./src/Daco_55708.png" alt="dice" /> */}
                <img src="https://thumbs.dreamstime.com/b/red-dice-14185404.jpg" alt="dice" />

                </div>
            <div className="Start">
            <h2>
                Dice Game
            </h2>
            <button onClick={toggle}>
               Let's Play
            </button>
            </div>
    
        </div>
        </>
    )
    }
    export default Front;