
    //Selecting Each Element
    var searchEndpoint = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    var suggestionList = document.querySelector('#suggestionList');
    var favoriteList = document.querySelector('#favoriteList');
    var search = document.querySelector('#search');
    var span = document.querySelector('#span');
    var main = document.querySelector('#main')
    
    var favourite = [];
    var meal;
    var mealDetails;

    //These are eventHandlers 
    search.addEventListener('input', handleInput);
    suggestionList.addEventListener('click', handleSuggestionClick);


    //Created A handle input function to handel user input
    function handleInput(e) {
        console.log('handleInputWorking');
        var searchTerm = search.value.trim();
        if (searchTerm !== '') {
            // console.log('working');
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchTerm)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    mealDetails = data.meals[0];
                    console.log(mealDetails);
                    meal = data.meals[0].strMeal;
                    //checking
                    // console.log("meal from handle input :",data.meals[0]);
                    // const mealImage = data.meals[0].strMealThumb;
                    // console.log(mealImage);
                    console.log("meal",meal);
                    showSuggestion(meal, data);
                })
            clearSuggestions();
            // console.log("res",res);

            // const data = await res.json();
            // favourite.push(data.meals);
            // var meals = data.meals;
            // console.log("meals",meals);
            // // data.meals[0].strMeal
            // var listItem;

            // let theMeal = meals.find((meal) => console.log(meal.strMeal === userData));
            // console.log("theMeal",theMeal);

            // for(let i = 0;i < meals.length;i++){
            //     var singleElement = meals[i].strMeal;

            // let theMeal = meals.find((meal) => meal.strMeal === userData);
            // console.log(theMeal);

            // console.log(meals[i].strMeal.find(userData));
            // console.log("singleElement",singleElement.includes(userData));
            // if(singleElement.includes(userData)){
            //     singleElement.find(userData)
            // listItem = document.createElement('li');
            // suggestionList.style.listStyleType ='none';
            // suggestionList.appendChild(listItem);

            // listItem.innerHTML = userData;
            // }
            // }
            // if(e.target.value.length < 2){
            //     listItem.style.display = 'none';
            // }

        } else {
            clearSuggestions();
        }
    }


    //Function for clearing the suggestion
    function clearSuggestions() {
        suggestionList.innerHTML = '';
    }


    //Function for show Suggestion below input
    function showSuggestion(meal, data) {
        console.log('showSuggestion');
        //clearing the suggestionList innerhtml
        suggestionList.innerHTML = '';

        // console.log(data.meals.length);

        // console.log(strMealName);
        // for (var i = 0; i < data.meals.length; i++) {
        // var strMealName = data.meals[i];
        // console.log("strMealName from suggestion fun => ", strMealName.strMeal);


        //creating a each element to render it
        var listItem = document.createElement('li');
        var favButton = document.createElement('button');

        //setting properties to each element
        favButton.textContent = "Fav";
        var mealId = data.meals[0].idMeal;
        favButton.setAttribute('id', mealId);

        // appending them to a parent 
        suggestionList.style.listStyleType = 'none';
        listItem.innerHTML += meal;
        listItem.appendChild(favButton);
        suggestionList.appendChild(listItem);

        // }
        // var mealImage = document.createElement('img');
        // console.log(meal.strMealThumb);
        // mealImage.src = meal.strMealThumb;
        // mealImage.alt = meal.strMeal;
        // suggestionList.appendChild(mealImage);


        // favButton.addEventListener('click',function(e){
        //     console.log('inside showSuggestion',meal);
        //     console.log('e.target.childNodes[0]',e.target.childNodes[0]);
        //     // if(!favourite.includes(e.target.childNodes[0])){
        //     //     // addToFavorites(meal);
        //     //     console.log('showSuggestion favButton');
        //     //     // addToFavorite(meal);
        //     // }    
        // });
    }


    //Handle suggestion click 
    function handleSuggestionClick(e) {
        console.log('handleSuggestionClick');
        // console.log('handleSuggestionClick',meal);
        const clickedItem = e.target;
        const mealData = meal;

        // console.log('mealData',mealData);
        // console.log("clickedItem",clickedItem);
        // console.log("e.target.childNodes",e.target.childNodes);
        // favourite.push()
        // console.log("clickedItem.tagName == 'LI'",clickedItem.tagName == 'BUTTON');


        // console.log(clickedItem.tagName === 'BUTTON');
        console.log(clickedItem.tagName === 'LI');
        console.log(clickedItem);
        if (clickedItem.tagName === 'BUTTON') {

            // const mealName = clickedItem.childNodes[0];
            // console.log("mealName",mealData);
            // console.log('clickedItem.childNodes[0]',clickedItem.childNodes);
            // if(clickedItem.childNodes[1]){
            //     favourite.push(mealName.textContent);
            //     console.log('favourite',favourite);
            // }
            // favourite.push(mealName)
            // console.log(favourite);
            // console.log("checking",clickedItem.childNodes[1]);
            // fetchMealDetails(mealName);

            showFavorites(meal);
            saveFavorites(meal);
        }else if(clickedItem.tagName === 'LI'){
            console.log('meal',meal);
            console.log(mealDetails);
            showMealDetails(mealDetails);
        }
    }

    //function to show meal details in home page    
    function showMealDetails(mealDetails){
        // console.log('showMealDetails');
        // console.log(mealDetails);
        var showMeal = document.createElement('div');
        showMeal.setAttribute('id','show-meal');

        var imageOfMeal = document.createElement('img');
        // console.log(imageOfMeal);
        imageOfMeal.src = mealDetails.strMealThumb;

        var text = document.createElement('div');
        text.classList.add('text');

        var headFour = document.createElement('h4')
        headFour.innerHTML = mealDetails.strMeal;
        text.appendChild(headFour);

        var para = document.createElement('p')
        para.innerHTML = mealDetails.strInstructions;
        text.appendChild(para);

        showMeal.appendChild(imageOfMeal)
        showMeal.appendChild(text);
        main.appendChild(showMeal);
        search.addEventListener('click',function(e){
            showMeal.remove();
        })
    }


    // showing the Favorites
    function showFavorites(mealName) {
        // saveFavorites();
        // console.log('showFavorites',mealName);

        if (!favourite.includes(mealName)) {
            favourite.push(mealName);

            // console.log("favourite[0]", favourite[0]);

            // favoriteList.innerHTML = '';
            for (let i = 0; i < favourite.length; i++) {

                // console.log(favourite[i]);
                // console.log(favourite[0]);
                // console.log(favourite[1]);

                var listItem = document.createElement('li');
                listItem.innerHTML += favourite[i];

                // console.log('favourite[i].textContent;',favourite[i]);

                // favoriteList.appendChild(listItem);

                // console.log('listItem',listItem);

            }
        }

    }


    // Save favorites to local storage
    function saveFavorites() {
        localStorage.setItem('favourite', JSON.stringify(favourite));
        // console.log(localStorage);
    }


    //onload function for to stored a data after reload
    function onLoad() {
        const storedFavourite = localStorage.getItem('favourite');
        // console.log(storedFavourite);
        const parsedfav = JSON.parse(storedFavourite);
        // console.log(parsedfav);
        // showFav(parsedfav);
    }

    //intializer
    function init() {
        onLoad()
    }
    init();
