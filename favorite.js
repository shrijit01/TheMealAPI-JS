var FavList = document.querySelector('#FavList');
console.log('working');

//loading favorites from local storage 
function loadFavorite() {
    const storedFavourite = localStorage.getItem('favourite');
    // console.log(storedFavourite);
    const parsedfav = JSON.parse(storedFavourite);
    // console.log(parsedfav);
    showFav(parsedfav);
}
loadFavorite()


// Showing favorites in favorite page 
function showFav(parsedfav) {
    // console.log(parsedfav);

    for(let i = 0;i < parsedfav.length;i++){
        var listItem = document.createElement('li');
        var headingFive = document.createElement('h5');
        var removeBtn = document.createElement('button');

        var now = Date.now();
        // console.log(now);

        removeBtn.textContent = 'remove';
        removeBtn.setAttribute('id',now);
        listItem.classList.add('li');
        headingFive.textContent += parsedfav[i];
        listItem.appendChild(headingFive);
        listItem.appendChild(removeBtn);

        FavList.appendChild(listItem);
        //clicking to remove btn we a removing the list item 
        removeBtn.addEventListener('click',function(e){
            var tryToremove = e.target.parentElement.firstChild.innerHTML;
            checkForMealToRemove(tryToremove,parsedfav);
            // console.log("tryToremove =>",tryToremove);
            e.target.parentElement.remove();
        })

    }
}


//checking if favorites array is not less than 0 then removing element from loacl storage
function checkForMealToRemove(tryToremove, parsedfav) {
    // console.log(tryToremove);
    var indexToRemove = parsedfav.indexOf(tryToremove);
    // console.log(indexToRemove);
    // console.log(parsedfav);
    if(indexToRemove !== -1){
        parsedfav.splice(indexToRemove,1);
    }

    var stringifiedUpdatedArray = JSON.stringify(parsedfav);
    localStorage.setItem('favourite',stringifiedUpdatedArray);

    // for (let i = 0; i < parsedfav.length; i++) {
    //     console.log(parsedfav.includes(tryToremove));
    //     // parsedfav.includes()
    // }
    // console.log(parsedfav);

}