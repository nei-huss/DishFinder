const searchButton = document.getElementById("search-button");
const dishList = document.getElementById("Dish");
const dishDetails = document.querySelector(".dish-content");

searchButton.addEventListener("click", getDishList);

function getDishList () {
    let searchText = document.getElementById("search-input").value.trim();
<<<<<<< HEAD
    fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
=======
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
>>>>>>> 3db8281e06528578c3ea024091a2f6864015456e
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
            </div>     
                    `;

                });
            }  
            dishList.innerHTML = html;

<<<<<<< HEAD
        }) 
        .catch(error => console.error('Error fetching data:', error));    
=======
        });
>>>>>>> 3db8281e06528578c3ea024091a2f6864015456e
}