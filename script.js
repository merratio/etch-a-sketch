const container = document.getElementById("newContainer");

function divs(rows, cols){

    for(var i =0; i<rows; i++){
        const div1 = document.createElement("div");
        div1.className = "flexRow";
        container.appendChild(div1); 

        for(var j=0; j<cols; j++){
            const div2 = document.createElement("div");
            div2.className = "flexCol";
            div1.appendChild(div2);

            div2.addEventListener("mouseover", ()=> {
                div2.classList.add("change");
            });
        }
        
    }
        
}

divs(16, 16);

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    container.innerHTML = "";
    divs(16,16);
});