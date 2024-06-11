document.getElementById("createDiv").addEventListener("click", function() {
    var newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    
    newDiv.style.backgroundColor = "#ff0000";
    newDiv.style.color = "#ffffff"; 
    newDiv.style.border = "2px solid #000"; 
    newDiv.textContent = "Це новий елемент div";
    document.querySelector(".container").appendChild(newDiv);
    });
