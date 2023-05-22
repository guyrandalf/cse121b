/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();
// Step 2: Declare another variable to hold the day of the week
let weekday;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
weekday = today.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let ifMessage;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (weekday > 0 && weekday <= 5) {
	ifMessage = "Hang in there!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
	ifMessage = "Woohoo!  It is the weekend!";
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let switchMessage;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

/* OUTPUT */

switch (weekday) {
	case 0:
		switchMessage = "Sunday";
		break;

	case 1:
		switchMessage = "Monday";
		break;

	case 2:
		switchMessage = "Tuesday";
		break;

	case 3:
		switchMessage = "Wednesday";
		break;

	case 4:
		switchMessage = "Thursday";
		break;

	case 5:
		switchMessage = "Friday";
		break;

	case 6:
		switchMessage = "Saturday";
		break;

	default:
		break;
}

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerHTML = ifMessage;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerHTML = switchMessage;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
const output = async (temples) => {
	temples.forEach((temple) => {
		let article = document.createElement("article");

		let nameH3 = document.createElement("h3");
		nameH3.innerHTML = temple.templeName;

		let locationH4 = document.createElement("h4");
		locationH4.innerHTML = temple.location;

		let dedicationDateH4 = document.createElement("h4");
		dedicationDateH4.innerHTML = temple.dedicated;

		let image = document.createElement("img");
		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", temple.templeName);

		article.appendChild(nameH3);
		article.appendChild(locationH4);
		article.appendChild(dedicationDateH4);
		article.appendChild(image);

		document.querySelector("#temples").appendChild(article);
	});
};
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

const getTemples = async (url) => {
	await fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();			
		})
		.then((data) => {
			temples = data;
			output(temples);
            // console.log(temples);
		})
		.catch((error) => {
			console.log(error);
		});
};

getTemples(url);
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
	document.querySelector("#temples").innerHTML = "";
};
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
const sortBy = () => {
	reset();

	let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "templeNameAscending":
      output(
        temples.sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (templeName1 < templeName2) return -1;
          else if (templeName1 > templeName2) return 1;
          else return 0;
        })
      );
      break;
    case "templeNameDescending":
      output(
        temples.sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (templeName1 > templeName2) return -1;
          else if (templeName1 < templeName2) return 1;
          else return 0;
        })
      );
      break;
    default:
      // using ternary operators
      output(
        temples.sort((temple1, temple2) =>
          temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
            ? 1
            : temple2.templeName.toLowerCase() >
              temple1.templeName.toLowerCase()
            ? -1
            : 0
        )
      );
      break;
  }
};

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);

currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

const showCurrentYear = document.querySelector("#year");
showCurrentYear.innerHTML = currentYear;
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
const filterBy = () => {
    reset();
  
    let filters = document.querySelector("#filter").value;
  
    switch (filters) {
      case "Bountiful":
        filterPrompt("Bountiful");
        break;
      case "Brigham City":
        filterPrompt("Brigham City");
        break;
      case "Cedar City":
        filterPrompt("Cedar City");
        break;
      case "Draper":
        filterPrompt("Draper");
        break;
      case "Jordan River":
        filterPrompt("Jordan River");
        break;
      case "Logan":
        filterPrompt("Logan");
        break;
      case "Manti":
        filterPrompt("Manti");
        break;
      case "Monticello":
        filterPrompt("Monticello");
        break;
      case "Mount Timpanogos":
        filterPrompt("Mount Timpanogos");
        break;
      case "Ogden":
        filterPrompt("Ogden");
        break;
      case "Oquirrh Mountain":
        filterPrompt("Oquirrh Mountain");
        break;
      case "Payson":
        filterPrompt("Payson");
        break;
      case "Provo":
        filterPrompt("Provo");
        break;
      case "Salt Lake":
        filterPrompt("Salt Lake");
        break;
      case "St. George":
        filterPrompt("St. George");
        break;
      case "Vernal":
        filterPrompt("Vernal");
        break;
      default:
        output(temples);
    }
  }
  
  const filterPrompt = (prompt) => {
    output(
      temples.filter((temple) => {
        if(temple.templeName.includes(prompt))
          return true;
          else return false;
      })
    );
  }
  
  document.querySelector("#filter").addEventListener("click", filterBy);
