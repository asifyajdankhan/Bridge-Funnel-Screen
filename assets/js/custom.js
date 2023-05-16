$("a[href*=\\#]:not([href$=\\#])").click(function () {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollDown: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
