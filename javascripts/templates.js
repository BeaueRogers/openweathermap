define(["hbs",
        "hbs!../templates/login",
        "hbs!../templates/weather1",
        "hbs!../templates/register"],

function(handlebars, login, weather1, register) {

  var templates = {};
  templates.login = login;
  templates.weather1= weather1;
  templates.register = register;

  return templates;

});
