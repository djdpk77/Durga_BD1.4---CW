const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Function to return a welcome message
function getWelcomeMessage() {
  return 'Welcome to our service!';
}

//Endpoint 1: Create an endpoint that returns a welcome message
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

//Function to return a greeting message
function getGreetingMessage(username) {
  return 'Hello, ' + username;
}

//Endpoint 2: Create an endpoint that takes a username as a query parameter and returns a greeting message.
app.get('/greet', (req, res) => {
  let username = req.query.username;

  res.send(getGreetingMessage(username));
});

//Function to check password strength
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return 'Password is strong';
  } else {
    return 'Password is weak';
  }
}

//Endpoint 3: Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

//Function to calculate sum of 2 numbers
function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

//Endpoint 4: Create an endpoint that takes two numbers as query parameters and returns their sum.
app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

//Function to check subscription status
function checkSubscriptionStatus(username, subscribed) {
  if (subscribed === 'true') {
    return username + ' is subscribed';
  } else {
    return username + ' is not subscribed';
  }
}

//Endpoint 5: Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.
app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.isSubscribed;

  res.send(checkSubscriptionStatus(username, subscribed));
});

//Function to calculate discounted price
function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;

  return finalPrice.toString();
}

//Endpoint 6: Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(calculateDiscountedPrice(price, discount));
});

//Function to get Greeting message
function getGreeting(age, gender, name) {
  return 'Hello, ' + name + '! You are a ' + age + ' year old ' + gender + '.';
}

//Endpoint 7: Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.
app.get('/personalized-greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;

  res.send(getGreeting(age, gender, name));
});

//Function to calculate Final price 
function calculateFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);

  return finalPrice.toString();
}

//Endpoint 8: Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.
app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(calculateFinalPrice(price, discount, tax));
});

//Function to calculate total exercise time
function calculateTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

//Endpoint 9: Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.
app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(calculateTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
