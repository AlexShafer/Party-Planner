const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.officeapi.dev/api/quotes/random"; // site that doesn’t send Access-Control-*

fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  .then(response => response.text())
  .then(contents => console.log(contents))
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
let officeQuote = function () {
  $.ajax({
    url: (proxyurl + url)
  }).then(function (response) {
    $("#officeQuote").empty();
    // $("#officeQuote").append("<h4>Here are some random html bits </h4>");
    $("#officeQuote").append(response.data.content + " -- " + response.data.character.firstname + " " + response.data.character.lastname);
  });
};
officeQuote();