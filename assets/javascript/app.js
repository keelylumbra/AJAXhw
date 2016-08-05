
$(document).ready(function(){

// Initial array of movies
		var foods = ['bacon', 'hamburger', 'waffle', 'cheese'];

		// ========================================================

		// displayMovieInfo function now re-renders the HTML to display the appropriate content.
		function displayGIFInfo() {



			var results

				

				 food = $(this).attr('data-name');
			

				
				
				 $('#gifsView').empty()
                	



			// Creates AJAX call for the specific movie being
			$.ajax({url: "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=10", method: 'GET'}).done(function(response) {




				var results = response.data;

                for (var i = 0; i<11; i++) {


                 gifDiv = $('<div class="item col-md-4">')

                    var rating = results[i].rating;

              

                    var p = $('<p>').text("Rating: " + rating);
                    var $imgs = $('<img class="img" width="200px" height="150px" data-still="' + results[i].images.downsized_still.url  + '" data-animate="'+ results[i].images.downsized_medium.url + '" src=" ' + results[i].images.downsized_still.url  + ' "><data-state="still"></span>');

                    

                    gifDiv.append(p)
                    gifDiv.append($imgs)

                    $('#gifsView').prepend(gifDiv);
                

				// Creates a generic div to hold the movie
		
				// Retrieves the Rating Data


			$($imgs).on('click', function(){

				// Creates an element to have the rating displayed
            var state = $(this).data('state');

	        //----------------------------------------------------


            if (state == 'still'){
                $(this).data('state', 'animate').attr('src', $(this).data('animate'));
            }

            else {
                $(this).data('state', 'still').attr('src', $(this).data('still'));
            }



		
})
			
//			
			




	


 }







		})
		
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
				a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
				a.addClass("food btn btn-warning btn-lg"); // Added a class
				a.attr('data-name', foods[i]); // Added a data-attribute
				a.text(foods[i]); // Provided the initial button text
				$('#buttonsView').append(a); // Added the button to the HTML
			}
		}

		// ========================================================

		// This function handles events where one button is clicked
		$('#addFood').on('click', function() {

			// This line of code will grab the input from the textbox
			 food = $('#food-form').val();

			// The food from the textbox is then added to our array
			foods.push(food);

		
			// Our array then runs which handles the processing of our movie array
			renderButtons();

			// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
			return false;
		})


		// ========================================================


		renderButtons();

		// Generic function for displaying the movieInfo
		$(document).on('click', '.food', displayGIFInfo);

		// ========================================================

		// This calls the renderButtons() function
	

})

