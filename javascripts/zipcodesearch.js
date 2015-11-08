define(function(require) {
  var $ = require("jquery");
 // alert("THIS EXISTS");
 $(document).on("click", "#searchButton", function(e) {
    if($("#searchZip").val() = /^[0-9]{5}?$/)  {
      e.preventDefault();
      console.log("value of search field", $("#searchZip").val());
      $("#ziphtml").val().append("#searchZip").val();
    } else {
      alert("please enter a proper 5 digit U.S. postal code")
    }
  })
});

/*
define(function(require) {
  var $ = require("jquery");
 // alert("THIS EXISTS");
 $(document).on("click", "#searchButton", function(e) {
    if($("#searchZip").val() = /^[0-9]{5}?$/)  {
      e.preventDefault();
      console.log("value of search field", $("#searchZip").val());
    } else {
        alert("You must enter a valid zipcode");
    }
  })
});

*/



/*
Zip Code Setup (HTML):

given a user wants to view weather information
when the user visits your initial view
then there should be an input field to accept a zip code value

given a user wants to view weather information
when the user visits your initial view
then there should be a submit button next to the zip code field

Zip Code Validation (Javascript):

given a user has entered in some text into the zip code field
when the user presses the enter key
or the user clicks the submit button
then the value should be validated as a zip code (5 digit number)
*/
