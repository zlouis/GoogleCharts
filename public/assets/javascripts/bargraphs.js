var width = 500;
var height = 500;

var data = [10,123,34,66,33,78,66,88,44,55]

var widthScale = d3.scale.linear()
                .domain([10,123])
                .range([0,400]);

var axis = d3.svg.axis()
          .scale(widthScale)
          .ticks(5);

var canvas = d3.selectAll("h1")
             .append("svg")
             .attr("width", width)
             .attr("height", height)
             .attr("transform", "translate(200, 100)")
             .append("g");
          

var bars = canvas.selectAll("rect")
          .data(data)
          .enter()
            .append("rect")
              .transition()
              .each("start", function() {d3.select(this).attr("fill", "orange") })
              .delay(1000)
              .duration(1500)
              .attr("width", function(d) { return d * 2})
              .attr("height", 50)
              .attr("y", function (d, i) { return i * 51 })
              .attr("fill", "blue");


              canvas.append('g')
                    .attr("transform", "translate(0,460)")
                    .call(axis);
              
              //relative to the width and height set for svg
//tut -  10