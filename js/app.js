const searchButton = () => {
  const input = document.getElementById("input-value");
  const inputValue = input.value;
  if (inputValue == "") {
    console.log("Please type any food name");
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((response) => response.json())
      .then((data) => displayMeal(data.meals));

    // clear input field
    input.value = "";
  }
};
const displayMeal = (meals) => {
  const resultContainer = document.getElementById("result-container");
  for (const meal of meals) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
            <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(
                  0,
                  100
                )}...</p>
                <button 
                onclick="loadMealDetails(${meal.idMeal})" 
                type="button"
                class="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#see-details">See details</button>
              </div>
            </div>
    `;
    // clear result
    resultContainer.innerHTML = "";
    resultContainer.appendChild(div);
  }
};
const loadMealDetails = (mealId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]));
};
const displayMealDetails = (meal) => {
  console.log(meal);
  const modalContant = document.getElementById("modal-content");
  const div = document.createElement("div");
  div.classList.add("p-0");
  div.innerHTML = `

  <h5>${meal.strMeal}</h5>
  <P>${meal.strCategory}</P>
  <P>${meal.strArea}</P>
  <P>${meal.strInstructions}</P>

  `;
  modalContant.appendChild(div);
};
