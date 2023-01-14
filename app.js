
// Variables
let button = document.querySelector("#button");
let table = document.querySelector(".table");
let txtInput = document.querySelector("#input") ;
let divD = document.createElement("div");
divD.innerHTML = "<img src= Images/delete.png ></img>";

button.addEventListener("click", function (){
    
// Checklist icon    
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    
    let tR = document.createElement("tr");
    table.append(tR);
    tR.classList.add("rowadd");
    let tD = document.createElement("td");
    tR.append(tD);
    tD.classList.add("tableData");
    tD.append(checkbox);

// Text input entry
    tD = document.createElement("td");
    tR.append(tD);
    tD.innerText = txtInput.value;
    tD.classList.add("tableData");
    tD.classList.add("text");
// Delete icon
    tD = document.createElement("td");
    tR.append(tD);
// creating new div to hold our icon and do the delete function 
    let divD = document.createElement("div");
    divD.innerHTML = "<img src=delete.png></img>";
    tD.append(divD);
    tD.classList.add("tableData");

// Remove Table row on clicking on the delete icon
     divD.addEventListener("click", function(){

    this.parentElement.parentElement.remove();

    })

// checklist cross the finished work
   checkbox.addEventListener("change", function(){

    let targetTr = this.parentElement.parentElement;
    console.log(targetTr);
    let targetTd = targetTr.querySelectorAll("td");

    if(this.checked){
       
        targetTd[1].classList.add("strike");
       
    }else{
                
        targetTd[1].classList.remove("strike");
    }
   })
   
})


