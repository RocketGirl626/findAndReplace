var findAndReplace = function(inString, findString, replaceString) {

  var stringOne = inString;
  var stringTwo = findString;
  var stringThree = replaceString;

  var res = stringOne.replace(stringTwo, stringThree);

  return res;
}

$(document).ready(function() {
  $("form#findAndReplace").submit(function(event) {
    var inString = $("input#stringOne").val();
    var findString = $("input#stringTwo").val();
    var replaceString = $("input#stringThree").val();
    var result = findAndReplace(inString, findString, replaceString);

    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
