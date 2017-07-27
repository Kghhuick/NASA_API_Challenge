$(function()	{

var url = "https://api.nasa.gov/planetary/apod?api_key=01Wot9xYzTu3re5cf3w4HMAhwcrdntrVJAAvadzv"

$.ajax({
				method:	"GET",
				url:	url,
				dataType:	"json"
}).done(function(response)	{

        var a = response.hdurl;

				var b = $("div");

        $('div').css('background-image', 'url(' + a + ')');

});


 var urlA ="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=01Wot9xYzTu3re5cf3w4HMAhwcrdntrVJAAvadzv"

 $.ajax({
 				method:	"GET",
 				url:	urlA,
 				dataType:	"json"
 }).done(function(response)	{


			console.log(response);
			for(var i = 0; i < response.photos.length; i++){
			console.log(response.photos[i]);
    }
 });
















});
