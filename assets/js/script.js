document.addEventListener("DOMContentLoaded", () => { 

    // Constants
    const tabs = document.getElementsByClassName("tab")
    const randTabNr = Math.floor(Math.random() * 2);
    
    // Select a random Tab after Pageload
    tabs[randTabNr].className= "tab active";

    // Add eventlisteners to Tabs and add or remove "active" class on click
    for (let i = 0; i < tabs.length; i++) {

        tabs[i].addEventListener("click", (e) => {
            let elem = e.target;
            let classList = elem.classList

            if (!classList.contains("active")) {
                // Clear all active tabs
                for ( let j = 0; j < tabs.length; j++) {
                    tabs[j].classList.remove("active");
                }
                // Add active class to selected tab
                classList.add("active");
            } 
        })

    }


});
