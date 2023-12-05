const searchButton = document.getElementById("search-button");
const dishList = document.getElementById("Dish");
const dishDetails = document.querySelector(".dish-content");

searchButton.addEventListener("click", getDishList);

function getDishList () {
    let searchText = document.getElementById("search-input").value.trim();
    fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
<<<<<<< HEAD
                const maxDishesToShow = 15;
                const dishesToShow = data.meals.slice(0, maxDishesToShow);
                let html = "";
                dishesToShow.forEach(meal => {
=======
                const dishes = data.meals;
                const dishesPerRow = 3;

                let html = "<div class='row'>";

                dishes.forEach((meal, index) => {
>>>>>>> e0bba9a8923afab21f22b8148671b232f84bd823
                    html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img">
                    <img src = "${meal.strMealThumb}" alt = "food">
                    
                <div class = "meal-name" >
                    <h3>${meal.strMeal}</h3>
                </div>
            </div>`;

            if ((index + 1) % dishesPerRow === 0 && index !== dishes.length - 1) {
                html += "</div><div class='row'>";
            }
            });

            html += "</div>";

            dishList.innerHTML = html;
        } else {
            dishList.innerHTML ="No Dishes Found!";
            }
        }) 
        .catch(error => console.error('Error fetching data:', error));    
}