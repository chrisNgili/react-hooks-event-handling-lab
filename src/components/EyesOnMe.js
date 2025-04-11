// Code EyesOnMe Component Here
function EyesOnMe(){
    function HandleFocus(e){
        console.log('Good!')
    }
    function HandleBlur(e){
        console.log('Hey! Eyes on me!')
    }
   return( 
        <button onFocus={HandleFocus} onBlur={HandleBlur} >Eyes on me</button>
   )
}

export default EyesOnMe