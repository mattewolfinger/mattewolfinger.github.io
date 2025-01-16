function myFunction() {
    var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
}

d3.csv("./data/2021-11-04_officers.csv").then(function(data) {
    let ids = data.map(function(d) {
        return d.badge;
});

d3.select("#search--button").on("click", function() {
    let search_value = d3.select("#search--value").property("value");
        if (isNaN(search_value)) {
            let officer = data.filter(function(d) {
                return d.last_name.toLowerCase() === search_value.toLowerCase();
        })[0];
    let badge_id = officer.badge;
    let url = `./single-officer.html#${badge_id}`;
    window.location = url;
    } else {
        if (search_value === "") {
            d3.select("#error").html("You must enter a badge ID");
        } else if(ids.indexOf(search_value) < 0) {
            d3.select("#error").html("Please enter a valid badge ID");
        } else if(search_value === "ZZZZZ") {
            d3.select("#error").html("Please enter a valid badge ID");
        } else if(search_value === "DSUPT") {
            d3.select("#error").html("Please enter a valid badge ID");
        } else if(search_value === "DT419") {
            d3.select("#error").html("Please enter a valid badge ID");
        } else if(search_value === "LT96") {
            d3.select("#error").html("Please enter a valid badge ID");
        } else if(search_value === "PC") {
            d3.select("#error").html("Please enter a valid badge ID");
        } else if(search_value === "SUPT") {
            d3.select("#error").html("Please enter a valid badge ID");
        } else if(search_value === "CAPT") {
            d3.select("#error").html("Please enter a valid badge ID");
        } else {
            let url = `./single-officer.html#${search_value}`;
            window.location = url;
        }
    }
});

d3.select("#search--preview").on("click", function() {
    let badge_id = "1877";
    let url = `./single-officer.html#${badge_id}`;
    window.location = url;
});
});

d3.select("#search--button").on("click", function() {
    let badge_id = d3.select("#search--value").property("value");
    if (badge_id === "") {
        d3.select("#error").html("You must enter a badge ID");
    } else {
    let url = `./single-officer.html#${badge_id}`;
    window.location = url;
    }
});

d3.select("#search--preview").on("click", function() {
    let badge_id = "1877";
    let url = `./single-officer.html#${badge_id}`;
    window.location = url;
});

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