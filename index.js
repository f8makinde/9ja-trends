let countEl = document.getElementById("count");
let likEl = document.getElementById("like")
let count = 1;
countEl.addEventListener("click", function(){
     count++;
      likEl.textContent = count;
})

let count2El = document.getElementById("count-2");
let like2 = document.getElementById("like-2")
let count2 = 1;
count2El.addEventListener("click", function(){
     count2++;
      like2.textContent = count2;
})