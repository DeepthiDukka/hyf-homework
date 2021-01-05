window.handleMealRequest = async params => {
    const reviews = await fetch(`/api/reviews/`);
    const reviewsData = await reviews.json()
    fetch(`/api/meals/${params.id}`)
        .then(response => response.json())
        .then(meal => {
            meal.meals.forEach((meal) => {
                meal.reviews = reviewsData.filter((reviewsData) => meal.id === reviewsData.meal_id);
                console.log(meal);
                return meal;
            });
            document.head.innerHTML = `
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="/index.css" />
                <link rel="icon" href="images/logo4.png">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Oleo+Script&family=Parisienne&display=swap" rel="stylesheet">
                               <title>"${meal.meals[0].title}"</title>`;
            document.body.innerHTML = `
                <header>
                    <ul>
                    <div class="centeredMealsHeading">Healthy home meals</div>
                        <img src="../images/logo4.png" alt="logo" style="position:relative;margin-left:0;top:0"; height="110">
                        <div class="topnav">
                            <a href="/" data-navigo>Home</a>
                            <a href="/meals" data-navigo>Meals</a>
                            <a href="/#about" data-navigo>About Us</a>
                        </div>                     
                    </ul>
                </header>
                <div class='mealContainer'>
               
                        <div class='row'>
                            <div class='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                                 <h1 class='mealHeading'>${meal.meals[0].title}</h1>
                                <img class="mealsLogo" src="../images/${meal.meals[0].title}.jpg" alt="picture of meal title">
                                <div>ID: ${meal.meals[0].id}</div>
                                <div>Description: ${meal.meals[0].description}</div>
                                <div><i class="fa fa-map-marker" style="font-size:24px;"></i>  ${meal.meals[0].location}</div>
                                <div>Price: ${meal.meals[0].price}DKK</div>
                                <div class="mealReview">
                                <div> Review: ${Object.values(meal.meals[0].reviews[0].title).join("")}</div>
                                <div> Stars: ${meal.meals[0].reviews[0].stars}</div>
                                <div> Review Description: ${Object.values(meal.meals[0].reviews[0].description).join("")}</div>
                                </div>
                            </div>
                            <div class='col-sm-12 col-md-12 col-lg-4 col-xl-3 reserveMeal'>
                                <h3>Reserve Meal</h3>  
                                <div class='add-reservation'>
                                    <form method="POST" id="createReservation">
                                        <label for="mealid">Meal Id:</label>
                                        <input id="mealid" name="mealid" value="${meal.meals[0].id}">
                                        <label for="name">Name:</label>
                                        <input type="text" id="name" name="name">
                                        <label for="email">Email:</label>
                                        <input type="text" id="email" name="email" value="" placeholder="example@domain.com">
                                        <label for="phonenumber">Phone number:</label>
                                        <input type="text" id="phonenumber" name="phonenumber" value="">
                                        <label for="number_of_guests">Number_of_guests:</label>
                                        <input type="number" id="number_of_guests" name="number_of_guests" value="">
                                    </form>
                                    <div class='error'></div>
                                    <button class='btn btn-primary' onclick=postReservation()>Confirm</button>
                                </div>
                            </div>
                            <div class='col-sm-12 col-md-12 col-lg-4 col-xl-3 reviewMeal'>                                
                               <h3>Review for Meal</h3>
                                <div class='add-review'>
                                    <form method="POST" id="createReview">
                                        <label for="mealid">Meal Id:</label>
                                        <input id="mealid" name="mealid" value="${meal.meals[0].id}">
                                        <label for="name">Name:</label>
                                        <input type="text" id="name1" name="name">
                                        <label for="description">Description:</label>
                                        <input type="text" id="description" name="description" value="">
                                        <label for="stars">Stars:</label>
                                        <input type="number" id="stars" name="stars" value="" min="1" max="5" required>
                                    </form>
                                    <div class='error1'></div>
                                    <button class='btn btn-primary' onclick=postReview()>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            
                <footer>
              <div class='footer'>
              <div class='copyrights'><p> © 2020 Website designed by Deepthi Dukka</p></div>
              <div class='contact'><p>Contact : deepthi.healthyhomemeals@gmail.com</p></div>
            </div>
            </footer>
                `;
        });

}


const postReservation = () => {
    document.querySelector('.error').textContent = '';
    const mealid = document.getElementById('mealid').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phonenumber = document.getElementById('phonenumber').value
    const number_of_guests = document.getElementById('number_of_guests').value

    if (name == '' || email == '' || phonenumber == '' || number_of_guests == '') {
        document.querySelector('.error').textContent = 'Please enter all fields'
    } else {
        fetch(`/api/reservations`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    'meal_id': mealid,
                    'name': name,
                    'email': email,
                    'phonenumber': phonenumber,
                    'number_of_guests': number_of_guests

                })
            })

            .then(response => {
                if (response.status == '200') {
                    alert('Reservation success')
                    document.getElementById('createReservation').reset();
                } else {
                    alert('Error during reservations');
                }
            })
    }
}


const postReview = () => {
    document.querySelector('.error1').textContent = '';
    const mealid = document.getElementById('mealid').value;
    const name = document.getElementById('name1').value;
    const description = document.getElementById('description').value;
    const stars = document.getElementById('stars').value;

    if (name == '' || description == '' || stars == '') {
        document.querySelector('.error1').textContent = 'Please enter all fields'
    } else {
        fetch(`/api/reviews`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    'meal_id': mealid,
                    'name': name,
                    'description': description,
                    'stars': stars
                })

            })
            .then(response => {
                if (response.status == '200') {
                    alert('Review has been submitted')
                    document.getElementById('createReview').reset();
                } else {
                    alert('Error during review submission');
                }
            })
    }
}