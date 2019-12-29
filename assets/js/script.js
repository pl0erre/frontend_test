document.addEventListener("DOMContentLoaded", () => { 

    // -- Constants -- //
    const infoParCont = document.getElementsByClassName("infoBar__content")[0];
    const tabs = document.getElementsByClassName("tab");
    const settings = {
        nrOfPreviews: 3,
        nrOfTabs: 2,
        newsTab: tabs[0],
        eventsTab: tabs[1],
        seeMoreMsg: "Mehr Informationen",
        defaultImg: "https://image.flaticon.com/icons/png/512/507/507626.png"
    }

    // -- Functions -- //
    // Select a random Tab after Pageload
    function selectRandomTab() {
        tabs[Math.floor(Math.random() * settings.nrOfTabs)].classList.add("active");
        loadActiveContent();
    }

    // write content of selected feed
    function writeActiveContent(infoChild) {
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
        infoBox.classList.add("infoBar__details")
        // Check if image url is given; if not: use default src
        if (infoChild.img) {
            imgElem.style.backgroundImage = `url(${infoChild.img})`;
        } else {
            imgElem.style.backgroundImage = `url(${settings.defaultImg})`;
        }
        // add link Url
        seeMoreElem.href = "#"
        // alter inner html
        dateElem.innerHTML = infoChild.date;
        headingElem.innerHTML = infoChild.heading;
        subheadingElem.innerHTML = infoChild.subheading;
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

    // load content for selected feed
    function loadActiveContent() {
        // load news content if news tab is selected
        if (settings.newsTab.classList.contains("active")) {
            for (let i = 0; i < settings.nrOfPreviews; i++) {
                let  j = newsData[i];
                let infoChild = {
                    img: j.img,
                    date: j.date,
                    subheading: j.subheading,
                    heading: j.heading
                }
                // pass data to writefunction 
                writeActiveContent(infoChild);  
            }
        // load events if event tab is selected
        } else if (settings.eventsTab.classList.contains("active")) {
            for (let i = 0; i < settings.nrOfPreviews; i++) {
                let  j = eventsData[i];
                let infoChild = {
                    date: j.date,
                    subheading: j.subheading,
                    heading: j.heading
                }
                // pass data to writefunction 
                writeActiveContent(infoChild);  
            }
        }
    }

    // clear all active tabs of infobar
    function clearActiveTabs() {
        for ( let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
    }

    // Add eventlisteners to Infobar tabs and add or remove "active" class on click
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
    // load random tab on pageload
    selectRandomTab();
});
