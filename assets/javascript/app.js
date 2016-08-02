
$(document).ready(function(){

// Initial array of movies
		var foods = ['bacon', 'hamburger', 'waffle', 'cheese'];

		// ========================================================

		// displayMovieInfo function now re-renders the HTML to display the appropriate content.
		function displayGIFInfo() {

			$("#gifsView").empty();

			var food = $(this).attr('data-name');
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=10";

			// Creates AJAX call for the specific movie being
			$.ajax({url: queryURL, method: 'GET'}).done(function(response) {


				// Creates a generic div to hold the movie
				var $div = $("<div>");
				// Retrieves the Rating Data

				// Creates an element to have the rating displayed

			


				
				var $rating = $('<span class="rating">' + response.data[0].rating + '</span><br>');
				// Displays the rating

				$div.append($rating);
			

				// Creates an element to hold the image
				var $imgs = $('<img class="img"  alt="Static Image" data-alt="'+ response.data[0].images.downsized_medium.url + '" src=" ' + response.data[0].images.downsized_still.url + ' "></span>');

				// Appends the image
				$div.append($imgs);

				

				$('#gifsView').append($div);

			
//			
		




		//on click change to GIF function

$('img').on({
    'click': function() {
         var src = ($(this).attr('src') === response.data[0].images.downsized_medium.url)
            ? response.data[0].images.downsized_still.url
            : response.data[0].images.downsized_medium.url;
         $(this).attr('src', src);
    }
});

 });







		}

		// ========================================================

		// Generic function for displaying movie data
		function renderButtons() {

			// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
			$('#buttonsView').empty();

			// Loops through the array of movies
			for (var i = 0; i < foods.length; i ++) {

				// Then dynamicaly generates buttons for each movie in the array

				// Note the jQUery syntax here...
				var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
				a.addClass('food'); // Added a class
				a.attr('data-name', foods[i]); // Added a data-attribute
				a.text(foods[i]); // Provided the initial button text
				$('#buttonsView').append(a); // Added the button to the HTML
			}
		}

		// ========================================================

		// This function handles events where one button is clicked
		$('#addFood').on('click', function() {

			// This line of code will grab the input from the textbox
			var food = $('#input-form').val().trim();

			// The movie from the textbox is then added to our array
			foods.push(food);

			// Our array then runs which handles the processing of our movie array
			renderButtons();

			// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
			return false;
		});

		// ========================================================

		// Generic function for displaying the movieInfo
		$(document).on('click', '.food', displayGIFInfo);

		// ========================================================

		// This calls the renderButtons() function
		renderButtons();


})