let newsData = 
    [{
        date: "21.12.2019",
        category: "Feiertage",
        subheading: "",
        heading: "Frohe Weihnachten und ein gesundes Jahr 2020",
        text: "Die Uniklinik Köln wünscht Ihnen besinnliche, frohe Weihnachtsfeiertage im Kreise Ihrer Liebsten und einen guten Rutsch in ein gesundes, erfolgreiches Jahr 2020!"
    }, {
        date: "23.12.2019",
        category: "Frauenheilkunde",
        subheading: "Gruppe Köln - Uniklinik der Frauenselbsthilfe nach Krebs NRW e.V.",
        heading: "mutig-bunt-aktiv: Neue Selbsthilfegruppe gegründet",
        text: `In der Klinik und Poliklinik für Frauenheilkunde und Geburtshilfe der Uniklinik Köln ist die Gruppe Köln – Uniklinik der Frauenselbsthilfe nach Krebs NRW e.V. neu gegründet worden. Eine Gruppe aus etwa zwanzig betroffenen Frauen wählte in der feierlichen Gründungsveranstaltung am 10. Dezember 2019 Monika Klöver-Trompetter zur Gruppenleiterin, Eva Müllenborn zu ihrer Stellvertreterin und Maria Herbei zur Kassiererin. Univ.-Prof. Dr. Peter Mallmann, Direktor der Klinik und Poliklinik für Frauenheilkunde und Geburtshilfe der Uniklinik Köln, gratulierte und begrüßte die Neugründung: „Eine Krebsdiagnose schüttelt das ganze Leben durcheinander, alle Bereiche werden in Frage gestellt. Während, aber eben auch gerade nach dem Abschluss einer Therapie, ist der Weg in ein ,normales’ Leben schwierig und nicht immer allein zu meistern. Der Austausch mit anderen Betroffenen, die dabei vielleicht schon ein paar Schritte weiter sind, kann dann eine wesentliche Stütze sein. Ich freue mich, dass an Krebs erkrankte Frauen in der Uniklinik Köln und der ganzen Stadt mit der heutigen Gründung dieser Gruppe wieder ein Selbsthilfeangebot zur Verfügung steht.“ `
    }, {
        date: "20.12.2019",
        category: "Presseeinladung",
        subheading: "Pressegespräch – DAK-Gesundheitsreport 2019",
        heading: "»Trinken, Dampfen, Gamen«",
        text: `Kurz vor Jahreswechsel präsentieren die Krankenkasse DAK-Gesundheit und die Uniklinik Köln gemeinsam in einem Pressegespräch den aktuellen Gesundheitsreport 2019. Die Krankenkasse untersucht in ihrer aktuellen Studie mit dem Schwerpunkt „Trinken, Dampfen, Gamen“ wie viele Erwerbstätige in Nordrhein-Westfalen mit gravierenden Problemen durch Alkohol, Zigaretten und Computerspiele zu kämpfen haben. Das Gespräch thematisiert dabei auch Ursachen und Risikofaktoren bei Kindern- und Jugendlichen. Im Jahr 2018 ist der Krankenstand in Köln gestiegen. Welche Rolle spielen dabei Suchtprobleme? Wie haben sie sich in den vergangenen Jahren entwickelt? Welche Sucht verursacht die größten sozialen und gesundheitlichen Schäden? Wie hoch ist der Anteil an riskanten Gamern? Welche weiteren Entwicklungen gab es? Welche Besonderheiten sind bei einzelnen Diagnosen zu beobachten?`
    }]

let eventsData = 
    [{
        date: "07.01.2020",
        time: "16:00 - 18:00 Uhr",
        category: "Fachgebiet: CIO , Allgemein-, Viszeral-, Tumor- und Transplantationschirurgie , Krebs",
        subheading: "Krebs der Speiseröhre",
        heading: "Treffen der Selbsthilfegruppe Speiseröhrenerkrankungen",
        text: `Das nächste Treffen der Selbsthilfegruppe Speiseröhrenerkrankungen findet am 7. Januar 2020 statt.

                Veranstaltungsort:
                Uniklinik Köln
                Chirurgische Klinik im Hauptgebäude (Bettenhaus)
                Ebene 0, Seminarraum 150

                Save the date!

                `
    }, {
        date: "",
        time: "",
        category: "",
        subheading: "",
        heading: "",
        text: ""
    }, {
        date: "",
        time: "",
        category: "",
        subheading: "",
        heading: "",
        text: ""
    }]





document.addEventListener("DOMContentLoaded", () => { 

    // Constants
    const tabs = document.getElementsByClassName("tab")
    const randTabNr = Math.floor(Math.random() * 2);
    
    // Select a random Tab after Pageload
    tabs[randTabNr].className= "tab active";

    //Functions
    function clearActiveTabs() {
        for ( let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }
    }

    // Add eventlisteners to Tabs and add or remove "active" class on click
    for (let i = 0; i < tabs.length; i++) {

        tabs[i].addEventListener("click", (e) => {
            let elem = e.target;
            let classList = elem.classList

            if (!classList.contains("active")) {
                // Clear all active tabs
                clearActiveTabs();
                // Add active class to selected tab
                classList.add("active");
            } 
        })
    }
});
