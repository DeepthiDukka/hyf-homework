window.handleMealsRequest = () => {
    function renderMeals() {
        fetch("/api/meals")
            .then(response => response.json())
            .then(meals => {
                document.head.innerHTML = `
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
              <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Oleo+Script&family=Parisienne&display=swap" rel="stylesheet">
                  <link rel="stylesheet" href="index.css" />
                  <link rel="icon" href="images/logo4.png">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                  <title>Meals</title>
                  `;

                document.body.innerHTML = `
                  <header>
                      <ul>
                      <div class="centeredMealsHeading">Healthy home meals</div>
                      <img src="images/logo4.png" alt="logo" style="position:relative;margin-left:0;top:0"; height="110">
                      
                      <div class="topnav">
      <a href="/" data-navigo>Home</a>
      <a class="active" href="meals" data-navigo>Meals</a>
      <a href="/#about" data-navigo>About Us</a>
      
    </div> 
                        
                      </ul>
                         
                  </header>
                  <h1>Meals</h1>
                  <div class="meals container-fluid">
                      <ul class='row'>                        
                      </ul>
                  </div><br><br>
                  <footer>
              <div class='footer'>
              <div class='copyrights'><p> © 2020 Website designed by Deepthi Dukka</p></div>
              <div class='contact'><p>Contact : deepthi.healthyhomemeals@gmail.com</p></div>
            </div>
            </footer>
              `;

                let mealsDiv = document.querySelector('.meals ul')
                mealsDiv.innerHTML = meals.map(meal => {
                    return `<li class='col-lg'>
                          <img class="mealImage" src="images/${meal.title}.jpg" alt="image of meal title">
                          <h3>${meal.title}</h3>
                          <p>${meal.description}</p>
                          <h4 class="logo">${meal.price} Dkk</h4>
                          <h4><i class="fa fa-map-marker" style="font-size:24px;"></i>  ${meal.location}</h4>
                          <button class='btn btn-primary'><a href="meal/${meal.id}">Reserve</a></button><br><br>
                      </li>`
                }).join('')








            })
    }
    renderMeals()
}
/*
window.handleMealsRequest = () => {

  let mealsDiv = document.querySelector('.meals ul');
            mealsDiv.innerHTML = meals.map(meal => {
                return `<li>
                          <img class="logo" src="https://source.unsplash.com/600x300?${meal.title}" alt="picture of meal title">
                          <h3>${meal.title}</h3><br>
                          <h4><i class="fa fa-map-marker" style="font-size:24px;"></i>  ${meal.location}</h4>
                          <a href="meals" data-navigo>Go to meals</a>
                        </li>`
            }).join('')

  document.body.innerHTML = `
  <h1>Meals</h1>`;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then((response) => response.json())
    .then(renderMeals);
};

*/