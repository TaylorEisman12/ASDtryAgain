$(document).ready(function() {
	$.ajax({
		"url": "_view/bills",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, bill){
				var compName = bill.value.compName;
				var compWeb = bill.value.compWeb;
				var category = bill.value.category;
				var compEmail = bill.value.compEmail;
				var pastDue = bill.value.pastDue;
				var payBy = bill.value.payBy;
				var budgetPercent = bill.value.budgetPercent;
				var notes = bill.value.notes;
				var date = bill.value.date;
				$('#couchList').append(
					$('<li>').append(
						$('<a>').attr("href", "#")
							.text(notes)
					)
				);
			});
			$('#couchList').listview('refresh');
		}
	});
});


