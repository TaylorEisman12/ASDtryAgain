$('#index').on('pageinit', function(){
	//code needed for home page goes here
	/*$('#addBill').on('click', function(){

		var myForm = $('#addBill');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});*/
	
	//any other code needed for addItem page goes here
	
});	

$( '#remoteData' ).on('pageinit', function(){

	 $( '#jsonButton' ).on( 'click', function () {
		$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.json',
            type: 'GET',
            dataType: 'json',
            success:function ( result ) {
				//console.log(result);
                for ( var i = 0, len = result.bills.length; i < len; i++ ) {
                    var item = result.bills[i];
					//console.log(item);
                    $( ' ' + 
					'<div class="bills">' +
					'<p>' + item.compName[0]      + " " + item.compName[1] +
					'<br>' + item.category[0]   + " " + item.category[1] + 
					'<br>' + item.compEmail[0] + " " + item.compEmail[1] + 
					'<br>' + item.compWeb[0]    + " " + item.compWeb[1] +
					'<br>' + item.payBy[0]    + " " + item.payBy[1] +
					'<br>' + item.pastDue[0]    + " " + item.pastDue[1] +
					'<br>' + item.budgetPercent[0]    + " " + item.budgetPercent[1] +
					'<br>' + item.date[0]        + " " + item.date[1] +
					'<br>' + item.notes[0]       + " " + item.notes[1] + '</p>' +
					'</div>'
					).appendTo( '#viewData' );
                }
            }
        });
    });

	$( '#xmlButton' ).on( 'click', function() {
		$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.xml',
            type: 'GET',
            dataType: 'xml',
            success:function ( result ) {
				//console.log(result);
				$(result).find('item').each(function(){
					 var compName = $(this).find('compName').text();
                        var category = $(this).find('category').text();
                        var compEmail = $(this).find('compEmail').text();
                        var compWeb = $(this).find('compWeb').text();
                        var payBy = $(this).find('payBy').text();
                        var pastDue = $(this).find('pastDue').text();
                        var budgetPercent = $(this).find('budgetPercent').text();
                        var date = $(this).find('date').text();
                        var notes = $(this).find('notes').text();
                        $(' '+
                            '<div class="contentXML">' +
                                '<ul>' +
                                    '<li> Company Name: ' + compName + '</li>' +
                                    '<li> Category: ' + category + '</li>' +
                                    '<li> Company Email: ' + compEmail + '</li>' +
                                    '<li> Company Website: ' + compWeb + '</li>' +
                                    '<li> PayBy: ' + payBy + '</li>' +
                                    '<li> Past Due: ' + pastDue + '</li>' +
                                    '<li> Budget Percent: ' + budgetPercent + '</li>' +
                                    '<li> Date Added: ' + date + '</li>' +
                                    '<li> Notes: ' + notes + '</li>' +
                                    '</ul>' +
                            '</div>'
					).appendTo('#viewData');
				});
            }
        });
    });
	
	
	$( '#csvButton' ).on( 'click', function() {
		$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.csv',
            type: 'GET',
            dataType: 'text',
            success:function ( result ) {
				//console.log(result);
				var lines = result.split("\n");
				//console.log(lines);
				var dataRow = lines[0];
				var dataCol = dataRow.split(",");
				for (var lineNum = 1; lineNum < lines.length; lineNum++) {
					var row = lines[lineNum];
					var columns = row.split(",");
					//console.log(columns);
					$(''+
							'<div class="csvData">'+
								'<p>' + dataCol[0] + " " + columns[0] +
								'<br>'+ dataCol[1] + " " + columns[1] +
								'<br>'+ dataCol[2] + " " + columns[2] +
								'<br>'+ dataCol[3] + " " + columns[3] +
								'<br>'+ dataCol[4] + " " + columns[4] +
								'<br>'+ dataCol[5] + " " + columns[5] +
								'<br>'+ dataCol[6] + " " + columns[6] +
								'<br>'+ dataCol[7] + " " + columns[7] +
								'<br>'+ dataCol[8] + " " + columns[8] + '</p>' +
							'</div>'
						).appendTo('#viewData');
				}
            }
        });
    });

});

