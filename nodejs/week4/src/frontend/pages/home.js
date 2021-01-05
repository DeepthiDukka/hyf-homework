window.handleHomeRequest = () => {
  function renderMeals() {
    fetch("/api/meals")
      .then(response => response.json())
      .then(meals => {
        document.head.innerHTML = `
              
              <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Oleo+Script&family=Parisienne&display=swap" rel="stylesheet">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
              <link rel="stylesheet" href="index.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <link rel="icon" href="images/logo4.png">
            
              <title>Meal-app</title>`;

        document.body.innerHTML = `
              <header>
                <ul>
                
                  <img src="images/logo4.png" alt="logo" style="position:relative;margin-left:0;top:0"; height="110">

                  <div class="topnav">
  <a class="active" href="/" data-navigo>Home</a>
  <a href="meals" data-navigo>Meals</a>
  <a href="#about">About Us</a>
  <input type="text" class="search" placeholder="Search">
  <ul id="autoSearch" style="display : none">
  </ul>
</div>

                  
                </ul>
                <div class='header-image'>
                  <img src='images/wallpaper3e.jpg' alt='picture of a healthy home meal' height="600" width="100%">
                  <div class="centered">Healthy home meals</div>
                  <div class="centeredText">“…Customised meal plan made for your lifestyle”</div>
                  
                </div>
              </header>
              <section class="homeContent">
              <div id = "about" class="leftText"> About us</div>
              <p class="aboutDescription" >‘Healthy Home Meals’ delivers customised meal plans at reasonable prices. We offer meals according to your diet plan like keto, paleo, vegan and low carbs.
              All you have to do is select a meal and order just by filling a form.
             </p>
              <div class="footer-logo">
                <div class="leftText"> Find us on</div>
                <div class="logos">
                <ul>
                    <li><a href="#facebook" class="fa fa-facebook"></a>
                    <a href="#twitter" class="fa fa-twitter"></a>
                    <a href="#youtube" class="fa fa-youtube"></a>
                    <a href="#instagram" class="fa fa-instagram"></a>
                    <a href="#pinterest" class="fa fa-pinterest"></a>
</li>
                </ul>
            </div>
        </div>
</section>
        <footer>
              <div class='footer'>
              <div class='copyrights'><p> © 2020 Website designed by Deepthi Dukka</p></div>
              <div class='contact'><p>Contact : deepthi.healthyhomemeals@gmail.com</p></div>
            </div>
            </footer>
            `;

        const search = document.querySelector('.search');
        search.addEventListener('input', () => {
          const selectedMeal = meals.filter(el => el.title.toUpperCase().includes(search.value.toUpperCase()))
          document.getElementById('autoSearch').style.display = 'block'
          document.getElementById('autoSearch').innerHTML = `
          <li>
          <a href="meal/${selectedMeal[0].id}">
                                          <img class="logo" src="images/${selectedMeal[0].title}.jpg" alt="picture of meal title">                         
                                          </a>
                                          <h3>${selectedMeal[0].title}</h3>
                                          <h4><i class="fa fa-map-marker" style="font-size:20px;"></i>${selectedMeal[0].location}</h4>
                                          
                                        </li>`

        })
      })
  }
  renderMeals();

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};