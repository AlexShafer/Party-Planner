const createButton = $("#createButton");
const searchButton = $("#searchButton");

$(createButton).click(function(){
  window.location.pathname = "/addEvent";
});

$(searchButton).click(function(){
  window.location.pathname = "/allEvent";
});