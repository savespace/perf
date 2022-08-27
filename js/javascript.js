var $arrow = $("#arrow");
var $off = $("main").offset().top;

$("#arrow").on("click", function () {
  $("body").animate({
    scrollTop: $("main").offset().top
  }, 1200)
})

function initMap() {
	var location = {lat: 52.644945, lng: 16.087175}
}