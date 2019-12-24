document.addEventListener("DOMContentLoaded", () => { 

    // Constants
    const tabs = document.getElementsByClassName("tab")
    const randTabNr = Math.floor(Math.random() * 2);
    
    // Select a random Tab after Pageload
    tabs[randTabNr].className= "tab tab_selected";

    // Add eventlisteners to Tabs and add or remove "tab_selected" class on click
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", (event) => {
            let elem = event.target;
    
            if(!elem.classList.contains("tab_selected")) {
                elem.className = "tab tab_selected"
            } else if (elem.classList.contains("tab_selected")) {
                elem.className = "tab";
            }
        })
    }


});
