document.addEventListener("DOMContentLoaded", () => { 

    // === Constants === //
    const infoParCont = document.getElementsByClassName("infoBar__content")[0];
    const tabs = document.getElementsByClassName("tab");
    const settings = {
        nrOfPreviews: 3,
        nrOfTabs: 2,
        newsTab: tabs[0],
        eventsTab: tabs[1],
        seeMoreMsg: `<span class="link-arrow">&#8250</span> Mehr Informationen`,
        defaultImg: "https://image.flaticon.com/icons/png/512/507/507626.png"
    }
    // === Constants === -END- //

    // === Functions === //
    // fetch data according to selected tab
    function fetchActiveData(activeTab) {
        for (let i = 0; i < settings.nrOfPreviews; i++) {
            let  j = activeTab[i];
            let infoItemData = {
                img: j.img,
                date: j.date,
                subheading: j.subheading,
                heading: j.heading
            }
            // insert default image if no image present
            if (infoItemData.img === "" || infoItemData.img === undefined) {
                infoItemData.img = settings.defaultImg;
            }
            // pass data to writefunction 
            writeActiveContent(infoItemData);  
        }
    }

    // load content for selected feed
    function loadActiveContent() {
        if (settings.newsTab.classList.contains("active")) {
            fetchActiveData(newsData);
        } else if (settings.eventsTab.classList.contains("active")) {
            fetchActiveData(eventsData);
        } 
    }

    // write content of selected feed
    function writeActiveContent(infoItemData) {
        // create all necessary elements
        let infoBox = document.createElement("div");
        let imgElem = document.createElement("div");
        let infoItem = document.createElement("div");
        let dateElem = document.createElement("p");
        let headingElem = document.createElement("h3");
        let subheadingElem = document.createElement("h4");
        let seeMoreElem = document.createElement("a");
        // add classes
        infoItem.classList.add("infoBar__item");
        imgElem.classList.add("infoBar__image");
        infoBox.classList.add("infoBar__details");
        // add link Url
        seeMoreElem.href = "#";
        // set background of container
        imgElem.style.backgroundImage = `url(${infoItemData.img})`;
        // alter inner html
        dateElem.innerHTML = infoItemData.date;
        headingElem.innerHTML = infoItemData.heading;
        subheadingElem.innerHTML = infoItemData.subheading;
        seeMoreElem.innerHTML = settings.seeMoreMsg;
        // build infoItem
        infoItem.appendChild(imgElem);
        infoItem.appendChild(infoBox);
        infoBox.appendChild(dateElem);
        infoBox.appendChild(headingElem);
        infoBox.appendChild(subheadingElem);
        infoBox.appendChild(seeMoreElem);
        // append infoItem
        infoParCont.appendChild(infoItem);
    }

    // clear all content of selected feed; remove all childelements
    function clearOldContent() {
        while (infoParCont.firstChild) {
            infoParCont.removeChild(infoParCont.firstChild);
        }
    }

    // clear all active tabs of infobar
    function clearActiveTabs() {
        for ( let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
    }

    // Add eventlisteners to Infobar tabs and add or remove "active" class on click
    function addEventlistenersToTabs() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", (e) => {
                let elem = e.target;
                let classList = elem.classList
                // Clear all active tabs
                clearActiveTabs();
                // Add active class to selected tab
                classList.add("active");
                // remove all entried from before
                clearOldContent();
                // load content
                loadActiveContent();
            })
        }
    }

    // Select a random Tab after Pageload
    function selectRandomTab() {
        tabs[Math.floor(Math.random() * settings.nrOfTabs)].classList.add("active");
        loadActiveContent();
    }

    // === Functions === -END- //

    // Execute eventlisteners function
    addEventlistenersToTabs();
    // Execute random Tab function
    selectRandomTab();
});
