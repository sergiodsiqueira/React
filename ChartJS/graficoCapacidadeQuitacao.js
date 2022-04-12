new Chart(document.getElementById("canvas-grafico-capacidade-quitacao"), {
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
        backgroundColor: ["rgba(13, 169, 186, 0.2)"],
        borderColor: ["rgb(13, 169, 186)"],
        data: [0.11, 0.12, 0.15, 0.11, 0.18, 0.2],
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
