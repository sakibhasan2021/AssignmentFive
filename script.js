const searchFood  =() =>{
    const searchFoodItem=document.getElementById('search').value;
  //  console.log(searchFoodItem);
 // const url=`https://www.themealdb.com/api/json/v1/1/${searchFoodItem}`
 //const url=`https://www.themealdb.com/api/json/v1/1/${searchFoodItem}`
  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoodItem}`
  console.log(url);
  fetch(url)
  .then(res=> res.json())
  .then(data=> displayfood(data.meals))
}


const displayfood = foods=>{
    const foodBox=document.getElementById('FoodBoxContainer');
    
    foods.forEach(food=>{
        console.log(food)
        const Fooddiv=document.createElement('div');
        Fooddiv.className='Box-Shape'
       // div.innerHTML=food.strMeal;
       Fooddiv.innerHTML=`
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
       <h5 class="card-title"> ${food.strMeal}</h5>
       <p class="card-text"></p>
       <a href="#" class="btn btn-primary">See ingridant</a>
        </div>
       `
        foodBox.appendChild(Fooddiv);
    })
    //console.log(foods)
}




