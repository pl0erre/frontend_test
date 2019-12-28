document.addEventListener("DOMContentLoaded", () => { 

    // -- Constants -- //
    const numberOfInfoPreviews = 3;
    const numberOfTabs = 2;
    const seeMoreMsg = "Mehr Informationen"
    const backupImgUrl = "https://cdn1.iconfinder.com/data/icons/hawcons/32/699055-icon-65-document-image-512.png"
    const tabs = document.getElementsByClassName("tab");
    const news = tabs[0];
    const events = tabs[1];
    const infoParCont = document.getElementsByClassName("infobar__content")[0];

    // -- Functions -- //
    // Select a random Tab after Pageload
    function selectRandomTab() {
        tabs[Math.floor(Math.random() * numberOfTabs)].classList.add("active");
        loadActiveContent();
    }

    // write content of selected feed
    function writeActiveContent(infoChild) {
        let infoBox = document.createElement("div");
        let imgElem = document.createElement("img");
        let infoItem = document.createElement("div");
        let dateElem = document.createElement("p");
        let headingElem = document.createElement("h3");
        let subheadingElem = document.createElement("h4");
        let seeMoreElem = document.createElement("a");
        // add classes
        infoItem.classList.add("infobar__item");
        imgElem.classList.add("infobar__image");
        infoBox.classList.add("infobar__details")
        // Check if image url is given; if not: use default src
        if (infoChild.img) {
            imgElem.src = infoChild.img;
        } else {
            imgElem.src = backupImgUrl;
        }
        // add link Url
        seeMoreElem.href = "#"
        // alter inner html
        dateElem.innerHTML = infoChild.date;
        headingElem.innerHTML = infoChild.heading;
        subheadingElem.innerHTML = infoChild.subheading;
        seeMoreElem.innerHTML = seeMoreMsg;
        // construct InfoItem
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
        if (news.classList.contains("active")) {
            for (let i = 0; i < numberOfInfoPreviews; i++) {
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
        } else if (events.classList.contains("active")) {
            for (let i = 0; i < numberOfInfoPreviews; i++) {
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
        for ( let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
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
