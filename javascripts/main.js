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
    ["jquery", "hbs", "bootstrap", "templates", "userAuth", "q", "firebase"],
    function($, Handlebars, bootstrap, templates, userAuth, q, firebase) {

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
    $("#initialNav").html();
  });

  $(document).on("click", "#logOut", function(e){
    e.preventDefault();
    userAuth.logOut();
    // First Hide all App Divs
    $("#login").html(templates.login);
  });

});
