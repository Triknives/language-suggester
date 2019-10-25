$(document).ready(function() {
  $("form#form1".submit(function(event) {

    var interest = $("input:radio[name=interest]:checked").val();
    var fun = $("input:radio[name=fun]:checked").val();
    var colors = $("input:radio[name=colors]:checked").val();
    var style = $("input:radio[name=style]:checked").val();
    var batman = $("input:radio[name=interest]:checked").val();

    event.preventDefault();

    if (interest === "hamburger" && fun === "kit" && style === "complex") {
      $("#language").text("Swift");
    }
    else if (interest === "hotdog" && fun === "tesla" && style === "simple") {
      $("#language").text("Go");
    }
    else if (interest === "altoid" && fun === "volkswagen" && style === "established") {
      $("#language").text("Ruby");
    }
  });
});
