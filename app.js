'use strict';

let idFunction= function idFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let intialFoodID= idFunction(1000, 1000);
let foodArray=[];
function Food(fName,fType,fPrice){
    this.foodId=idFunction(1000, 9999);
    this.foodName = fName;
    this.foodType = fType;
    this.foodPrice= fPrice;
    
    foodArray.push(this);
}

let saveValues = document.getElementById('form');
saveValues.addEventListener('submit', handler)

function handler(e){
    e.preventDefault();
    let foodName = e.target.fName.value;
    let foodType = e.target.Types.value;
    let foodPrice = e.target.fPrice.value;  
   
let food1 =new Food(foodName,foodType,foodPrice);

storeIntoLocalStorage();
fName.value='';
fPrice.value='';
Types.value='';
}

readFromLocalStorage();

console.log(foodArray);
function storeIntoLocalStorage() {
    let jsonObjArray = JSON.stringify(foodArray);
    window.localStorage.setItem("food", jsonObjArray);
}
function readFromLocalStorage() {
    let jsonArray = window.localStorage.getItem("food");
   

    let objArray = JSON.parse(jsonArray);

    if (objArray == null) {
        console.log("");
    } else {
      
        for(let i = 0 ; i< objArray.length; i++){
            let food1 = new Food(objArray[i].foodName , objArray[i].foodType , objArray[i].foodPrice );
            food1=objArray[i].foodId
   
        }
    

    }


}



