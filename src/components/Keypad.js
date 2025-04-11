// Code Keypad Component Here

function Keypad (){
    function HandleChange(e){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={HandleChange} type="password" />
        </div>
    )
}

export default Keypad;