const search_data = () => {
  const val = document.getElementById("input-box").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`)
    .then((res) => res.json())
    .then((data) => {
      displayProduct(data.meals);
    });
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("product-page");
  products.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("product-box");
    div.innerHTML = `
    <img class="product-img" src="${item.strMealThumb}" alt="product-img">
    <h1 class="product-title fs-4 fw-bold bg-white">${item.strMeal.slice(
      0,
      15
    )}</h1>
    <button
            class="p-3 fs-5 fw-bold w-100 bg-primary text-white"
            onclick="displayDetails(${item.idMeal})"
          >
            Details
    </button>
    `;
    productContainer.appendChild(div);
  });
};

const displayDetails = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((product) => {
      singleProduct(product);
    });
};

const singleProduct = (item) => {
  console.log(item.meals[0].strCategory);
  const veawSingleProduct = document.getElementById("viaw-single-product");
  const div = document.createElement("div");
  div.classList.add("singleProduct");
  div.innerHTML = `
    <img class="product-img" src="${item.meals[0].strMealThumb}" alt="product-img">
    <h1 class="product-title fs-4 fw-bold bg-white">${item.meals[0].strMeal}</h1>
    <ul class="single-description">
      <li>${item.meals[0].strIngredient1}</li>
      <li>${item.meals[0].strIngredient2}</li>
      <li>${item.meals[0].strIngredient3}</li>
      <li>${item.meals[0].strIngredient4}</li>
      <li>${item.meals[0].strIngredient5}</li>
    </ul>
  `;
  veawSingleProduct.appendChild(div);
};
