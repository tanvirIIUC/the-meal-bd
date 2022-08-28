const loadMeals = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>displaymeal(data.meals))
}

const displaymeal = meals =>{
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
       const Div = document.createElement('div');
       
       Div.classList.add('col');

       Div.innerHTML= `
         <div class="col">
                  <div onclick="mealLoad(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                    </div>
                  </div>
         </div> 
       `;
       foodContainer.appendChild(Div);
    });
} 
 const searchFood = ()=>{
  const searchFild= document.getElementById('search-fild');
    const search = searchFild.value;
    loadMeals(search);
    searchFild.value = "";
 }

 const mealLoad = (meals) =>
 {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => mealDetails(data.meals[0]))
 }

 const mealDetails = (details) =>
 {
     const mealContainer = document.getElementById('details');
     mealContainer.innerHTML= ``;
     const mealDiv = document.createElement('div');
     mealDiv.innerHTML=`
     <img src="${details.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${details.strMeal}</h5>
       <p class="card-text">${details.strInstructions.slice(0,200)}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
     `;
     mealContainer.appendChild(mealDiv);
     console.log(details)
 }
