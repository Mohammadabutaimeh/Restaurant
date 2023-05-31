'use strict';

let idFunction= function idFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let intialFoodID= idFunction(1000, 1000);
let foodArray=[];
function Food(fName,fType,fPrice){
    this.foodId=0;
    this.foodName = fName;
    this.foodType = fType;
    this.foodPrice= fPrice;
   
    foodArray.push(this);
}

let render=document.getElementById('render');
render.innerHTML = '';


function foodRender () {
    let tableRender=document.createElement('table')
    tableRender.style.border="3px solid #4b0953"
    render.appendChild(tableRender)
    tableRender.innerHTML = '';
    let title=document.createElement('caption');
    title.textContent="Food Table"
    title.style.marginBottom="20px"
    title.style.fontSize="40px"
    title.style.fontWeight="bold"
    title.style.color="#4b0953"
    tableRender.appendChild(title)
    
    let tHead=document.createElement('thead')
    tableRender.appendChild(tHead)
    
    let th1 = document.createElement('th');
    th1.textContent="ID";
    tHead.appendChild(th1)
    
    let th2 = document.createElement('th');
    th2.textContent="Name";
    tHead.appendChild(th2)
    
    let th3 = document.createElement('th');
    th3.textContent="Type";
    tHead.appendChild(th3)
    
    let th4 = document.createElement('th');
    th4.textContent="Price";
    tHead.appendChild(th4)
    
    let tBody=document.createElement("tbody")
    tableRender.appendChild(tBody)

for (let i = 0; i < foodArray.length; i++) {

let tr = document.createElement('tr');
tBody.appendChild(tr)

let td1 = document.createElement('td');
td1.textContent=foodArray[i].foodId
tr.appendChild(td1)

let td2 = document.createElement('td');
td2.textContent=foodArray[i].foodName;
tr.appendChild(td2)

let td3 = document.createElement('td');
td3.textContent=foodArray[i].foodType
tr.appendChild(td3)

let td4 = document.createElement('td');
td4.textContent= `${foodArray[i].foodPrice} JD`
tr.appendChild(td4)


}
}

function readFromLocalStorage() {
    let jsonArray = window.localStorage.getItem("food");

    let objArray = JSON.parse(jsonArray);

    if (objArray == null) {
        console.log("");
    } else {
      
        for(let i = 0 ; i< objArray.length; i++){
            let food1 = new Food(objArray[i].foodName , objArray[i].foodType , objArray[i].foodPrice );
            food1.foodId = objArray[i].foodId ; 
        }
    

    }


}
readFromLocalStorage();
foodRender();


