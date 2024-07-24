let a = document.querySelector(".bt11");
let c = document.querySelector(".side_float");

let b = true;

let d = a.addEventListener("click" , function (){
    console.log("clicked");
    if(b==true){

        c.classList.add("hide");
        b=false;

    }else if(b==false){
        c.classList.remove("hide");
        b=true;
    }
})
