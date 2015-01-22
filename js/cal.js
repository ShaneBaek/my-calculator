$(function() {

     var $result = $('#result'),
         $add = $('#add'),
         $sub = $('#sub'),
         $mult = $('#mult'),
         $div = $('#div'),
         $equals = $('#equals'),
         $number1 = $('#number1'),
         $number2 = $('#number2'),
         $operation = $('#operation');

////////operation////////  
  $add.click(function() {
    var addInput = $('#add').text();
    $('#operation').text(addInput);
  });

  $sub.click(function() {
    var subInput = $('#sub').text();
    operation = '-';
    $('#operation').text(subInput);
  });
  
  $mult.click(function() {
    var multInput = $('#mult').text();
    operation = '*';
    $('#operation').text(multInput);
  });
  
  $div.click(function() {
    var divInput = $('#div').text();
    operation = '/';
    $('#operation').text(divInput);
  });
    
//////equals button////// 
   $equals.click(function() {
     number1 = parseFloat($number1.val());
     number2 = parseFloat($number2.val());
     operation = $operation.val();
     //validate();
   });

//////validator////////
    


//////result///////
   function result() {
   	switch($operation.val()) {
   		case '+': $result.text($number1.val() + $number2.val()); break;
   		case '-': $result.text($number1.val() - $number2.val()); break;
   		case '*': $result.text($number1.val() * $number2.val()); break;
   		case '/': $result.text($number1.val() / $number2.val()); break;
   		default : $result.text('Sorry, one of those is not a valid number!');
   	}
   }


});


