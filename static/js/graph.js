const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ferrari', 'Williams', 'McLaren', 'Mercedes', 'Lotus'],
        datasets: [{
            label: 'Constructors Championships',
            data: [16, 9, 8, 8, 7],
            backgroundColor: [
                'rgba(255, 99, 71, 0.7)',
                'rgba(0, 3, 16, 0.7)',
                'rgba(223, 198, 71, 0.7)',
                'rgba(255, 34, 0, 0.7)',
                'rgba(144, 187, 16, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 71, 1)',
                'rgba(0, 3, 16, 1)',
                'rgba(223, 198, 71, 1)',
                'rgba(255, 100, 60, 1)',
                'rgba(144, 187, 16, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Michael S.', 'Lewis H.', 'Juan M.', 'Alain P.', 'Sebastian V.'],
        datasets: [{
            label: 'Driver Championships',
            data: [7, 7, 5, 4, 4],
            backgroundColor: [
                'rgba(255, 99, 71, 0.7)',
                'rgba(0, 3, 16, 0.7)',
                'rgba(223, 198, 71, 0.7)',
                'rgba(255, 34, 0, 0.7)',
                'rgba(144, 187, 16, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 71, 1)',
                'rgba(0, 3, 16, 1)',
                'rgba(223, 198, 71, 1)',
                'rgba(255, 100, 60, 1)',
                'rgba(144, 187, 16, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['UK', 'Germany', 'Germany', 'Argentina'],
        datasets: [{
            label: 'Countrywise winner',
            data: [46.8, 25.33, 17.02, 10.63],
            backgroundColor: [
            'rgba(255, 99, 71, 0.7)',
                'rgba(0, 3, 16, 0.7)',
                'rgba(223, 198, 71, 0.7)',
                'rgba(255, 34, 0, 0.7)',
                'rgba(144, 187, 16, 0.7)'
            ],
            hoverOffset: 4
        }]
    },
});

const ctx4 = document.getElementById('myChart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21', 'R22'],
        datasets: [{
          label: 'Max Verstappen Standings 2021',
          data: [18, 25, 18, 19, 25, 0, 26, 25, 26, 3, 2, 12.5, 25, 2, 18, 18, 25, 15, 20, 19, 18, 26],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
    },
});
