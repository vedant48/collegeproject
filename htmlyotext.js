fetch("http://www.iiitmanipur.ac.in/")
.then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
	console.log(html);

var strippedHtml = html.replace(/<[^>]+>/g, '');

// Jimbo.
// That's what she said
console.log(strippedHtml);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});



// function convertToPlain(html){

//   // Create a new div element
//   var tempDivElement = document.createElement("div");

//   // Set the HTML content with the given value
//   tempDivElement.innerHTML = html;

//   // Retrieve the text property of the element 
//   return tempDivElement.textContent || tempDivElement.innerText || "";
// }

// var htmlString= "<div><h1>Bears Beets Battlestar Galactica </h1>\n<p>Quote by Dwight Schrute</p></div>";


// console.log(convertToPlain(htmlString));