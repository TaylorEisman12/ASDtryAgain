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
							.text(notes).append(
								$('<ul>').append(
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

$('#index').live("pageshow", function(){
	$.couch.db("bills").view("app/bills", {
		success: function(data) {
			// console.log(data);
			$('#couchList').empty();
			$.each(data.rows, function(index, value) {
				var item = (value.value || value.doc);
				$('#couchList').append(
					$('<li>').append(
						$('<a>')
							.attr("href", "bills.html?bills=" + item.compName)
					)
				);
			});
			$('#couchList').listview('refresh');
		}
	});
});

var urlVars = function(urlData) {
	var urlData = $($.mobile.activePage.data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[1].split('=');
		var key = decodeURIComponet(keyValue[0]);
		var value = decodeURIComponet(keyValue[1]);
			urlValues[key] = value;
	}
	return urlValues ;
	
};

 $('#bills').live("pageshow", function(0{
	var bills = urlVars()["bills"];
	//console.log(bills);
	$couch.db("asdweek4").view("app/billDetails", {
		key: bills
		});
	});
	var urlData = $(this).data("url");
//	//	console.log(urlData);
//	var urlParts = urlData.split('?');
//		// foo?a=1&b=2&c=3
//	var urlPairs = urlParts[1].split('&');
//	var urlValues = {};
//	for (var pair in urlPairs) {
//		var keyValue = urlPairs[1].split('=');
//		var key = decodeURIComponet(keyValue[0]);
//		var value = decodeURIComponet(keyValue[1]);
//			urlValues[key] = value;
//	}
//	console.log(urlValues);
//});

