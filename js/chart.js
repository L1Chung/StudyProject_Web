// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("dpp-fb");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [10.4, 19.65, 7.23, 6.07, 3.47, 10.12, 17.34, 3.47, 0.0, 0.29, 2.6, 2.02, 17.34],
      backgroundColor:['#FF0000','#FF8000','#FFFF00','#80FF00','#00FF00','#00FF80','#00FFFF','#0080FF','#0000FF','#7F00FF','#FF00FF','#FF007F','#808080'],
      hoverBackgroundColor: [],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 0,
  },
});