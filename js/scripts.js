var countUp = function(countTo, countBy) {
  var arr = [];
  for (var counter = countBy; counter <= countTo; counter += countBy) {
    arr.push(counter);
  }
  return arr;
};

$(document).ready(function() {
  $("form#countUp").submit(function(event) {
    var countUpTo = parseInt($("input#upTo").val());
    var incrementBy = parseInt($("input#countBy").val());
    var result = countUp(countUpTo, incrementBy);

    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
