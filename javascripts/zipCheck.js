define(["jquery", "firebase", "q"], function($, firebase, Q) {

  return {

    zipCheck: function() {
      var deferred = Q.defer();
      var zipCode = $("#searchZip").val();

      if (zipCode.match(/\b\d{5}\b/g)){
        console.log("zip code is good!");
        deferred.resolve(zipCode);
      } else {
        console.log("Not a Valid Zip Code");
      }


      return deferred.promise;
    }

  };
});



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
