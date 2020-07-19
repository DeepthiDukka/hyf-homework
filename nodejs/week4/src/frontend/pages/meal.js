window.handleMealRequest = async params => {
    const reviews = await fetch(`/api/reviews/`);
    console.log(reviews);
    const reviewsData = await reviews.json()
    console.log(reviewsData);
    fetch(`/api/meals/${params.id}`)
        .then(response => response.json())
        .then(meal => {
            meal.forEach((meal) => {
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
                               <title>"${meal.title}"</title>`;
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
                        <ul class='row'>
                            <li class='col'>
                                 <h1 class='mealHeading'>${meal[0].title}</h1>
                                <img class="logo" src="../images/${meal[0].title}.jpg" alt="picture of meal title">
                                <div>ID: ${meal[0].id}</div><br>
                                <div>Description: ${meal[0].description}</div><br>
                                <div><i class="fa fa-map-marker" style="font-size:24px;"></i>  ${meal[0].location}</div><br>
                                <div>Price: ${meal[0].price}DKK</div><br>
                                <div> Review: ${Object.values(meal[0].reviews[0].title).join("")}</div><br>
                                <div> Stars: ${meal[0].reviews[0].stars}</div><br>
                                <div> Review Description: ${Object.values(meal[0].reviews[0].description).join("")}</div><br>
                                
                            </li>
                            <li class='col reserveMeal'>
                                <h3>Reserve Meal</h3>  
                                <div class='add-reservation'>
                                    <form method="POST" id="createReservation">
                                        <label for="mealid">Meal Id:</label>
                                        <input id="mealid" name="mealid" value="${meal[0].id}">
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
                            </li>
                            <li class='col reviewMeal'>                                
                               <h3>Review for Meal</h3>
                                <div class='add-review'>
                                    <form method="POST" id="createReview">
                                        <label for="mealid">Meal Id:</label>
                                        <input id="mealid" name="mealid" value="${meal[0].id}">
                                        <label for="name">Name:</label>
                                        <input type="text" id="name1" name="name">
                                        <label for="description">Description:</label>
                                        <input type="text" id="description" name="description" value="">
                                        <label for="stars">Stars:</label>
                                        <input type="number" id="stars" name="stars" value="" min="1" max="5" required>
                                    </form>
                                    <div class='error'></div>
                                    <button class='btn btn-primary' onclick=postReview()>Confirm</button>
                                </div>
                            </li>
                        </ul>
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


    // const addReservation = document.querySelector('.add-reservation')
    // addReservation.innerHTML = `<form method="POST" id="createReservation">
    //                                 <label for="mealid">Meal Id:</label><br>
    //                                 <input id="mealid" name="mealid" value="${meal[0].id}"><br><br>
    //                                 <label for="name">Name:</label><br>
    //                                 <input type="text" id="name" name="name"><br><br>
    //                                 <label for="email">Email:</label><br>
    //                                 <input type="text" id="email" name="email" value="" placeholder="example@domain.com"><br><br>
    //                                 <label for="phonenumber">Phone number:</label><br>
    //                                 <input type="text" id="phonenumber" name="phonenumber" value=""><br><br>
    //                                 <label for="number_of_guests">Number_of_guests:</label><br>
    //                                 <input type="text" id="number_of_guests" name="number_of_guests" value=""><br><br>
    //                             </form>
    //                             <div class='error'></div>
    //                             <button onclick=postReservation()>Confirm</button><br>
    // `


    // const addReview = document.querySelector('.add-review')
    // addReview.innerHTML = `<form method="POST" id="createReview">
    //                                 <label for="mealid">Meal Id:</label><br>
    //                                 <input id="mealid" name="mealid" value="${meal[0].id}"><br></br>
    //                                 <label for="name">Name:</label><br>
    //                                 <input type="text" id="name" name="name"><br>
    //                                 <label for="description">Description:</label><br>
    //                                 <input type="text" id="description" name="description" value=""><br><br>
    //                                 <label for="stars">Stars:</label><br>
    //                                 <input type="number" id="stars" name="stars" value="">
    //                             </form>
    //                             <div class='error'></div>
    //                             <button onclick=postReview()>Confirm</button>
    // `


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
                    
                } else {
                    alert('Error during reservations');
                }
            })
    }
}


const postReview = () => {
    document.querySelector('.error').textContent = '';
    const mealid = document.getElementById('mealid').value;
    const name = document.getElementById('name1').value;
    const description = document.getElementById('description').value;
    const stars = document.getElementById('stars').value;

    if (name == '' || description == '' || stars == '') {
        document.querySelector('.error').textContent = 'Please enter all fields'
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
                } else {
                    alert('Error during review submission');
                }
            })
    }
}

