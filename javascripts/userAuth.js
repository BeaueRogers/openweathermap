define(["jquery", "firebase", "q"], function($, firebase, Q) {

  var ref = new Firebase("https://bl-weather-app.firebaseio.com/");

  return {

    logIn: function(){
      var userMem = {};
      userMem.mail = $('#emailLogin').val();
      userMem.pwd = $("#pwdLogin").val();

      if(userMem.mail !== "" && userMem.pwd !== ""){
        var deferred = Q.defer();
        ref.authWithPassword({
          email: userMem.mail,
          password: userMem.pwd
        }, function (error, authData) {
          if (error) {
           //handle error
          } else {
            deferred.resolve(authData.uid);
          }
        }); //end callback

       return deferred.promise;
      }

    }, //end logIn fxn

    register: function(){
      var newUser = {};
      newUser.email = $("#emailRegister").val();
      newUser.pwd = $("#pwdRegister").val();

      var deferred = Q.defer();

      ref.createUser({
        password: newUser.pwd,
        email: newUser.email
      }, function(error, authData) {
        if (error) {
          console.log("Error in creating Acct: ", error);
        } else {
          console.log("Success at Registering!");
          deferred.resolve(authData.uid);
        }
      });
      return deferred.promise;
    }, //end register fxn

    logOut: function(){
      var deferred = Q.defer();

      ref.unauth();

      return deferred.promise;
    } //end logOut fxn

  }; //end of return

}); //end of define
