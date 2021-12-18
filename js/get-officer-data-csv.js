let promises = [
    d3.csv("./data/2021-11-04_complaints.csv"),
    d3.csv("./data/2021-11-04_officers.csv")
];

Promise.all(promises).then(function(data) {
    const complaints = data[0];
    const officers = data[1];
    let hash = new URL(document.URL).hash;
    let badge_id = hash.replace("#", "");

    complaints.forEach(function(d) {
        d.date = new Date(d.received_date);
    });

    let filtered = complaints.filter(function(d) {
        return d.badge === badge_id;
    }).sort(function(a,b) {
        return b.date.getTime() - a.date.getTime();
    });

    let count = filtered.length;
        if(count == 0) {
            d3.select("#complaints-container")
                .append("div")
                .attr("id", "no-allegations")
                .html("This officer has no allegations.");
        } else {
            filtered.forEach(function(complaint) {
                let div = d3.select("#complaints-container")
                    .append("div")
                    .attr("class", "allegation");
                let definingDiv = div.append("div")
                    .attr("class", "allegation--data");
                definingDiv.append("span").html(complaint.allegation);
                let imagefile;
                    if(complaint.finding === "Sustained") {
                        imagefile = "./images/flag-filled.png";
                    } else if(complaint.finding === "Not Sustained") {
                        imagefile = "./images/flag-outline.png";
                    } else if(complaint.finding === "Exonerated") {
                        imagefile = "./images/flag-outline.png";
                    } else if(complaint.finding === "Unfounded") {
                        imagefile = "./images/flag-outline.png";
                    } else if(complaint.finding === "Withdrawn") {
                        imagefile = "./images/flag-outline.png";
                    } else if(complaint.finding === "Filed") {
                        imagefile = "./images/flag-outline.png";
                    } else if(complaint.finding === "Pending") {
                        imagefile = "./images/flag-outline.png";
                    }
                let findingDiv = div.append("div")
                    .attr("class", "finding--data");
                findingDiv.append("img")
                    .attr("src", imagefile);
                findingDiv.append("span")
                    .html(complaint.finding);
                if(complaint.finding === "Sustained") {
                    if(complaint.penalty === "") {
                        div.append("p").html(`Penalty: None`);
                    } else {
                        div.append("p").html(`Penalty: ${complaint.penalty}`);
                    }
                };
                div.append("h5").html(complaint.received_date);
            });
        }

    let officer = officers.filter(function(d) {
        return d.badge === badge_id;
    })[0];

    d3.select("#officer-name")
        .html(`${officer.first_name} ${officer.last_name}`);
    d3.select("#officer-title")
        .html(officer.title);
    d3.select("#officer-badge")
        .html(officer.badge);
    if(officer.active === "TRUE") {
        d3.select("#officer-active").html("ACTIVE");
    } else {
        d3.select("#officer-active").html("NOT ACTIVE");
    }

    let sustained = filtered.filter(function(d) {
        return d.finding === "Sustained";
    });

    let sustained_count = sustained.length;

    d3.select("#counts")
        .html(`<b>${count}</b> Allegations <b>${sustained_count}</b> Sustained`);
    });

    function myFunction() {
        var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
    }

    function openNav() {
        document.getElementById("mySidenav")
            .style.width = "400px";
    }

    function closeNav() {
        document.getElementById("mySidenav")
            .style.width = "0";
    }

    d3.select("#clickMe")
        .on("click", function() {
            d3.select("#glossary")
                .style("visibility", "visible");
        })

    d3.select("#closeMe")
        .on("click", function() {
        d3.select("#glossary")
            .style("visibility", "hidden");
        })

    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

