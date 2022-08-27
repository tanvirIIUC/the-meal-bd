const loadMeals = ()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res =>res.json())
    .then(data =>displaymeal(data.meals))
}

loadMeals();

const displaymeal = meals =>{
    const foodContainer = document.getElementById('food-container');

    meals.forEach(meal => {
        console.log(meal);
       const Div = document.createElement('div');
       Div.classList.add('col');

       Div.innerHTML= `
         <div class="col">
                  <div class="card">
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