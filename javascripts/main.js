requirejs.config({
    baseUrl: './javascripts',
    paths: {
        'jquery': '../lib/bower_components/jquery/dist/jquery.min',
        'lodash': '../lib/bower_components/lodash/lodash.min',
        'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
        'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
        'firebase': '../lib/bower_components/firebase/firebase',
        'q': '../lib/bower_components/q/q'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});

requirejs(

    ["jquery", "hbs", "bootstrap", "templates", "userAuth", "q", "firebase", "getWeather", "zipCheck", "date", "library"],
    function($, Handlebars, bootstrap, templates, userAuth, q, firebase, getWeather, zipCheck, date, library) {

  var zipCode = "";

  $("#login").html(templates.login);

  $(document).on("click", "#registerPage", function(e) {
    e.preventDefault();
    $("#login").html(templates.register);
  });

  $(document).on("click", "#loginPage", function(e) {
    e.preventDefault();
    $("#login").html(templates.login);
  });

  $(document).on("click", "#submitRegister", function(e){
    e.preventDefault();
    userAuth.register();
    $("#login").html(templates.login);
  });

  $(document).on("click", "#submitLogin", function(e){
    e.preventDefault();
    userAuth.logIn();
    $("#login").hide();
    $("#initialNav").html(templates.zipcode);

    // getWeather.initialSearch()
    //   .then(function(day){
    //     $("#weather1").html(templates.weather1(day));
    //   });
  });

  $(document).on("click", "#searchButton", function(e){
    e.preventDefault();
    zipCode = $("#searchZip").val();

    zipCheck.zipCheck()
      .then(function(zipCode){
        getWeather.initialSearch(zipCode)
          .then(function(weather){
            weather.day = date.dateConvert(weather.dt);
            $("#weather1").html(templates.weather1(weather));
            $("#initialNav").html(templates.fullnav);

            $(document).on("click", "#saveButton", function(e){
              library.saveForecast(weather);
            });

        // $("#3dayButton").removeClass("active");
        // $("#7dayButton").removeClass("active");
        // $("#1dayButton").addClass("active");
          });
      });
  });

  date.dateConvert(1447088400);

  $(document).on("click", "#3dayButton", function(e){
    e.preventDefault();
    getWeather.get3day(zipCode)
      .then(function(weather){
        weather.list.forEach(function(currentValue,index,array){
          currentValue.day = date.dateConvert(currentValue.dt);
        });
        $("#weather1").html(templates.weather3(weather));


        $("#1dayButton").removeClass("active");
        $("#7dayButton").removeClass("active");
        $("#3dayButton").addClass("active");
      });
  });

  $(document).on("click", "#7dayButton", function(e){
    e.preventDefault();

    getWeather.get7day(zipCode)
      .then(function(weather){
        weather.list.forEach(function(currentValue,index,array){
          currentValue.day = date.dateConvert(currentValue.dt);
        });
        $("#weather1").html(templates.weather7(weather));



        $("#1dayButton").removeClass("active");
        $("#3dayButton").removeClass("active");
        $("#7dayButton").addClass("active");
      });
  });

  $(document).on("click", "#savedUserForecast", function(e){
    e.preventDefault();
    library.getForecast()
      .then(function(saved){
        $("#weather1").html(templates.weather1(saved));
      });
  });

  $(document).on("click", "#logOut", function(e){
    e.preventDefault();
    userAuth.logOut();
    $("#weather1").hide();
    $("#initialNav").hide();
    $("#login").html(templates.login);
  });

});
