
function editProfile() {
    var form = document.querySelector("form");
    var editProfileBtn = document.getElementById("editProfile");

    if (form.style.display === "block") {
        form.style.display = "none";
        editProfileBtn.innerHTML = "Edit Profile";
    } else {
        form.style.display = "block";
        editProfileBtn.innerHTML = "Stop Editing";
    }
}

function updateProfile(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    var newWorkHistory = document.getElementById("workHistory").value;
    var newEducationHistory = document.getElementById("educationHistory").value;
    var newSkills = document.getElementById("skills").value;
    var workHistoryText = document.getElementById("workHistoryText");
    var educationHistoryText = document.getElementById("educationHistoryText");
    var skillsText = document.getElementById("skillsText");

    workHistoryText.innerHTML = newWorkHistory;
    educationHistoryText.innerHTML = newEducationHistory;
    skillsText.innerHTML = newSkills;
}