$( '#all' ).on('pageinit', function(){

		$('#allBills').empty();
        $.ajax( {
            url: 'xhr/data.json',
            type: 'GET',
            dataType: 'json',
            success:function ( result ) {
				//console.log(result);
                for ( var i = 0, len = result.bills.length; i < len; i++ ) {
                    var item = result.bills[i];
					//console.log(item);
                    $( ' ' + 
					'<div class="bills">' +
					'<p>' + item.compName[0]      + " " + item.compName[1] +
					'<br>' + item.category[0]   + " " + item.category[1] + 
					'<br>' + item.compEmail[0] + " " + item.compEmail[1] + 
					'<br>' + item.compWeb[0]    + " " + item.compWeb[1] +
					'<br>' + item.payBy[0]    + " " + item.payBy[1] +
					'<br>' + item.pastDue[0]    + " " + item.pastDue[1] +
					'<br>' + item.budgetPercent[0]    + " " + item.budgetPercent[1] +
					'<br>' + item.date[0]        + " " + item.date[1] +
					'<br>' + item.notes[0]       + " " + item.notes[1] + '</p>' +
					'</div>'
					).appendTo( '#allBills' );
                }
            }
        });
});

/*	$('#addBill').on('click', function(){

		var myForm = $('#addBill');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 .each(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
};

var getData = function(){
	$("#addBill").empty();
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no Local Storage so default data was added.");
			autoFillData();
		}
		var makeDiv = $('<div>');
		makeDiv.attr("id", "items");
		var makeList = $('<ul>');
		makeDiv.append(makeList);
		document.body.appendChild(makeDiv);
		$('#bills').append(makeDiv);
		$('#items').show();
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = $('<li>');
			var linksLi = $('<li>');
			makeList.append(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = $('<ul>');
			makeli.append(makeSubList);
			getImage(obj.category[1], makeSubList);
			for(var n in obj){
				var makeSubli = $('<li>');
				makeSubList.append(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.text(optSubText);
				makeSubList.append(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);
		}

};





var storeData = function(data){
	if(!key){
			var id			= Math.floor(Math.random()*100000001);
		}else{
			id = key;
		}
		getSelectedRadio();
		getCheckboxValue();
		
		var item					= {};
			item.compName			= ["Company Name: ", $('#compName').val()];
			item.category			= ["Category: ", $('#category').val()];
			item.compEmail		= ["Company Email: ", $('#compEmail').val()];
			item.compWeb		= ["Company Website: ", $('#compWeb').val()];
			item.payBy			= ["PayBy: ", payByValue];
			item.pastDue			= ["Past Due: ", pastDue];
			item.budgetPercent		=["Budget Percent: " , $('#budgetPercent').value];
			item.date			= ["Date Added: ", $('#date').value];
			item.notes		= ["Notes: ", $('#notes').val()];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Bill Saved!");
		save.off("click");
		save.on("click", storeData);
		window.location.reload();
	
	};
	
	var getSelectedRadio = function(){
	var radios = function (){
		$('input:radio[name="addToFav"]:checked').val();
		return($('input:radio[name="addToFav"]:checked').val());

};

}; 

var	deleteItem = function (){
	var ask = confirm("Are you sure you want to delete this bill?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Bill was deleted.");
			window.location.reload();
		}else{
			alert("Bill was not deleted.");
		}		
};
					
var clearLocal = function(){
	if(localStorage.length === 0){
			alert("No data to clear.");
		}else{
			localStorage.clear();
			alert("All Bills are deleted");
			window.location.reload();
			return false;
		}
	}
	
	var pastDueValue,
		pastDueValue = "No",
		errMsg = ge('errors');
	
	makeCats();

	var clearLink = ge('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = ge('submit');
	save.addEventListener("click", validate);

};
*/
