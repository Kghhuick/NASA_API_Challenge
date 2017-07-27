$(function()	{

var url = "https://api.nasa.gov/planetary/apod?api_key=01Wot9xYzTu3re5cf3w4HMAhwcrdntrVJAAvadzv"

$.ajax({
				method:	"GET",
				url:	url,
				dataType:	"json"
}).done(function(response)	{

        var a = response.hdurl;
        console.log(a);
				var b = $("div");
				console.log(b);
        // $("div").css({"background-image" : a});
        $('div').css('background-image', 'url(' + a + ')');

});
}); 
