//Block 18 Workshop: Writing Test Specifications

//UNIT TESTS:
//1.A function called "multiplication" that returns the product of the two input numbers.

//-Expect multiply(2,6) to be a number.
//-Expect multiply(2,6) to be equal to 12.
//-Expect multiply("two",6) to be an error.
//-Expect multiply(6) to be an error.
//-Expect multiply(2,6,9) to be an error.






//2. A function called "concatOdds" takes two arrays of integers as arguments. It should return 
// It should return a single array that only contains the odd numbers, in ascending order, 
// from both of the arrays.

//-Expect output of concatOdds() to be an array of numbers.
//-Expect output of concatOdds() to be an array of odd numbers.
//-Expect output of concatOdds() to be an array of numbers in ascending order.
//-Expect an input of only one array in concatOdds() to be an error.
//-Expect an input of more that two arrays in concatOdds() to be an error.
//-Expect an input of string numbers in the arrays to be an error.
//Expect multiples of the same odd number in the arrays to be counted only once. 






//FUNCTIONAL TESTS:
//1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), 
// or as a logged-in user. They should be allowed to do either, but should be asked if they want to 
// create an account or log in if they check out as a guest.

//-When a user clicks shoping cart and it is empty, they should be shown a message that says "Cart is empty."
//-When a user clicks shoping cart and it is empty, they should be shown an option to "Sign in to your account" and  option to "Sign up now"
//-When a user clicks "Check out", they should be shown option to "Checkout as a guest", option to "Sign in to your account" and  option to "Create account".
//-When a user clicks "Checkout as a guest", they should be shown the option to stil be able to create an account or log in.
//-When a user clicks "Checkout as a guest", they should be shown Checkout page that allows user to checkout with just their email.
//-When a user clicks "Sign in to your account", they should be shown a sign in page that allows user to enter the email and password to their current account.
//-When a user clicks "Sign in to your account" and user filled in their email and password wrong or empty, they should be shown an error. 
//-When a user clicks "Sign in to your account" and user filled in their email and password, they should be taken back to Checkout to pay. 
//-When a user clicks "Create account", they should be shown a Create account page that allows users to enter the enail and password for their new account.
//-When a user clicks "Create account" and user filled in their email and password wrong or empty, they should be shown an error. 
//-When a user clicks "Create account" and user filled in their new email and password, they should be taken back to Checkout to pay.
