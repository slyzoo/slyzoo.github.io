function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-button" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Toggle the settings container and open the default tab when the button is clicked
document.querySelector(".openSettingsButton").addEventListener("click", function() {
    var settingsContainer = document.getElementById("settingsContainer");
    if (settingsContainer.style.display === "none" || settingsContainer.style.display === "") {
        settingsContainer.style.display = "block";
        document.querySelector(".tab-button").click(); // Open the default tab (General)
    } else {
        settingsContainer.style.display = "none";
    }
});