const searchButton = document.getElementById("search-button");
const dishList = document.getElementById("dish");
const dishDetails = document.querySelector(".dish-content");

searchButton.addEventListener("click", getdishList);

function getdishList () {
    let searchText = document.getElementById("search-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
        .then(response => response.json())
        .then(data => {
            let html = ""; 
            if(data.meals){
                data.meals.forEach(meal => {
                    html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img" >
                    <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                <div class = "meal-name" >
                    <h3>${meal.strMeal}</h3>
                    <a href = "#" class ="recipe-button">Recipe</a>
                </div>
            < div>     
                    `;

                });
            }  
            dishList.innerHTML = html;

        });
}

