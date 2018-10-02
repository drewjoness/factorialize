//Business Logic

var factorialize = function(input) {
    var output = 1;
    for (var i = 1; i <= input; i++) {
      output = i * output;
      }
      return output;
};

//jquery user interface
$(document).ready(function(){
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var Userinput = parseInt($("input#factor").val());
    var result = factorialize(Userinput);

    $(".factor").text(result);

    $("#result").show(result);
  });
});
