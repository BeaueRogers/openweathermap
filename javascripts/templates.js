define(["hbs",
        "hbs!../templates/login",
        "hbs!../templates/register"],

function(handlebars, login, register) {

  var templates = {};
  templates.login = login;
  templates.register = register;

  return templates;

});
