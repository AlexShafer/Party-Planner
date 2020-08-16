const createButton = $("#createButton");
const searchButton = $("#searchButton");

$(createButton).click(function(){
  window.location.pathname = "/event-create.html";
});

$(searchButton).click(function(){
  window.location.pathname = "/event-search.html";
});