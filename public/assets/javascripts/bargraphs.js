var width = 500;
var height = 500;

var data = [10,123,34,66,33,78,66,88,44,55]


var canvas = d3.selectAll("h1")
             .append("svg")
             .attr("width", width)
             .attr("height", height)
             .append("g");


var bars = canvas.selectAll("rect")
          .data(data)
          .enter()
            .append("rect")
              .attr("transform", "translate(200, 100)")
              .transition()
              .each("start", function() {d3.select(this).attr("fill", "orange") })
              .delay(1000)
              .duration(1500)
              .attr("width", function(d) { return d * 2})
              .attr("y", function (d, i) { return i * 51 })
              .attr("height", 50)
              .attr("fill", "blue");
              //relative to the width and height set for svg
//tut -  10