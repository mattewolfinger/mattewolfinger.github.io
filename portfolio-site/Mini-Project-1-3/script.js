d3.csv("./data/pitchfork-bowie.csv").then(function(data) {

    /*
    DEFINE DIMENSIONS OF SVG + CREATE SVG CANVAS

    Note that this template places an SVG canvas in the element with
    ID "chart", which has a width and height equal to the size of
    the browser window (controlled in the CSS);

    If you want the visualization to be located somewhere else
    in the HTML, or to be a different size, you'll need to modify
    the code below.
    
    */
    const width = document.querySelector("#chart").clientWidth;
    const height = document.querySelector("#chart").clientHeight;
    const margin = {top: 50, left: 150, right: 50, bottom: 150};

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);


    /* 
    FILTER THE DATA
    */

    const filtered_data = data.filter(function(d) {
        return d.decade == "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s";
    });


    /*
    MIN AND MAX OF THE VARIABLES
    */

    const albumYear = {
        min: d3.min(filtered_data, function(d) { return +d.album_year; }),
        max: d3.max(filtered_data, function(d) { return +d.album_year; })
    };

    const albumScore = {
        min: d3.min(filtered_data, function(d) { return +d.score; }),
        max: d3.max(filtered_data, function(d) { return +d.score; })
    };

    const revYear = {
        min: d3.min(filtered_data, function(d) { return +d.review_year; }),
        max: d3.max(filtered_data, function(d) { return +d.review_year; })
    }

    /*
    CREATE SCALES
    */
    const xScale = d3.scaleLinear()
        .domain([albumYear.min, albumYear.max])
        .range([margin.left, width-margin.right]);

    const yScale = d3.scaleLinear()
        .domain([albumScore.min, albumScore.max])
        .range([height-margin.bottom, margin.top]);

    var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    /*
    DRAW AXES
    */

    const xAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(0,${height-margin.bottom})`)
        .call(d3.axisBottom().scale(xScale).tickFormat(d3.format("Y")));

    const yAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft().scale(yScale));

    /*
    DRAW CIRCLE POINTS
    */
    const points = svg.selectAll("circle")
        .data(filtered_data)
        .enter()
        .append("circle")
            .attr("cx", function(d) { return xScale(d.album_year); })
            .attr("cy", function(d) { return yScale(d.score); })
            .attr("opacity", 0.7)
            .attr("r",14)
            .attr("fill", function(d) { return colorScale(d.decade); });

    /*
    DRAW AXIS LABELS
    */
    const xAxisLabel = svg.append('text')
        .attr("class","axisLabel")
        .attr("x", width/2)
        .attr("y", height-margin.bottom/2)
        .text("Album Release Year");

    const yAxisLabel = svg.append("text")
        .attr("class","axisLabel")
        .attr("transform","rotate(-90)")
        .attr("x",-height/2)
        .attr("y",margin.left/2)
        .text("Pitchfork Score");

    /*
    TOOLTIP
    */

    const tooltip = d3.select("#chart")
        .append("div")
        .attr("class","tooltip");

    points.on("mouseover", function(e, d) {

        let cx = +d3.select(this).attr("cx")+30;
        let cy = +d3.select(this).attr("cy")-10;

        tooltip.style("visibility","visible")
            .style("left", `${cx}px`)
            .style("top", `${cy}px`)
            .html(`<b>Album:</b> ${d.album}<br><b>Release Year:</b> ${d.album_year}<br><b>Score:</b> ${d.score} out of 10`);


        d3.select(this)
        .attr("stroke","black")
        .attr("stroke-width", 2)
        .attr("opacity", 1);

    }).on("mouseout", function () {

        tooltip.style("visibility","hidden");

        d3.select(this)
            .attr("stroke","none")
            .attr("stroke-width",0)
            .attr("opacity", 0.7);
    });

    d3.selectAll("circle").on("mouseover"), function() {
        var thisClass = d3.select(this).attr("class")
    }


    /*
    CREATING THE FILTER CHECKBOX
    */

    d3.selectAll(".decade--option").on("input", function() {

        let isChecked = d3.select(this).property("checked");
        let decade = d3.select(this).property("value");

        let selection = points.filter(function(d) {
            return d.decade === decade;
        });

        if (isChecked == true) {
            selection.attr("opacity", 0.7)
                .style("visibility", "visible")
                .attr("pointer-events", "all");
        } else {
            selection.attr("opacity", 0)
                .style("visibility", "hidden")
                .attr("pointer-events", "none");
        }
    });

    d3.selectAll(".decade--option").on("mouseover", function() {

        let isOver = d3.select(this).property("mouseover");
        let decade = d3.select(this).property("value");

        let selection = points.filter(function(d) {
            return d.decade === decade;
        });

        if (isOver == true) {
            selection.attr("opacity", 0.7)
                .attr("pointer-events", "all");
        } else {
            selection.attr("opacity", 1)
                .attr("pointer-events", "none");
        }

    }).on("mouseout", function() {

        let isOut = d3.select(this).property("mouseout");
        let decade = d3.select(this).property("value");

        let selection = points.filter(function(d) {
            return d.decade === decade;
        });

        if (isOut == true) {
            selection.attr("opacity", 0)
                .attr("pointer-events", "all");
        } else {
            selection.attr("opacity", 0.7)
                .attr("pointer-events", "none");
        }
    });


});
