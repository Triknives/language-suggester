$(document).ready(function() {
  $("form#form1".submit(function(event) {

    var interest = $("input:radio[name=interest]:checked").val();
    var fun = $("input:radio[name=fun]:checked").val();
    var colors = $("input:radio[name=colors]:checked").val();
    var style = $("input:radio[name=style]:checked").val();
    var batman = $("input:radio[name=interest]:checked").val();

    event.preventDefault();
  }
}
