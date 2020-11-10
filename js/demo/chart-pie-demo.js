// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
try {

  var ctx = document.getElementById("dpp");
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
      datasets: [{
        data: [9.54, 19.26, 8.14, 6.62, 3.53, 8.64, 17.63, 3.53, 0.1, 0.52, 2.06, 1.67, 18.77],
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
      cutoutPercentage: 80,
    },
  });
  
} catch (error) {
  
}

try {
  var ctx = document.getElementById("kmt");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [10.54, 12.18, 3.28, 9.71, 1.5, 5.87, 11.77, 17.37, 1.32, 1.36, 1.5, 1.46, 22.12],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}



try {
  var ctx = document.getElementById("power");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [11.07, 43.09, 5.43, 1.82, 0.29, 1.42, 7.5, 5.83, 0.33, 1.67, 2.98, 2.25, 16.32],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}


try {
  ////
var ctx = document.getElementById("pfp");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [12.14, 45.17, 3.86, 0.98, 0.0, 1.98, 7.45, 4.36, 1.73, 3.33, 2.35, 2.1, 14.51],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  var ctx = document.getElementById("state");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [16.42, 32.05, 4.4, 1.11, 0.36, 0.65, 6.96, 2.92, 0.73, 1.36, 2.53, 2.3, 28.21],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}


try {
  ////
var ctx = document.getElementById("tpp");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [3.54, 6.39, 14.92, 0.15, 0.39, 3.16, 30.56, 11.5, 0.46, 0.15, 1.77, 0.23, 26.77],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}


try {
  var ctx = document.getElementById("dpp-ig");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [8.68, 18.87, 9.06, 7.17, 3.58, 7.17, 17.92, 3.58, 0.19, 0.75, 1.51, 1.32, 20.19],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}


try {
  ////
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  // Pie Chart Example
var ctx = document.getElementById("kmt-ig");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [9.77, 9.2, 2.3, 14.94, 1.72, 7.47, 10.92, 13.79, 1.15, 2.3, 1.72, 0.57, 24.14],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  ////
var ctx = document.getElementById("kmt-fb");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [11.32, 15.17, 4.27, 4.49, 1.28, 4.27, 12.61, 20.94, 1.5, 0.43, 1.28, 2.35, 20.09],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  // Pie Chart Example
var ctx = document.getElementById("power-ig");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [12.07, 41.81, 5.82, 1.72, 0.43, 1.51, 5.82, 5.6, 0.22, 2.16, 3.45, 2.59, 16.81],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  var ctx = document.getElementById("power-fb");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [10.06, 44.38, 5.03, 1.92, 0.15, 1.33, 9.17, 6.07, 0.44, 1.18, 2.51, 1.92, 15.83],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}


try {
  // Pie Chart Example
var ctx = document.getElementById("pfp-ig");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [13.79, 43.1, 1.72, 1.72, 0.0, 1.72, 6.9, 1.72, 1.72, 5.17, 3.45, 3.45, 15.52],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  ////
var ctx = document.getElementById("pfp-fb");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [10.5, 47.25, 6.0, 0.25, 0.0, 2.25, 8.0, 7.0, 1.75, 1.5, 1.25, 0.75, 13.5],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  // Pie Chart Example
var ctx = document.getElementById("state-ig");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [14.36, 30.05, 4.26, 1.06, 0.27, 0.53, 6.91, 2.13, 1.06, 1.33, 2.13, 2.13, 33.78],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}


try {
  var ctx = document.getElementById("state-fb");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [18.49, 34.05, 4.55, 1.16, 0.46, 0.77, 7.01, 3.7, 0.39, 1.39, 2.93, 2.47, 22.65],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

try {
  // Pie Chart Example
var ctx = document.getElementById("tpp-ig");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data:[2.94, 5.88, 26.47, 0.0, 0.0, 2.94, 26.47, 14.71, 0.0, 0.0, 2.94, 0.0, 17.65],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}


try {
  var ctx = document.getElementById("tpp-fb");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent","Percent"],
    datasets: [{
      data: [4.14, 6.9, 3.37, 0.31, 0.77, 3.37, 34.66, 8.28, 0.92, 0.31, 0.61, 0.46, 35.89],
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
    cutoutPercentage: 80,
  },
});
} catch (error) {
  
}

