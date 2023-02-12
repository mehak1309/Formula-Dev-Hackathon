d3.csv("./static/js/lr_predicted_data.csv").then(lr_chart);

function lr_chart(players){
  var x1 = players.map(function (d) {
    return d.id;
  });
  var y1 = players.map(function (d) {
    return d.actual_value;
  });
  var y2 = players.map(function (d) {
    return d.predicted_value;
  });


// console.log(x1, y1, y2);

const ctx7 = document.getElementById('myChart7').getContext('2d');
const myChart7 = new Chart(ctx7, {
  type: "line",
  options: {
        plugins: {
            title: {
                display: true,
                text: 'Linear Regression Model',
                font: {
                  size: 30
                }
            }
        }
  }, 
  data: {
    labels: x1.slice(100,500),
    datasets: [
      {
        label: 'Actual Value',
        data: y1.slice(100,500),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Predicted Value',
        data: y2.slice(100,500),
        fill: false,
        borderColor: 'rgb(192, 192, 75)',
        tension: 0.1
      }
    ]
  }
});
}

d3.csv("./static/js/knr_predicted_data.csv").then(knr_chart);

function knr_chart(players){
  var x1 = players.map(function (d) {
    return d.id;
  });
  var y1 = players.map(function (d) {
    return d.actual_value;
  });
  var y2 = players.map(function (d) {
    return d.predicted_value;
  });


// console.log(x1, y1, y2);

const ctx8 = document.getElementById('myChart8').getContext('2d');
const myChart8 = new Chart(ctx8, {
  type: "line",
  options: {
        plugins: {
            title: {
                display: true,
                text: 'K-Neighbors Regression Model',
                font: {
                  size: 30
                }
            }
        }
  }, 
  data: {
    labels: x1.slice(100,500),
    datasets: [
      {
        label: 'Actual Value',
        data: y1.slice(100,500),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Predicted Value',
        data: y2.slice(100,500),
        fill: false,
        borderColor: 'rgb(192, 192, 75)',
        tension: 0.1
      }
    ]
  }
});
}

d3.csv("./static/js/dtr_predicted_data.csv").then(dtr_chart);

function dtr_chart(players){
  var x1 = players.map(function (d) {
    return d.id;
  });
  var y1 = players.map(function (d) {
    return d.actual_value;
  });
  var y2 = players.map(function (d) {
    return d.predicted_value;
  });


// console.log(x1, y1, y2);

const ctx9 = document.getElementById('myChart9').getContext('2d');
const myChart9 = new Chart(ctx9, {
  type: "line",
  options: {
        plugins: {
            title: {
                display: true,
                text: 'Decision Tree Regression Model',
                font: {
                  size: 30
                }
            }
        }
  }, 
  data: {
    labels: x1.slice(100,500),
    datasets: [
      {
        label: 'Actual Value',
        data: y1.slice(100,500),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Predicted Value',
        data: y2.slice(100,500),
        fill: false,
        borderColor: 'rgb(192, 192, 75)',
        tension: 0.1
      }
    ]
  }
});
}

d3.csv("./static/js/mlr_predicted_data.csv").then(mlr_chart);

function mlr_chart(players){
  var x1 = players.map(function (d) {
    return d.id;
  });
  var y1 = players.map(function (d) {
    return d.actual_value;
  });
  var y2 = players.map(function (d) {
    return d.predicted_value;
  });


// console.log(x1, y1, y2);

const ctx10 = document.getElementById('myChart10').getContext('2d');
const myChart10 = new Chart(ctx10, {
  type: "line",
  options: {
        plugins: {
            title: {
                display: true,
                text: 'MLP Regression Model',
                font: {
                  size: 30
                }
            }
        }
  }, 
  data: {
    labels: x1.slice(100,500),
    datasets: [
      {
        label: 'Actual Value',
        data: y1.slice(100,500),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Predicted Value',
        data: y2.slice(100,500),
        fill: false,
        borderColor: 'rgb(192, 192, 75)',
        tension: 0.1
      }
    ]
  }
});
}