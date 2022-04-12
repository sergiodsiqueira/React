new Chart(document.getElementById("canvas-grafico-variacao-caixa"), {
  type: "line",
  data: {
    labels: [
      "Jan.",
      "Fev.",
      "Mar.",
      "Abr.",
      "Mai.",
      "Jun.",
      // "Jul.",
      // "Ago.",
      // "Set.",
      // "Out.",
      // "Nov.",
      // "Dez.",
    ],
    datasets: [
      {
        borderWidth: 1,
        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgb(153, 102, 255)"],
        data: [98119.74, 1500.0, 83000.97, 5400.67, 89239.0, 62020.9],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
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
  },
});
