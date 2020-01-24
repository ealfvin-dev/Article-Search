var searchTerm = $("#searchTerm").val();
var number = $("#number").val();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&fl=" + number + "&api-key=A9wsrpEyfV8PwpDlfeFtbo4BK9tzr1QE";

var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", getArticles);

function getArticles(event) {
    event.preventDefault();

    $.ajax({url: queryURL, method: "GET"})
    .then(function(response) {
        console.log(response);
    })
}