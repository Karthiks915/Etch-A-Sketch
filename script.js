const container = document.querySelector(".container");
const resetBtn = document.getElementById("reset");

function createGrid(n) {

    n = prompt("Enter the number of squares you want between 1 and 100: ");

    if (n > 100 || n < 0) {
        n = prompt("Number is above 100 or less than 1, enter between 1 and 100");
    } 


    for (let i = 0; i < n * n; i++) {

        const div = document.createElement("div");
        container.appendChild(div);
        container.setAttribute('style',
            `grid-template-rows: repeat(${n}, auto);
             grid-template-columns: repeat(${n}, auto)`);
        
        div.addEventListener("mouseover",function(){
            
            
           div.style.backgroundColor="pink";
            
        });

    }

}

createGrid();




