new Chart(document.getElementById("canvas-grafico-dre"), {
  type: "horizontalBar",
  plugins: [ChartDataLabels],
  data: {
    labels: [
      "Impostos",
      "Fornecedores",
      "Colaboradores",
      "Despesas",
      "Outros",
      "Prejuízo",
    ],
    datasets: [
      {
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(153, 102, 255)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(255, 159, 64)",
        ],
        data: [98119.74, 1500.0, 83000.97, 5400.67, 89239.0, 62020.9],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
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
