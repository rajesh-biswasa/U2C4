// write js code here corresponding to index.html
// You should add submit event on the form
var data = JSON.parse(localStorage.getItem("schedule")) || []
masaiForm.addEventListener("submit", function () {
    event.preventDefault();
    var obj = {
        mNum: masaiForm.matchNum.value,
        mTeamA: masaiForm.teamA.value,
        mTeamB: masaiForm.teamB.value,
        mDate: masaiForm.date.value,
        mVenue: masaiForm.venue.value,
    };
    data.push(obj)
    localStorage.setItem("schedule", JSON.stringify(data));
})

