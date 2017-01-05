$(function() {
	var itemTotal = 0;

	$('#item').submit(function() {
		event.preventDefault();
		addToDoItem()
	});

	$('#itemCount').html("You have " + itemTotal + " things to do.")

	function addToDoItem() {
		var toDoItem = $('#newToDo').val();

		$('#toDoItems').append('<tr><th></th><th>' + toDoItem + '</th></tr>');

		$('#newToDo').val('')

		itemTotal += itemTotal
	}

})