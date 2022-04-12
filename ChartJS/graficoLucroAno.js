new Chart(document.getElementById("canvas-grafico-lucro-ano"), {
  type: "doughnut",
  plugins: [ChartDataLabels],
  data: {
    labels: ["Lucro", "Prejuizo"],
    datasets: [
      {
        backgroundColor: ["rgba(143, 6, 212, 0.7)"],
        data: [30, 70],
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
