
/////BAR GRAPH/////////////
// var width = 900;
// var height = 900;

// var data = [10,123,34,66,33,78,66,88,44,55]

// var widthScale = d3.scale.linear()
//                 .domain([10,123])
//                 .range([0,400]);

// var axis = d3.svg.axis()
//           .scale(widthScale)
//           .ticks(5);

// var canvas = d3.selectAll("h1")
//              .append("svg")
//              .attr("width", width)
//              .attr("height", height)
//              .attr("transform", "translate(200, 100)")
//              .append("g");
          

// var bars = canvas.selectAll("rect")
//           .data(data)
//           .enter()
//             .append("rect")
//               .transition()
//               .each("start", function() {d3.select(this).attr("fill", "orange") })
//               .delay(1000)
//               .duration(1500)
//               .attr("width", function(d) { return d * 2})
//               .attr("height", 33)
//               .attr("y", function (d, i) { return i * 51 })
//               .attr("fill", "blue");


//               canvas.append('g')
//                     .attr("transform", "translate(0,480)")
//                     .call(axis)
         
              //relative to the width and height set for svg
//tut -  10

///draws simple circle///

// var data = [10,23,33,44,55,66,77,88];
// var r = 100;

// var canvas = d3.select("h1").append("svg")
//               .attr("width", 500)
//               .attr("height", 500);
// var r = 100;
// var p = Math.PI * 2;

// var group = canvas.append("g")
//             .attr("transform", "translate(100, 100)");

// var arc = d3.svg.arc()
//       .innerRadius(r - 20)
//       .outerRadius(r)
//       .startAngle(0)
//       .endAngle(p);



// group.append("path")
//       .attr("d", arc);

var data = [39,252,555,141,32];

var r = 650;
var width = 10000;
var height = 10000;
var color = d3.scale.ordinal()
            .range(["green", "orange", "purple","red"])


var canvas = d3.select("h1").append('svg')
            .attr("width", width)
            .attr("height", height);

var group = canvas.append("g")
            .attr("transform", "translate(800, 800)");

var arc = d3.svg.arc()
          .innerRadius(500)
          .outerRadius(r);

var pie = d3.layout.pie()
          .value(function(d) {return d; });

var arcs = group.selectAll(".arc")
          .data(pie(data))
          .enter()
              .append("g")
              .attr("class", "arc");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", function(d) { return color(d.data) });

        arcs.append("text")
            .attr("transform", function (d) { return "translate("+ arc.centroid(d) + ")"; })
            .text(function(d) {return d.data});