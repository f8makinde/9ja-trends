let count5El = document.getElementById("count-5");
let like5 = document.getElementById("like-5")
let count5 = 1;
let save1El = JSON.parse(localStorage.getItem("count5"));
 if(save1El){
     count5 = save1El;
     render1();
 }
count5El.addEventListener("click", function(){
     count5++;
     localStorage.setItem("count5", JSON.stringify(count5));
  
     render1();
})
function render1(){
     like5.textContent = count5;
}

let count6El = document.getElementById("count-6");
let like6 = document.getElementById("like-6")
let count6 = 1;
let saveEl = JSON.parse(localStorage.getItem("count6")) ;

if(saveEl){
    count6 = saveEl;
    render()
}
count6El.addEventListener("click", function(){
     count6++;
      localStorage.setItem("count6", JSON.stringify(count6));
      render()
 })

   function render(){
    like6.textContent = count6;
   }
  