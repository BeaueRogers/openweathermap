define(["hbs",
        "hbs!../templates/login",
        "hbs!../templates/weather1",
        "hbs!../templates/weather3",
        "hbs!../templates/weather7",
        "hbs!../templates/zipcodesearch",
        "hbs!../templates/fullnav",
        "hbs!../templates/register"],

function(handlebars, login, weather1, weather3, weather7, zipcode, fullnav, register) {

  var templates = {};
  templates.login = login;
  templates.weather1 = weather1;
  templates.weather3 = weather3;
  templates.weather7 = weather7;
  templates.zipcode = zipcode;
  templates.fullnav = fullnav;
  templates.register = register;

  return templates;

});
