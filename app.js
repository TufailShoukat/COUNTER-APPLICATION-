var count = 0;
var counterElement = document.getElementById("counter");

function update(){
    counterElement.innerHTML = `${count} 
    (${count % 2 === 0 ? 'NUMBER IS EVEN' :  ' NUMBER IS ODD'})`;
 
    
}

function incrementButton(){
    count++
    update();


}

function resetButton(){
     count = 0;
     counterElement.innerText= count
  
     
}
 

function decrementButton(){

    
    if ( count > 1) {
        
    count--      
    }

    update();
}
















 
    
    

