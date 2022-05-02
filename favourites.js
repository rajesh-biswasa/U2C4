
var favouritesMatch = JSON.parse(localStorage.getItem("favourites"));

displayMatch(favouritesMatch);

function displayMatch(mdata) {
    document.querySelector("tbody").innerHTML = "";

    mdata.forEach(function (elem,i) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.mNum;

        var td2 = document.createElement("td");
        td2.innerText = elem.mTeamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.mTeamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.mDate;

        var td5 = document.createElement("td");
        td5.innerText = elem.mVenue;

        var td6 = document.createElement("td");
        td6.innerText = "Remove";
        td6.style.color = "red"
        td6.addEventListener("click", function () {
            deletMatch(elem,i);
        });

        tr.append(td1, td2, td3, td4, td5, td6);

        document.querySelector("tbody").append(tr);
    });
}

function deletMatch(elem, i) {
    favouritesMatch.splice(i, 1);
    localStorage.setItem("favourites", JSON.stringify(favouritesMatch));
    window.location.reload();
}