var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/meal/:id", window.handleMealRequest).resolve();



/* function renderMeals(meals) {
    const ul = document.createElement("ul");
  
    meals.forEach((meal) => {
      const li = document.createElement("li");
  
      li.innerHTML = Object.values(meal);
      ul.appendChild(li);
    });
  
    document.body.appendChild(ul);
  }
  
  function handleMealsRequest() {
    document.body.innerHTML = `
    <h1>Meals</h1>`;
  
    // make sure the backend api works before working with it here
    fetch("/api/meals")
      .then((response) => response.json())
      .then(renderMeals);
  };
  
   function handleMealRequest(params) {
    document.body.innerHTML = `
    <h1>Meal with id ${params.id}</h1>`;
  
    fetch(`/api/meals/${params.id}`)
        .then((response) => response.json())
        .then(renderMeal);
  
        function renderMeal(arg) {
  console.log('meal with id', arg);
        }
  }; */