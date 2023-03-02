let main = document.querySelector(".main");

$("body").append(
  '<div style="" id="loadingDiv"><div class="loader"></div></div>'
);
$(window).on("load", function () {
  setTimeout(removeLoader, 2000);
});
function removeLoader() {
  $("#loadingDiv").fadeOut(500, function () {
    $("#loadingDiv").remove();
    main.classList.remove("hidden");
  });
}
