$(document).ready(function() {
	$.getJSON('xhr/pages.json',function(json){
		console.log(json);
		$.each(json, function() {
    		alert("Do Something Here");
    	});
    });
});
/*'<section id="'+pages[i].sectionId+'" data-role="page" data-add-back-btn="true">'+
			'<header data-role="header"><h1>'+pages[i].header+'</h1></header>'+
			'<div data-role="content" class="content">'+
				'<div data-role="fieldcontain" id="'+pages[i].id+'">'+
				'</div>'+
			'</div>'+
			'<div data-role="footer" data-position="fixed">'+
				'<div data-role="navbar">'+
					'<ul>'+
						'<li><a href="#remoteData" data-icon="plus">Remote Data</a></li>'+
						'<li><a href="#index" data-icon="home">Home</a></li>'+
						'<li><a href="#localStorage" data-icon="search">Local Storage</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
		'</section>'*/
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

	
	

// function to for basic page load with variables for which page selected on index.
// instead of each page with its own code.
// var page = function for click on which id to be saved
// $('page').on('pageinit', function(){
//		all code needed same as below
//		.appendTo('page');	
//};

/*
	HTML button values = "which button"
	$('button').each(function(){
		var JSONData =  get JSON data
		var button_value = $(this).val();
			$.each(JSONData, function(i,item){
				if(item.bills.category == button_value){
				append to #allBills
				}
			});
		});
		});

*/

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

$('#cell').on('pageinit', function(){
	
	$('#cellBills').empty();
	$.ajax( {
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success:function ( result ) {
				//console.log(result);
				 //$.each( result, function(i, item ){
				//		if(item.category == "Cell"){
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
					).appendTo( '#cellBills' );
                }
            }
        });
});

$('#car').on('pageinit', function(){
	
	$('#carBills').empty();
	$.ajax( {
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success:function ( result ) {
				//console.log(result);
				// if ( result.bills.category == "car" )
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
					).appendTo( '#carBills' );
                }
            }
        });
});

$('#rent').on('pageinit', function(){
	
	$('#rentBills').empty();
	$.ajax( {
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success:function ( result ) {
				//console.log(result);
				// if ( result.bills.category == "rent" )
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
					).appendTo( '#rentBills' );
                }
            }
        });
});

$('#cable').on('pageinit', function(){
	
	$('#cableBills').empty();
	$.ajax( {
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success:function ( result ) {
				//console.log(result);
				// if ( result.bills.category == "cable" )
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
					).appendTo( '#cableBills' );
                }
            }
        });
});

$('#addBill').on('pageinit', function(){
	$('#submit').on('click', function(e){
		e.preventDefault();
		var itemId = $('now');
		
		var item					= {};
			item.category			= ["Category: ", $('categories').value];
			item.compName			= ["Company Name: ", $('compName').value];
			item.compEmail			= ["Company Email: ", $('compEmail').value];
			item.compWeb			= ["Company Website: ", $('compWeb').value];
			item.payBy				= ["Pay By: ", $('payBy').value];
			item.pastDue			= ["Past Due: ", $('pastDue').value];
			item.budgetPercent		= ["Percent of Budget: ", $('budgetPercent').value];
			item.date				= ["Date Added: ", $('date').value];
			item.notes				= ["Notes: ", $('notes').value];
		
		localStorage.setItem(itemId, JSON.stringify(item));
		alert("Bill Saved!");
		//console.log(compName);
	});
		 //alert("Page Loaded");
});

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
/*					
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

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

/*var autofillData = function (){
	 .each(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
};*/

var getData = function(){
	$("#localStorageView").empty();
		if(localStorage.length === 0){
			alert("There is no Local Storage.");		
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


/*
function BPupdate(e){
	document.getElementById('BPValue').innerHTML = e;	
}

	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	function makeCats(){
		var formTag = $('form'),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "categories");         
			
		for(var i=0, j=billCategories.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = billCategories[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	function getSelectedRadio(){
		var radios = document.forms[0].payBy;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
			payByValue = radios[i].value;
			}
		}
	}
	
	function getCheckboxValue(){
		if($('pastDue').checked){
			pastDueValue = $('pastDue').value;
		}else{
			pastDueValue = "No"
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('billDetails').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('billDetails').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}

	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no Local Storage so default data was added.");
			autoFillData();
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "display";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			getImage(obj.category[1], makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);
		}
	}
	
	function getImage(catName, makeSubList){
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImage = document.createElement('img');
		var setSrc = newImage.setAttribute("src", "images/"+ catName + ".png");
		imageLi.appendChild(newImage);
	}
	
	function autoFillData(){
		for(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}
	*/
	function makeItemLinks(key, linksLi){
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Bill";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Bill";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}

	function editItem(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		toggleControls("off");
		
		$('categories').value = item.category[1];
		$('compName').value = item.compName[1];
		$('compEmail').value = item.compEmail[1];
		$('compWeb').value = item.compWeb[1];
		var radios = document.forms[0].payBy;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Internet" && item.payBy[1] == "Internet"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value == "Mail" && item.payBy[1] == "Mail"){
				radios[i].setAttribute("checked", "checked");
			}
		}
		if(item.pastDue[1] == "Yes"){
			$('pastDue').setAttribute("checked", "checked");
		}
		$('budgetPercent').value = item.budgetPercent[1];
		$('date').value = item.date[1];
		$('notes').value = item.notes[1];
		
		save.removeEventListener("click", storeData);
		$('submit').value = "Edit Bill";
		var editSubmit = $('submit');
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
		
	}

	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this bill?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Bill was deleted.");
			window.location.reload();
		}else{
			alert("Bill was not deleted.");
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("No data to clear.");
		}else{
			localStorage.clear();
			alert("All Bills are deleted");
			window.location.reload();
			return false;
		}
	}
	
/*
	function validate(e){
		var getCategory = $('categories');
		var getCompName = $('compName');
		var getCompEmail = $('compEmail');
		
		errMsg.innerHTML = "";
		getCategory.style.border = "1px solid black";
		getCompName.style.border = "1px solid black";
		getCompEmail.style.border = "1px solid black";
		
		var messageAry = [];
		
		if(getCategory.value === "-- Category --"){
			var categoryError = "Please choose a category.";
			getCategory.style.border = "1px solid red";
			messageAry.push(categoryError);
		}
		
		if(getCompName.value === ""){
			var compNameError = "Please enter a Company Name.";
			getCompName.style.border = "1px solid red";
			messageAry.push(compNameError);
		}
		
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!(re.exec(getCompEmail.value))){
			var compEmailError = "Please enter a valid email address.";
			getCompEmail.style.border = "1px solid red";
			messageAry.push(compEmailError);
		}
		
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length; i < j; i++){
				var txt = document.createElement('li');
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		}else{
			storeData(this.key);
		}
	}*/
	
	/*var billCategories = ["-- Category --", "Cell", "Car", "Rent", "Cable"],
		payByValue,
		pastDueValue = "No",
		errMsg = $('errors');
	
	//makeCats();
	
	var displayLink = $('displayLink');	
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", validate);*/
	










