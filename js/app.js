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
                    <p><strong>Category:</strong> ${meal.strCategory}</p>
                    <p><strong>Area:</strong> ${meal.strArea}</p>
                    <p class="mb-3"><strong>Tags:</strong> ${
                      meal.strTags ? meal.strTags : "Meal"
                    }</p>
                    <a
                      target="_blank"
                      href="${meal.strYoutube}"
                      class="modal-video-btn mt-5">
                      Watch Receipe
                      <span class="ms-1"
                        ><i class="fa-solid fa-circle-play"></i
                      ></span>
                    </a>
                  </div>
                  <div class="col-7">
                    <h1>${meal.strMeal}</h1>

                    <table class="table table-bordered table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Measure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${meal?.strIngredient1}</td>
                        <td>${meal?.strMeasure1}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient2}</td>
                        <td>${meal?.strMeasure2}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient3}</td>
                        <td>${meal?.strMeasure3}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient4}</td>
                        <td>${meal?.strMeasure4}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient5}</td>
                        <td>${meal?.strMeasure5}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient6}</td>
                        <td>${meal?.strMeasure6}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient7}</td>
                        <td>${meal?.strMeasure7}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient8}</td>
                        <td>${meal?.strMeasure8}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient9}</td>
                        <td>${meal?.strMeasure9}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient10}</td>
                        <td>${meal?.strMeasure10}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient11}</td>
                        <td>${meal?.strMeasure11}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient12}</td>
                        <td>${meal?.strMeasure12}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient13}</td>
                        <td>${meal?.strMeasure13}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient14}</td>
                        <td>${meal?.strMeasure14}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient15}</td>
                        <td>${meal?.strMeasure15}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient16}</td>
                        <td>${meal?.strMeasure16}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient17}</td>
                        <td>${meal?.strMeasure17}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient18}</td>
                        <td>${meal?.strMeasure18}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient19}</td>
                        <td>${meal?.strMeasure19}</td>
                      </tr>
                      <tr>
                        <td>${meal?.strIngredient20}</td>
                        <td>${meal?.strMeasure20}</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
                <div class="row mt-3">
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
