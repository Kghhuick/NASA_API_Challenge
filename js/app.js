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

			for(var i = 0; i < 5; i++){
      var c = response.photos[i].img_src;
			console.log(c);

			var sectionTwo = $(".section_two");
			var newDivman = $("<div>");
      sectionTwo.append(newDivman);
			newDivman.css('background-image', 'url(' + c + ')');



    }
 });
















});
