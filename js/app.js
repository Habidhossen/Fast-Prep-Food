const searchButton = () => {
  const input = document.getElementById("input-value");
  const inputValue = input.value;
  if (inputValue == "") {
    console.log("Please type any food name");
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((response) => response.json())
      .then((data) => searchFood(data.meals));

    // clear input field
    input.value = "";
  }
};
const searchFood = (meals) => {
  const resultContainer = document.getElementById("result-container");
  for (const meal of meals) {
    console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
            <div class="card">
              <img src="${meal.strMealThumb.slice(
                0,
                100
              )}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <a href="#" class="btn btn-light">See details</a>
              </div>
            </div>
    `;
    resultContainer.appendChild(div);
  }
};
