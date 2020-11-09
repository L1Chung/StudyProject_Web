// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

var ctx = document.getElementById("myAreaChart-FB");
var dataDPP_fb = {
  label: "民進黨",
  data: [11, 21, 40, 35, 57, 72, 82, 99],
  lineTension: 0.3,
  backgroundColor: "rgba(27, 148, 49, 0.05)",
  borderColor: "rgba(27, 148, 49, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(27, 148, 49, 1)",
  pointBorderColor: "rgba(27, 148, 49, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(27, 148, 49, 1)",
  pointHoverBorderColor: "rgba(27, 148, 49, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
  borderColor: '#1B9431'
};

var dataKmt_fb = {
  label: "國民黨",
  data: [52, 34, 43, 63, 63, 72, 82, 82],
  lineTension: 0.3,
  backgroundColor: "rgba(78, 115, 223, 0.05)",
  borderColor: "rgba(0, 0, 149, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(0, 0, 149, 1)",
  pointBorderColor: "rgba(0, 0, 149, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(0, 0, 149, 1)",
  pointHoverBorderColor: "rgba(0, 0, 149, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#000095'
};

var dataPFP_fb = {
  label: "親民黨",
  data: [51, 12, 27, 26, 25, 25, 25, 25],
  lineTension: 0.3,
  backgroundColor: "rgba(255, 99, 16, 0.05)",
  borderColor: "rgba(255, 99, 16, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(255, 99, 16, 1)",
  pointBorderColor: "rgba(255, 99, 16, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(255, 99, 16, 1)",
  pointHoverBorderColor: "rgba(255, 99, 16, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#FF6310'
};

var dataPower_fb = {
  label: "時代力量",
  data: [49, 39, 72, 113, 81, 65, 79, 47],
  lineTension: 0.3,
  backgroundColor: "rgba(249, 190, 1, 0.05)",
  borderColor: "rgba(249, 190, 1, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(249, 190, 1, 1)",
  pointBorderColor: "rgba(249, 190, 1, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(249, 190, 1, 1)",
  pointHoverBorderColor: "rgba(249, 190, 1, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#F9BE01'
};

var dataState_fb = {
  label: "台灣基進黨",
  data: [168, 86, 36, 56, 122, 74, 50, 56],
  lineTension: 0.3,
  backgroundColor: "rgba(167, 63, 36, 0.05)",
  borderColor: "rgba(167, 63, 36, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(167, 63, 36, 1)",
  pointBorderColor: "rgba(167, 63, 36, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(167, 63, 36, 1)",
  pointHoverBorderColor: "rgba(167, 63, 36, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#A73f24'
};

var dataTPP_fb = {
  label: "民眾黨",
  data: [84, 56, 68, 70, 76, 75, 101, 83],
  lineTension: 0.3,
  backgroundColor: "rgba(40, 200, 200, 0.05)",
  borderColor: "rgba(40, 200, 200, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(40, 200, 200, 1)",
  pointBorderColor: "rgba(40, 200, 200, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(40, 200, 200, 1)",
  pointHoverBorderColor: "rgba(40, 200, 200, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#28C8C8'
};

var fbData = {
  labels: ['2020/01','2020/02', '2020/03', '2020/04', '2020/05', '2020/06', '2020/07', '2020/08'],
  datasets: [dataDPP_fb, dataKmt_fb,dataPFP_fb,dataPower_fb,dataState_fb,dataTPP_fb]
};

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: fbData,
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ':'+ number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

var ctx = document.getElementById("myAreaChart-ig");
var dataDpp_ig = {
  label: "民進黨",
  data: [10, 0, 3, 14, 15, 22, 19, 23],
  lineTension: 0.3,
  backgroundColor: "rgba(27, 148, 49, 0.05)",
  borderColor: "rgba(27, 148, 49, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(27, 148, 49, 1)",
  pointBorderColor: "rgba(27, 148, 49, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(27, 148, 49, 1)",
  pointHoverBorderColor: "rgba(27, 148, 49, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
  borderColor: '#1B9431'
};

var dataKmt_ig = {
  label: "國民黨",
  data: [10, 0, 0, 0, 0, 0, 0, 0],
  lineTension: 0.3,
  backgroundColor: "rgba(0, 0, 149, 0.05)",
  borderColor: "rgba(0, 0, 149, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(0, 0, 149, 1)",
  pointBorderColor: "rgba(0, 0, 149, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(0, 0, 149, 1)",
  pointHoverBorderColor: "rgba(0, 0, 149, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#000095'
};

