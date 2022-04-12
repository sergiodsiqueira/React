new Chart(document.getElementById("canvas-grafico-ativo-passivo"), {
  type: "bar",
  plugins: [ChartDataLabels],
  data: {
    labels: ["Ativo", "A. Circulante", "Passivo", "Passivo Circulante"],
    datasets: [
      {
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(153, 102, 255)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        data: [10000, 8000, 7000, 5000],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: "center",
        labels: {
          title: {
            display: false,
          },
          value: {
            color: "black",
            font: {
              weight: "bold",
              size: 9,
            },
          },
        },
      },
    },
  },
});
