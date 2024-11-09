//let count=document.getElementById("input").value;



let input = document.getElementById("input-value");
let count = parseInt(input.value);
input.addEventListener("input", function(){
    count = parseInt(input.value) || 0;
}
)

function addClick(){
    count += 1;
    // document.getElementById("input").innerHTML = count;
    // console.log(count)
    input.value = count;
}

function subClick(){
   if(count >= 1){ 
    
    // console.log(count)
    count -= 1;
    input.value = count;
    
   }
   else{
    input = 0;
   }
}


 