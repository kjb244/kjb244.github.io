$(document).ready(function(){  var main = function(){

	$(document).foundation();
	var settings = {};
	settings.$target = $("[data-module-engagement-module]");

	var voidMain = function(){


	}

	return voidMain();


}(); var main = function(){
	var settings = {};
	settings.$target = $("[data-module-image-left-content-right-module]");

	voidMain = function(){
		settings.$target.find('#pdf-menu-link').on('click', function(){
			var pdfString = settings.$target.find('.pdf-string').text();
			window.open("data:application/pdf;base64," + encodeURI(pdfString));
		});

		$.ajax({
			url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCySrSt1xFZx3iXlPn00vVZLVH5do63-7w&input=933',
			type: 'GET',
			dataType: 'jsonp',
			success: function(e){
				console.log(e);
			}
		})
	}

	return voidMain();



}(); var main = function(){



}();})