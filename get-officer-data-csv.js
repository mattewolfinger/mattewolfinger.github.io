
let complaints = [d3.csv("./data/2021-11-04_complaints.csv")];

let officer = [d3.csv("./data/2021-11-04_complaints.csv")];

// Officer first name
d3.select("#officer-first-name").html(officer.first_name);

// Officer last name
d3.select("#officer-last-name").html(officer.last_name);

// Officer title
d3.select("#officer-title").html(officer.title);

// Officer badge ID
d3.select("#officer-badge").html(officer.badge);

// Officer organization
d3.select("#officer-org").html(officer.organization);

// Officer active status (will translate the 1 to "ACTIVE")
// d3.select("#officer-active").html(officer.active);


complaints.forEach(function(complaint) {

    let div = d3.select("#complaints-container")
        .append("div")
        .attr("class", "allegation");

    // Allegation
    div.append("h3")
        .attr("class", "allegation--detail")
        .html(complaint.allegation);

    // Finding
    div.append("h4").html(complaint.finding);

    // Penalty
    div.append("p").html(`Penalty: ${complaint.penalty}`);

    // Incident date
    div.append("h5").html(complaint.received_date);


});
