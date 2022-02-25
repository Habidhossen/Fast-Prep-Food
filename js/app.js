const searchButton = () => {
  const input = document.getElementById("input-value");
  const inputValue = input.value;
  if (inputValue == "") {
    console.log("Type any food name");
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((response) => response.json())
      .then((data) => searchFood(data.meals));
  }
};
const searchFood = (foodList) => {
  console.log(foodList);
};
