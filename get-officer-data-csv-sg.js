let promises = [
    d3.csv("./data/2021-11-04_complaints.csv"),
    d3.csv("./data/2021-11-04_officers.csv")
];

Promise.all(promises).then(function(data) {

    const complaints = data[0];
    const officers = data[1];

    let hash = new URL(document.URL).hash;

    let badge_id = hash.replace("#", "");

    // let idType;
    // let id;

    // if(hash.indexOf("badge") >= 0) {
    //     idType = "badge_id";
    //     id = hash.replace("#badge_","");

    // } else if(hash.indexOf("name") >= 0) {
    //     idType = "name";
    //     id = hash.replace("#name_", "");
    // }

    // let badge_id = id.replace("#", "");

    complaints.forEach(function(d) {
        d.date = new Date(d.received_date);
    });

    let filtered = complaints.filter(function(d) {
        return d.badge === badge_id;
    }).sort(function(a,b) {
        return b.date.getTime() - a.date.getTime();
    });





    // Allegations

    // if(idType === "badge_id") {

    //     let filtered = complaints.filter(function(d) {
    //         return d.badge === badge_id;
    //     });
    
    // } else if(idType === "name") {
    //     let filtered = complaints.filter(function(d) {
    //         return d.last_name === badge_id;
    //     });
    // }

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
        
            // Allegation
            div.append("h3")
                .attr("class", "allegation--detail")
                .html(complaint.allegation);
        
            // Finding
            div.append("h4").html(complaint.finding);
        
            // // Penalty
            // div.append("p").html(`Penalty: ${complaint.penalty}`);

            if(complaint.finding === "Sustained") {
                if(complaint.penalty === "") {
                    div.append("p").html(`Penalty: None`);
                } else {
                    div.append("p").html(`Penalty: ${complaint.penalty}`);
                }
            }

        
            // Incident date
            div.append("h5").html(complaint.received_date);
        
        
        });
    
    }

    // Officer data

    let officer = officers.filter(function(d) {
        return d.badge === badge_id;
    })[0];

    console.log(officer);

    // // Officer first name
    d3.select("#officer-name").html(`${officer.first_name} ${officer.last_name}`);

    // Officer last name
    // d3.select("#officer-last-name").html(officer.last_name);

    // Officer title
    d3.select("#officer-title").html(officer.title);

    // Officer badge ID
    d3.select("#officer-badge").html(officer.badge);

    // // Officer organization
    // d3.select("#officer-org").html(officer.organization);

    // Officer active status (will translate the 1 to "ACTIVE")

    if(officer.active === "TRUE") {
        d3.select("#officer-active").html("ACTIVE");
    } else {
        d3.select("#officer-active").html("NOT ACTIVE");
    }
    // d3.select("#officer-active").html(officer.active);



    // Counts of allegations

    let sustained = filtered.filter(function(d) {
        return d.finding === "Sustained";
    });

    let sustained_count = sustained.length;

    d3.select("#counts").html(`<b>${count}</b> Allegations <b>${sustained_count}</b> Sustained`);


});








// let complaints = [d3.csv("./data/2021-11-04_complaints.csv")];

// let officer = [d3.csv("./data/2021-11-04_complaints.csv")];

// // Officer first name
// d3.select("#officer-first-name").html(officer.first_name);

// // Officer last name
// d3.select("#officer-last-name").html(officer.last_name);

// // Officer title
// d3.select("#officer-title").html(officer.title);

// // Officer badge ID
// d3.select("#officer-badge").html(officer.badge);

// // Officer organization
// d3.select("#officer-org").html(officer.organization);

// Officer active status (will translate the 1 to "ACTIVE")
// d3.select("#officer-active").html(officer.active);


