new Chart(document.getElementById("canvas-grafico-ciclo-financeiro"), {
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
        backgroundColor: ["rgba(124, 191, 131, 0.2)"],
        borderColor: ["rgb(124, 191, 131)"],
        data: [97, 93, 101, 97, 121, 95],
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
