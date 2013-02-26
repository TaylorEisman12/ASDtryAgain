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
						$('<a>').attr("href", "#notes")
							.text(notes)
					)
					$('#notes').append(
						$('<a>').attr("href", "#detailList")
						$('#detailList').append(
							$('<li>').append(
								.text(category, compName, compWeb, compEmail, budgetPercent, pastDue, payBy, date, notes)
							)
						)
					)
				);
			});
			
	
			$('#couchList').listview('refresh');
			
			
			console.log("need to have all data display when bill selected.");
			console.log(compName);
			console.log(compWeb);
			console.log(budgetPercent);
			console.log(pastDue);
			console.log(notes);
			console.log(compEmail);
			console.log(category);
			console.log(payBy);
			console.log(date);
		}
	});
});


