define(["jquery", "q"], function($, Q) {

  return {

    dateConvert: function(dt) {

      var convertedDateTime = new Date(dt * 1000);
      var convertedMonth = convertedDateTime.getMonth() + 1;
      var convertedDay = convertedDateTime.getDate();
      var convertedYear = convertedDateTime.getFullYear();

      return (convertedMonth + "-" + convertedDay + "-" + convertedYear);
    }

  };
});
