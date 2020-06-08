

const findInput = document.querySelector(".find-input")//selects HTML Node
const replaceInput = document.querySelector(".replace-input")//selects HTML Node
const replaceAllButton = document.querySelector(".replace-all-button")



const rowElements = document.querySelectorAll(".row")


function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}













replaceAllButton.addEventListener("click",function(){
    let userInput = findInput.value
    let substitute = replaceInput.value
   
    for(let rowIndex = 0; rowIndex<rowElements.length;rowIndex++){

    let myVariable = getCellElements(rowElements[rowIndex])
     for(let cellIndex = 0; cellIndex<myVariable.length; cellIndex++){
        if(myVariable[cellIndex].innerHTML.includes(userInput)){
            
               
                let replaceThis = myVariable[cellIndex].innerHTML.replace(userInput,substitute)
                
                
                
                myVariable[cellIndex].innerHTML = replaceThis
               
               
            
        }
    
     }
   }
   
})
