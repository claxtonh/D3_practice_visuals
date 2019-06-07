/*You need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.

Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the `app.js` file of your homework directory—make sure you pull in the data from `data.csv` by using the `d3.csv` function. Your scatter plot should ultimately appear like the image at the top of this section.

* Include state abbreviations in the circles.

* Create and situate your axes and labels to the left and bottom of the chart.

* Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.
*/

// @TODO: YOUR CODE HERE!

//svg container
var svgHeight = 400;
var svgWidth = 1000;

//margins
var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
};

// char area minus margins
var chartHeight = svgHeight - margin.top -margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

console.log(chartHeight);
console.log(chartWidth);

// create svg container
var svg = d3.select("#scatter").append("svg") 
    .attr("heigh", svgHeight)
    .attr("width", svgWidth);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);


// Load the data from the csv
d3.csv("./assets/data/data.csv", function(dfc){
    //if (err) {
      //  console.warn(err);
       // console.warn(dfc);
       // throw err;
    //}  // this will display the error, if an error has been caught
    console.log("got here");
    console.log(dfc);
       
    //dfc.forEach(function(d){ 
    //dfc.poverty = +dfc.poverty;
    //dfc.healthcare = +dfc.healthcare;

    //});
    //return "";
});
console.log("loaded data");
/*
var yScale = d3.scaleLinear()
    .domain([d3.extent(dfc.poverty)])
    .range([0, chartHeight]);

var xScale = d3.scaleLinear()
    .domain([d3.extent(dfc.healthcare)])
    .range([0, chartWidth]);

// create axes    
var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);
console.log("created axes")

// set x to the bottom of the chart
chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

// set y to the left of the chart
chartGroup.append("g")
    .call(yAxis);
*/

/*

// Append Data to chartGroup
var circlesGroup = chartGroup.selectAll("circle")
    .data(dfc)
    .enter()   // because there are no bars in the html, all of them will be created
    .append("circle")
    .clased(".stateCircle", true)
    .attr("cx", d => xScale(d[chosenXAxis]))
    .attr("cy", d => yScale(d.num_hits))
    .attr("r", 20)
    .attr("fill", "pink")
    .attr("opacity", ".5");

*/