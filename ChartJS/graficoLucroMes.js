new Chart(document.getElementById("canvas-grafico-lucro-mes"), {
  type: "doughnut",
  plugins: [ChartDataLabels],
  data: {
    labels: ["Lucro", "Prejuizo"],
    datasets: [
      {
        backgroundColor: ["rgba(33, 184, 171, 0.7)"],
        data: [80, 20],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      display: false,
      position: "right",
      labels: {
        usePointStyle: true,
        textAlign: "left",
        padding: 10,
        fontSize: 11,
      },
    },
    plugins: {
      datalabels: {
        display: false,
        anchor: "center",
        labels: {
          title: {
            display: false,
          },
          value: {
            color: "black",
            font: {
              weight: "bold",
              size: 8,
            },
          },
        },
      },
    },
  },
});
