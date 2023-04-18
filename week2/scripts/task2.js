/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let myName = "Osabuohien Randalf Ehigiator"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector('#name').textContent = myName

// Step 3: declare and instantiate a variable to hold the current year

let year = "2023"

// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = year

// Step 5: declare and instantiate a variable to hold the name of your picture

let myImage = "images/mypicture.jpg"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', myImage)




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

favFood = ['Banga Soup', 'Fried Rice', 'Jollof Rice', 'Beans', 'Egusi']

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').innerHTML = favFood
// Step 3: declare and instantiate a variable to hold another favorite food

favFood2 = ['Yam and Owo', 'Garri and Milk', 'Corned Flakes']

// Step 4: add the variable holding another favorite food to the favorite food array

document.querySelector('#food').append(favFood2)
// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favFood

// Step 6: remove the first element in the favorite foods array
favFood.shift(1)

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favFood

// Step 8: remove the last element in the favorite foods array
favFood.pop(3)

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favFood



