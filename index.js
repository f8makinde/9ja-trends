let countEl = document.getElementById("count");
let likEl = document.getElementById("like")
let count = 1;
let save = JSON.parse(localStorage.getItem("count"));
 if(save){
      count = save;
      renderOut()
 }

countEl.addEventListener("click", function(){
     count++;
     localStorage.setItem("count", JSON.stringify(count))
     renderOut()
})
 function renderOut(){
   likEl.textContent = count;
 }
let count2El = document.getElementById("count-2");
let like2 = document.getElementById("like-2")
let count2 = 1;
let save2 = JSON.parse(localStorage.getItem("count2"));
 if(save2){
      count2 = save2;
      render2();
 }

count2El.addEventListener("click", function(){
     count2++;
     localStorage.setItem("count2", JSON.stringify(count2))
     render2()
})

  function render2(){
      like2.textContent = count2;
  }
let count3El = document.getElementById("count-3");
let like3 = document.getElementById("like-3")
let count3 = 1;
let save3 = JSON.parse(localStorage.getItem("count3"));
 if(save3){
      count3 = save3;
      render3();
 }
count3El.addEventListener("click", function(){
     count3++;
     localStorage.setItem("count3", JSON.stringify(count3))
     render3()
})
function render3(){
      like3.textContent = count3;
  }
let count4El = document.getElementById("count-4");
let like4 = document.getElementById("like-4")
let count4 = 1;
let saveEl = JSON.parse(localStorage.getItem("count4"));
 if(saveEl){
      count4 = saveEl;
      render4Out();
 }
count4El.addEventListener("click", function(){
     count4++;
     localStorage.setItem("count4", JSON.stringify(count4));
     render4Out();
})

  function render4Out(){
      like4.textContent = count4;
  }

