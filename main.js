//navbar come down when you call on it
const container = document.querySelector(".container");
//TODO: test
  document.querySelector(".open-navbar-icon").addEventListener("click", function() {
  container.classList.add('change');
});
document.querySelector('.close-navbar-icon').addEventListener('click', function() {
  container.classList.remove('change');
});

//color the tabs that drop down
const colors = ['#6495ed','#7fffd4','#ffa07a','#f08080','#afeeee'];

let i = 0;

Array.from(document.querySelectorAll('.nav-link')).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

//make the price button work
Array.from(document.querySelectorAll(".navigation-button")).forEach(function (item){
  item.onclick = function () {
    item.parentElement.parentElement.classList.toggle('change');
   };
  });
