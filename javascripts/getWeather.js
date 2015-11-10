define(["jquery", "q"], function($, Q) {

  // var ref = new Firebase("https://bl-weather-app.firebaseio.com/");

  return {
    initialSearch: function(zipCode){

      var deferred = Q.defer();
      // zipCode = $("#searchZip").val();
      var searchString = "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&APPID=87698b85f315acbeb3085f389d2fb89b";

      $.ajax({url:searchString})
        .done(function(json_data){
          console.log(json_data);
          deferred.resolve(json_data);
        }).fail(function(xhr,status,error){
          console.log("error");
          deferred.reject(error);
        });
      return deferred.promise;
    },

    get3day: function(zipCode){

      var deferred = Q.defer();
      var searchString = "http://api.openweathermap.org/data/2.5/forecast/daily?zip="+zipCode+",us&cnt=3&APPID=87698b85f315acbeb3085f389d2fb89b";

      $.ajax({url:searchString})
        .done(function(json_data){
          console.log(json_data);
          deferred.resolve(json_data);
        }).fail(function(xhr,status,error){
          console.log("error");
          deferred.reject(error);
        });
      return deferred.promise;
    },

    get7day: function(zipCode) {

      var deferred = Q.defer();
      var searchString = "http://api.openweathermap.org/data/2.5/forecast/daily?zip="+zipCode+",us&cnt=7&APPID=87698b85f315acbeb3085f389d2fb89b";

      $.ajax({url:searchString})
        .done(function(json_data){
          console.log(json_data);
          deferred.resolve(json_data);
        }).fail(function(xhr,status,error){
          console.log("error");
          deferred.reject(error);
        });
      return deferred.promise;
    }

  };
});
