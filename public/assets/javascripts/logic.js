      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        //set bar options
        var barOptions = {
          'title': 'How Much Pizza I Ate Last Night',
          'width':600,
          'height': 500
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('googlechart'));
        chart.draw(data, options);

        var barChart = new google.visualization.BarChart(document.getElementById('barchart'))
        barChart.draw(data, barOptions);
      }

//Array to hold the Data
var dataArray =  [10, 20, 30, 40, 50];
//Set width of svg
var width = 500;
//Set height of svg
var height = 500;

//Set width scale to appropriate data size
var widthScale = d3.scale.linear()
                  .domain([0, 50])
                  .range([0, 500]);

//set color scheme to change from low data values to high data values
var colorScale = d3.scale.linear()
                  .domain([0, 50])
                  .range(["orange", "teal"]);  

//draw the scale of x axis label with appropriate tick values
var axis = d3.svg.axis()
            .scale(widthScale)
            .ticks(5);
//set svg properties
var canvas = d3.select("p")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(20, 0)"); // 50 pixels to the right, 50 pixels down x/y axis

//draw bar to according to data points 
var bars = canvas.selectAll("rect")
          .data(dataArray)
          .enter() //place holders for how many #s in array
            .append("rect") //for each place holders, append rectangle
            .attr("width", function(d) { return widthScale(d) })
            .attr("height", 50)
            .attr("fill", function(d) { return colorScale(d) })
            .attr("y", function(d, i) { return i * 100 });

//moves the canvas to match x axis values
canvas.append('g')
      .attr("transform", "translate(0, 450)")
      .call(axis);





// var circle = canvas.append("circle")
//             .attr("cx", 200) //"c" means center "x" means horizontal
//             .attr("cy", 200) //y means verital
//             .attr("r", 55) // r means radius
//             .attr("fill", "blue"); // fill is to color the figure in

// var rect = canvas.append("rect")
//             .attr("width", 500)
//             .attr("height", 100)
//             .attr("fill", "teal"); 
         

// var line = canvas.append("line")
//             .attr("x1", 0)
//             .attr("y1", 100)
//             .attr("x2", 200)
//             .attr("y2", 200)
//             .attr("stroke", "green")
//             .attr("stroke-width", 10);