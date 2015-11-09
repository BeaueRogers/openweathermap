define(["hbs",
        "hbs!../templates/login",
        "hbs!../templates/weather1",
        "hbs!../templates/zipcodesearch",
        "hbs!../templates/register"],

function(handlebars, login, weather1, zipcode, register) {

  var templates = {};
  templates.login = login;
  templates.weather1 = weather1;
  templates.zipcode = zipcode;
  templates.register = register;

  return templates;

});
