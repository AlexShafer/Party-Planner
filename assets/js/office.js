const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.officeapi.dev/api/quotes/random"; // site that doesn’t send Access-Control-*

fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  .then(response => response.text())
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));

const officeQuote = function () {
  $.ajax({
    url: (proxyurl + url)
  }).then(function (response) {
    $("#officeQuote").empty();
    $("#officeQuote").append(response.data.content + " -- " + response.data.character.firstname + " " + response.data.character.lastname);
  });
};

officeQuote();