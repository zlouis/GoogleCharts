

var chart1; // globally available
$(function() {
       chart1 = Highcharts.stockChart('chartContainer', {
         rangeSelector: {
            selected: 1
         },
         series: [{
            name: 'USD to EUR',
            data: usdtoeur // predefined JavaScript array
         }]
      });
   });