'use strict';

let idFunction= function idFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let intialFoodID= idFunction(1000, 1000);

function Food(fName,fType,fPrice){
    this.foodId=0;
    this.foodName = fName;
    this.foodType = fType;
    this.foodPrice= fPrice;
    this.generatId=function(){
        this.foodId=intialFoodID ;
        intialFoodID =this.foodId+1
    }
}
let render=document.getElementById('render');

let tableRender=document.createElement('table')
tableRender.style.border="2px solid black"
render.appendChild(tableRender)

let title=document.createElement('caption');
title.textContent="Food Table"
title.style.marginBottom="20px"
title.style.fontSize="40px"
title.style.fontWeight="bold"
title.style.color="black"
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

Food.prototype.foodRender = function () {


let tBody=document.createElement("tbody")
tableRender.appendChild(tBody)

let tr = document.createElement('tr');
tBody.appendChild(tr)

let td1 = document.createElement('td');
td1.textContent=this.foodId
tr.appendChild(td1)

let td2 = document.createElement('td');
td2.textContent=this.foodName;
tr.appendChild(td2)

let td3 = document.createElement('td');
td3.textContent=this.foodType
tr.appendChild(td3)

let td4 = document.createElement('td');
td4.textContent= `${this.foodPrice} $`
tr.appendChild(td4)


}


function handler(e){
    e.preventDefault();
    let foodName = e.target.fName.value;
    let foodType = e.target.Types.value;
    let foodPrice = e.target.fPrice.value;  
   
let food1 =new Food(foodName,foodType,foodPrice);


food1.generatId();
food1.foodRender();
fName.value='';
fPrice.value='';
Types.value='';
}


let saveValues = document.getElementById('form');
saveValues.addEventListener('submit', handler)

