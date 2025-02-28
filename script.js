$(document).ready(function() {
    init(); // Initialize the charts once the DOM is ready
});

function init() {
    // Get the canvas element for the pie chart
    const pieCtx = document.getElementById('myPieChart');

    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Social Media', 'Entertainment', 'Productivity', 'Health'],
                datasets: [{
                    label: '% of Time Spent on Phone by Category',
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                    },
                    title: {
                        display: true,
                        text: '% of Time Spent on Categories',
                    }
                },
            }
        });
    }
    const secondPieCtx = document.getElementById('mySecondPieChart');

    if (secondPieCtx) {
        new Chart(secondPieCtx, {
            type: 'pie',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Amount of Steps',
                    data: [250, 20, 50, 90],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 205, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 205, 86, 1)'
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                    },
                    title: {
                        display: true,
                        text: 'No. of Steps Taken',
                    }
                },
            }
        });
    }
}