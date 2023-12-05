const searchButton = document.getElementById("search-button");
const dishList = document.getElementById("dish");
const dishDetails = document.querySelector(".dish-content");

searchButton.addEventListener("click", getDishlist);
dishList.addEventListener("click", getDishRecipe);

function getDishList () {
    let searchText = document.getElementById("search-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}