var dataPFP_ig = {
  label: "親民黨",
  data: [4, 4, 17, 10, 6, 6, 5, 5],
  lineTension: 0.3,
  backgroundColor: "rgba(255, 99, 16, 0.05)",
  borderColor: "rgba(255, 99, 16, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(255, 99, 16, 1)",
  pointBorderColor: "rgba(255, 99, 16, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(255, 99, 16, 1)",
  pointHoverBorderColor: "rgba(255, 99, 16, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#FF6310'
};

var dataPower_ig = {
  label: "時代力量",
  data: [8, 37, 32, 21,17, 13, 11, 2],
  lineTension: 0.3,
  backgroundColor: "rgba(249, 190, 1, 0.05)",
  borderColor: "rgba(249, 190, 1, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(249, 190, 1, 1)",
  pointBorderColor: "rgba(249, 190, 1, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(249, 190, 1, 1)",
  pointHoverBorderColor: "rgba(249, 190, 1, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#F9BE01'
};

var dataState_ig = {
  label: "台灣基進黨",
  data: [9, 0, 1, 7, 35, 14, 12, 3],
  lineTension: 0.3,
  backgroundColor: "rgba(167, 63, 36, 0.05)",
  borderColor: "rgba(167, 63, 36, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(167, 63, 36, 1)",
  pointBorderColor: "rgba(167, 63, 36, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(167, 63, 36, 1)",
  pointHoverBorderColor: "rgba(167, 63, 36, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#A73f24'
};

var dataTPP_ig = {
  label: "民眾黨",
  data: [0, 0, 8, 8, 1, 0, 0, 0],
  lineTension: 0.3,
  backgroundColor: "rgba(40, 200, 200, 0.05)",
  borderColor: "rgba(40, 200, 200, 1)",
  pointRadius: 3,
  pointBackgroundColor: "rgba(40, 200, 200, 1)",
  pointBorderColor: "rgba(40, 200, 200, 1)",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(40, 200, 200, 1)",
  pointHoverBorderColor: "rgba(40, 200, 200, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
borderColor: '#28C8C8'
};

var igData = {
  labels: ['2020/01','2020/02', '2020/03', '2020/04', '2020/05', '2020/06', '2020/07', '2020/08'],
  datasets: [dataDpp_ig, dataKmt_ig,dataPFP_ig,dataPower_ig,dataState_ig,dataTPP_ig]
};

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: igData,
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ':'+ number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    
    labels: ['陳柏惟\n台灣基進', '許淑華\n中國國民黨', '高嘉瑜\n民主進步黨', '王定宇\n民主進步黨', '蔣萬安\n中國國民黨', '洪孟楷\n中國國民黨', '趙天麟\n民主進步黨', '江啟臣\n中國國民黨', '陳亭妃\n民主進步黨', '賴士葆\n中國國民黨'],
    datasets: [{
      label: "數量",
      backgroundColor: [
        'rgba(167, 63, 36, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
      ],
      borderColor: [
        'rgba(167, 63, 36, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
      ],
      data: [12046.36, 7225.83, 5783.474, 3144.153, 2952.519, 2951.228, 2792.274, 2733.31, 2594.587, 2385.195]
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 8,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value) + 'K';
          }
        },
        gridLines: {
          drawBorder: false,
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ':' + number_format(tooltipItem.yLabel)+'K';
        }
      }
    }
  }
});


var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    
    labels: ['陳柏惟\n台灣基進', '許淑華\n中國國民黨', '高嘉瑜\n民主進步黨', '王定宇\n民主進步黨', '蔣萬安\n中國國民黨', '洪孟楷\n中國國民黨', '趙天麟\n民主進步黨', '江啟臣\n中國國民黨', '陳亭妃\n民主進步黨', '賴士葆\n中國國民黨'],
    datasets: [{
      label: "數量",
      backgroundColor: [
        'rgba(167, 63, 36, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
      ],
      borderColor: [
        'rgba(167, 63, 36, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
        'rgba(27, 148, 49, 1)',
        'rgba(0, 0, 149, 1)',
      ],
      data: [10856.738, 6987.626, 5321.67, 2816.998, 2855.832, 2830.725, 2713.253, 2640.301, 2497.234, 2152.142]
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 8,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value) + 'K';
          }
        },
        gridLines: {
          drawBorder: false,
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ':' + number_format(tooltipItem.yLabel)+'K';
        }
      }
    }
  }
});
