var search = document.querySelector("#search");
var dropdown = document.querySelector(".dropdown");

document.addEventListener('click',function(){
    dropdown.style.display = 'none';
})

search.addEventListener('keyup',function(e){
    console.log(e.target.value);
    dropdown.style.display = 'block';
});
