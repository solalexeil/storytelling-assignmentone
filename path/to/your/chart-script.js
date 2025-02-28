document.addEventListener('DOMContentLoaded', function() {
    const pieCtx = document.getElementById('myPieChart');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Social Media', 'Entertainment', 'Health', 'Productivity'],
            datasets: [{
                label: '% of Time Spent on Phone by Category',
                data: [45, 25, 10, 20],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
});
