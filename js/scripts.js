$(document).ready(function() {
  $("#form1").submit(function(event) {

    var interest = $("input:radio[name=interest]:checked").val();
    var fun = $("input:radio[name=fun]:checked").val();
    var colors = $("input:radio[name=colors]:checked").val();
    var style = $("input:radio[name=style]:checked").val();
    var batman = $("input:radio[name=batman]:checked").val();

    $(".resultsbox").hide();

    event.preventDefault();

    if (interest === "hamburger" && fun === "kit" && style === "complex"){
      $("#language").text("Swift");

      $(".resultsbox").show();
    }
    else if (interest === "hotdog" && fun === "tesla" && style === "simple"){
      $("#language").text("Go");

      $(".resultsbox").show();
    }
    else if (interest === "altoid" && fun === "volkswagen" && style === "established"){
      $("#language").text("Ruby");

      $(".resultsbox").show();
    }
    else if (interest === "hamburger" && fun === "kit" && colors === "green"){
      $("#language").text("Swift");

      $(".resultsbox").show();
    }
    else if (interest === "altoid" && fun === "tesla" && style === "established"){
      $("#language").text("Ruby");

      $(".resultsbox").show();
    }
    else if (batman === "affleck" && fun === "tesla" && style === "complex"){
      $("#language").text("Swift");

      $(".resultsbox").show();
    }
    else if (batman === "bale" && fun === "tesla" && style === "complex"){
      $("#language").text("Go");

      $(".resultsbox").show();
    }
    else if (batman === "keaton" && fun === "tesla" && style === "complex"){
      $("#language").text("Ruby");

      $(".resultsbox").show();
    }
    else
    {
      $("#language").text("Ruby");

      $(".resultsbox").show();
    };
  });
});
