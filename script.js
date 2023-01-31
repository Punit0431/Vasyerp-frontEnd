// On click Button event Code
$('#save').on('click', function() {
var name = $('#name').val();
var email = $('#email').val();
var count = $('#myData tr').length;

if(name !="" && email!=""){
	$('#myData tbody').append('<tr class="child"><td>'+count+'</td><td>'+name+'</td><td>'+email+'</td></tr>');
}
});

