// write js code here corresponding to matches.html
var mdata = JSON.parse(localStorage.getItem("schedule"));
displayMatch(mdata);

var favouritesData = JSON.parse(localStorage.getItem("favourites")) || [];

function filterByVenue() {
    var dataselect = document.querySelector("#filterVenue").value;
    if (dataselect == "Mumbai") {
        var flist = mdata.filter(function (ele) {
            return ele.mVenue == dataselect;
        });
        displayMatch(flist);
    }
    if (dataselect == "Banglore") {
        var flist = mdata.filter(function (ele) {
            return ele.mVenue == dataselect;
        });
        displayMatch(flist)
    }
    if (dataselect == "Hyderabad") {
        var flist = mdata.filter(function (ele) {
            return ele.mVenue == dataselect;
        });
        displayMatch(flist);
    }
    if (dataselect == "Delhi") {
        var flist = mdata.filter(function (ele) {
            return ele.mVenue == dataselect;
        });
        displayMatch(flist);
    }
    if (dataselect == "Pune") {
        var flist = mdata.filter(function (ele) {
            return ele.mVenue == dataselect;
        });
        displayMatch(flist);
    }
}

    function displayMatch(mdata) {
        document.querySelector("tbody").innerHTML = "";

        mdata.forEach(function (elem) {
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
            td6.innerText = "Add as Favourites";
            td6.style.color = "blue"
            td6.addEventListener("click", function () {
                favouritesFunction(elem);
            });

            tr.append(td1, td2, td3, td4, td5, td6);

            document.querySelector("tbody").append(tr);
        });
    }

    function favouritesFunction(elem) {
        favouritesData.push(elem);
        localStorage.setItem("favourites", JSON.stringify(favouritesData));
    }
