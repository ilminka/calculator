var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function()  {
    $("form#math").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#math1").val());
      var number2 = parseInt($("#math2").val());
      var result = add(number1, number2);
      console.log(result);
      $("#output").text(result);
  });

  $("form#math").submit(function(event) {
     event.preventDefault();
     var number1 = parseInt($("#math1").val());
     var number2 = parseInt($("#math2").val());
     var result = subtract(number1, number2);
     console.log(result);
     $("#output").text(result);
   });

   $("form#math").submit(function(event) {
       event.preventDefault();
       var number1 = parseInt($("#math1").val());
       var number2 = parseInt($("#math2").val());
       var result = multiply(number1, number2);
       console.log(result);
       $("#output").text(result);
     });

     $("form#math").submit(function(event) {
         event.preventDefault();
         var number1 = parseInt($("#math1").val());
         var number2 = parseInt($("#math2").val());
         var result = divide(number1, number2);
         console.log(result);
         $("#output").text(result);
       });
});

// $(document).ready(function() {
//   $("form#math").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#math1").val());
//     var number2 = parseInt($("#math2").val());
//     var result = add(number1, number2);
//     $("#output").text(result);
//   });
//
//   $("form#math").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#math1").val());
//     var number2 = parseInt($("#math2").val());
//     var result = subtract(number1, number2);
//     $("#output").text(result);
//   });
//
//   $("form#math").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#math1").val());
//     var number2 = parseInt($("#math2").val());
//     var result = multiply(number1, number2);
//     $("#output").text(result);
//   });
//
//   $("form#math").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#math1").val());
//     var number2 = parseInt($("#math2").val());
//     var result = divide(number1, number2);
//     $("#output").text(result);
//   });
// });
