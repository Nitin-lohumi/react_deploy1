// import Main from "./Main";
function Front({toggle}){
    return(
        <>
        <div className="Front_page">
             <div className="img_Box">
                <img src="./src/Dice_images/Daco_55708.png" alt="dice" />
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