$(function() {

  var url = "https://api.nasa.gov/planetary/apod?api_key=01Wot9xYzTu3re5cf3w4HMAhwcrdntrVJAAvadzv"
  var urlA = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=01Wot9xYzTu3re5cf3w4HMAhwcrdntrVJAAvadzv"

  $.ajax({method: "GET", url: url, dataType: "json"}).done(function(response) {

    var a = response.hdurl;

    var b = $("div");

    $(".section_one_div").css('background-image', 'url(' + a + ')');

  });

  $.ajax({method: "GET", url: urlA, dataType: "json"}).done(function(response) {

    console.log(response);

    for (var i = 0; i < 6; i++) {
      var c = response.photos[i].img_src;
      console.log(c);

      var sectionTwo = $(".div_two");
      var newDivman = $("<div>");
      sectionTwo.prepend(newDivman);
      newDivman.css('background-image', 'url(' + c + ')');
    }
  });

  $("button").on("click", function() {
    $.ajax({method: "GET", url: urlA, dataType: "json"}).done(function(response) {

      console.log(response);

      for (var i = 6; i < 12; i++) {
        var c = response.photos[i].img_src;
        console.log(c);

        var sectionTwo = $(".div_two");
        var newDivman = $("<div>");
        sectionTwo.prepend(newDivman);
        newDivman.css('background-image', 'url(' + c + ')');
      }
    });
    $("button").remove();
  });

  var cnt = 0;

  $(".div_two").on("click", "div", function() {
    if (cnt % 2 === 0) {
      $(".div_two div").hide();
      var z = $(this);
      z.css({"width": "100%", "height": "100%", "margin": "0 0 0 0"});
      $(this).show();
      cnt++;

    } else {
      $(".div_two div").show();
      $(".div_two div").css({"width": "25%", "height": "200px", "display": "inline-block", "margin-left": "7%"});
      cnt++;
    }

  });

});
