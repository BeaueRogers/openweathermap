define(["jquery", "q", "firebase"], function($, Q, firebase) {

  var ref = new Firebase("https://bl-weather-app.firebaseio.com/");

  return{

    saveForecast: function(weather){
      ref.child("users").child(ref.getAuth().uid).set(weather);
    },

    getForecast: function(){

      var deferred = Q.defer();

      $.ajax("https://bl-weather-app.firebaseio.com/users/"+ref.getAuth().uid+".json")
      .done(function(saved){
        deferred.resolve(saved);
        console.log("pull for firebased works with: ",saved);
      });
      return deferred.promise;
    }

  };
});
