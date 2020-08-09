    const url = "https://www.officeapi.dev/api/quotes/random"; 
    fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    let officeQuote = function () {
      $.ajax({
        url: (url)
      }).then(function (response) {
        $("officeQuote").empty();
        // $("#officeQuote").append("<h4>Here are some pieces of html: </h4>");
        $("#officeQuote").append(response.data.content + " -- " + response.data.character.firstname + " " + response.data.character.lastname);
      });
    };
    officeQuote();