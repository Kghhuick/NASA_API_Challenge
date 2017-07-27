$(function()	{

var url = "https://api.nasa.gov/planetary/apod?api_key=01Wot9xYzTu3re5cf3w4HMAhwcrdntrVJAAvadzv"

$.ajax({
				method:	"GET",
				url:	url,
				dataType:	"json"
}).done(function(response)	{
				console.log(response);
        console.log(response.hdurl);
        var a = response.hdurl;

        $("img").attr("src",a);


});
});
