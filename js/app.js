/* ----------------------------------
      Showing Random Meal
---------------------------------- */
const url = "https://www.themealdb.com/api/json/v1/1/random.php";
fetch(url)
  .then((response) => response.json())
  .then((data) => displayRandomMeal(data.meals[0]));

const displayRandomMeal = (meal) => {
  document.getElementById("randomMealCategory").innerText = meal.strCategory;
  document.getElementById("randomMealArea").innerText = meal.strArea;
  document.getElementById("randomMealName").innerText = meal.strMeal;
  document.getElementById("randomMealInstruction").innerText =
    meal.strInstructions.slice(0, 200) + " ...";
  document.getElementById("randomMealImage").src = meal.strMealThumb;
  document.getElementById("randomMealVideoBtn").href = meal.strYoutube;
};

/* ----------------------------------
          Search Meal
---------------------------------- */
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
            <div class="custom-card h-100">
                <div class="">
                  <img
                    class="img-fluid custom-card-img"
                    src="${meal.strMealThumb}"
                    alt=""
                  />
                </div>
                <div class="card-body p-0">
                  <div class="badge-div d-flex justify-content-between">
                    <span class="meal-category-badge">${meal.strCategory}</span>
                    <span class="meal-area-badge">${meal.strArea}</span>
                  </div>
                  <div class="custom-card-title">
                    <h1>${meal.strMeal}</h1>
                  </div>
                </div>
                <div class="custom-card-footer">
                  <button data-bs-toggle="modal"
                  data-bs-target="#modal" onclick="loadMealDetails(${meal.idMeal})" class="custom-card-btn w-100">Explore</button>
                </div>
            </div>
    `;
    resultContainer.appendChild(div);
  }
};
const loadMealDetails = (mealId) => {
  console.log(mealId);
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]));
};
const displayMealDetails = (meal) => {
  console.log(meal);
  const modalContant = document.getElementById("modal-content");
  const div = document.createElement("div");
  div.classList.add("div");
  div.innerHTML = `
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-5">
                    <img
                      class="img-fluid rounded-3"
                      src="${meal.strMealThumb}"
                      alt=""
                    />
                  </div>
                  <div class="col-7">
                    <h1>${meal.strMeal}</h1>
                    <p><strong>Category:</strong> ${meal.strCategory}</p>
                    <p><strong>Area:</strong> ${meal.strArea}</p>
                    <p><strong>Ingredients:</strong> ${meal.strMealThumb}</p>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-12">
                    <p>
                      <strong>Instruction:</strong> ${meal.strInstructions}
                    </p>
                  </div>
                </div>
              </div>
  `;

  modalContant.textContent = "";
  modalContant.appendChild(div);
};
