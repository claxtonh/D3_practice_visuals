/*You need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.

Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the `app.js` file of your homework directory—make sure you pull in the data from `data.csv` by using the `d3.csv` function. Your scatter plot should ultimately appear like the image at the top of this section.

* Include state abbreviations in the circles.

* Create and situate your axes and labels to the left and bottom of the chart.

* Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.
*/

// @TODO: YOUR CODE HERE!

//svg container
var svgHeight = 150;
var svgWidth = 1000;

//margins
var margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
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
d3.csv("data.csv").then(function(data){
    //if (err) {
      //  console.warn(err);
       // console.warn(dfc);
       // throw err;
    //}  // this will display the error, if an error has been caught
    console.log("got here");
    
     
    // Parse data with a for loop
    /*
    for (var i = 0; i < data.length; i++){
        console.log(data[i].poverty);
        console.log(data[i].healthcare);
        console.log(i);
    };
    */

    //parse the data with forEach function
        data.forEach(function(d){ 
        d.poverty = +d.poverty;
        console.log(d.poverty);
        
        d.healthcare = +d.healthcare;
        console.log(d.healthcare);
        console.log("data parsed");
    });

    console.log(data);
    console.log(d3.extent(data, function(d) {return d.poverty}));
    // refactored via arrow function
    console.log(d3.extent(data, d => d.poverty));

    var yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.poverty))
    .range([0, chartHeight]);

    var xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.healthcare))
    .range([0, chartWidth]);

    // create axes    
    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);
    console.log("created axes");
    
    // set x to the bottom of the chart
    chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

    // set y to the left of the chart
    chartGroup.append("g")
    .call(yAxis);
    
    console.log("testing scales");
    console.log(data[0].poverty);
    console.log(xScale(data[0].poverty));
    

    // Append Data to chartGroup
    var circlesGroup = chartGroup.selectAll("circle")
    .data(data)
    .enter()   // because there are no circles in the html, all of them will be created
    .append("circle")
    .classed(".stateCircle", true)
    .attr("cx", d => xScale(d.poverty))
    .attr("cy", d => yScale(d.healthcare))
    .attr("r", 2)
    .attr("fill", "blue")
    .attr("opacity", ".5");



});
//console.log("loaded data");
