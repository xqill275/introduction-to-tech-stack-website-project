
function searchJobs() {
    var input = document.getElementById("jobSearch").value;
    var filter = input.toUpperCase();
    var cardContainer = document.getElementById("jobList");
    var cards = cardContainer.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector(".card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].closest('.col-md-4').style.display = "block";
        }else if (filter == "") {
            cards[i].closest('.col-md-4').style.display = "block";
        } else {
            cards[i].closest('.col-md-4').style.display = "none";
            }
    }
}
